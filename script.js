const packages = [
  {
    id: "goa-family-retreat",
    name: "Goa Family Beach Retreat",
    type: "beach",
    audience: ["family", "kids"],
    vibe: ["relax", "beach", "sunset", "leisure"],
    budget: "standard",
    minDays: 4,
    maxDays: 7,
    basePricePerPerson: 320,
    highlights: ["Beachfront 4★ stay", "Island cruise", "Kids friendly water sports"],
  },
  {
    id: "himachal-adventure-trail",
    name: "Himachal Adventure Trail",
    type: "adventure",
    audience: ["friends", "solo"],
    vibe: ["trek", "camp", "adventure", "mountains"],
    budget: "economy",
    minDays: 5,
    maxDays: 8,
    basePricePerPerson: 250,
    highlights: ["Guided trek", "Camping under stars", "River rafting"],
  },
  {
    id: "kerala-luxury-escape",
    name: "Kerala Luxury Backwater Escape",
    type: "honeymoon",
    audience: ["couple", "honeymoon"],
    vibe: ["romantic", "luxury", "relax", "nature"],
    budget: "premium",
    minDays: 4,
    maxDays: 6,
    basePricePerPerson: 540,
    highlights: ["Private houseboat", "Spa & candlelight dinner", "5★ resort stay"],
  },
  {
    id: "dubai-city-highlights",
    name: "Dubai City Highlights",
    type: "city",
    audience: ["family", "friends", "couple"],
    vibe: ["shopping", "city", "luxury", "sightseeing"],
    budget: "premium",
    minDays: 3,
    maxDays: 5,
    basePricePerPerson: 610,
    highlights: ["Burj Khalifa tickets", "Desert safari", "Luxury hotel stay"],
  },
  {
    id: "rishikesh-budget-reset",
    name: "Rishikesh Budget Reset",
    type: "mountain",
    audience: ["solo", "friends", "wellness"],
    vibe: ["yoga", "peace", "mountain", "budget"],
    budget: "economy",
    minDays: 3,
    maxDays: 6,
    basePricePerPerson: 170,
    highlights: ["Yoga sessions", "Ganga aarti", "Riverside camp"],
  },
  {
    id: "ranthambore-wildlife-special",
    name: "Ranthambore Wildlife Special",
    type: "wildlife",
    audience: ["family", "friends"],
    vibe: ["safari", "wildlife", "photography", "nature"],
    budget: "standard",
    minDays: 3,
    maxDays: 5,
    basePricePerPerson: 290,
    highlights: ["Jeep safari", "Naturalist guide", "Heritage stay"],
  },
];

const budgetWeight = { economy: 1, standard: 2, premium: 3 };

const tripForm = document.getElementById("tripForm");
const result = document.getElementById("result");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

function normalize(text) {
  return text.toLowerCase().trim();
}

function calculateScore(pkg, userInput) {
  const description = normalize(userInput.description);
  let score = 0;

  if (pkg.type === userInput.tripType) score += 35;

  if (pkg.budget === userInput.budget) {
    score += 30;
  } else {
    const budgetGap = Math.abs(budgetWeight[pkg.budget] - budgetWeight[userInput.budget]);
    score += Math.max(8, 22 - budgetGap * 7);
  }

  if (userInput.days >= pkg.minDays && userInput.days <= pkg.maxDays) {
    score += 20;
  } else {
    const dayDistance = Math.min(
      Math.abs(userInput.days - pkg.minDays),
      Math.abs(userInput.days - pkg.maxDays),
    );
    score += Math.max(5, 15 - dayDistance * 2);
  }

  for (const token of [...pkg.vibe, ...pkg.audience]) {
    if (description.includes(token)) score += 6;
  }

  if (userInput.travelers >= 4 && pkg.audience.includes("family")) {
    score += 10;
  }

  if (userInput.travelers <= 2 && pkg.audience.includes("couple")) {
    score += 8;
  }

  return score;
}

function formatCurrency(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

function renderRecommendation(recommendation, userInput) {
  const total = recommendation.basePricePerPerson * userInput.travelers;
  const aiText = `Based on your trip description, I recommend the ${recommendation.name}. It best matches your ${userInput.tripType} preference, ${userInput.budget} budget, and ${userInput.days}-day plan.`;

  result.classList.remove("hidden");
  result.innerHTML = `
    <h3>✨ Your Best Package: ${recommendation.name}</h3>
    <p>${aiText}</p>
    <p><strong>Estimated Total:</strong> ${formatCurrency(total)} for ${userInput.travelers} traveler(s)</p>
    <p><strong>Highlights:</strong> ${recommendation.highlights.join(" • ")}</p>
    <div class="meta">
      <span class="tag">${recommendation.type}</span>
      <span class="tag">${recommendation.budget} budget</span>
      <span class="tag">${recommendation.minDays}-${recommendation.maxDays} days ideal</span>
    </div>
  `;
}

tripForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const userInput = {
    description: document.getElementById("description").value,
    budget: document.getElementById("budget").value,
    tripType: document.getElementById("tripType").value,
    days: Number(document.getElementById("days").value),
    travelers: Number(document.getElementById("travelers").value),
  };

  const bestMatch = [...packages]
    .map((pkg) => ({ pkg, score: calculateScore(pkg, userInput) }))
    .sort((a, b) => b.score - a.score)[0]?.pkg;

  if (!bestMatch) {
    result.classList.remove("hidden");
    result.innerHTML =
      "<p>Sorry, we couldn't find a package. Please adjust your preferences and try again.</p>";
    return;
  }

  renderRecommendation(bestMatch, userInput);
});
