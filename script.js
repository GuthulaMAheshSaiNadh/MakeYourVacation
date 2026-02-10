const packages = [
  {
    id: "goa-family-retreat",
    name: "Goa Family Beach Retreat",
    destination: "Goa, India",
    image:
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1200&q=80",
    type: "beach",
    audience: ["family", "kids"],
    vibe: ["relax", "beach", "sunset", "leisure"],
    budget: "standard",
    minDays: 4,
    maxDays: 7,
    bestMonths: [10, 11, 12, 1, 2, 3],
    idealVisitTime: ["early-morning", "morning", "evening"],
    visitTimeTips: {
      "early-morning": "Great for calm beach walks and cool weather.",
      morning: "Good for water sports before the sun gets stronger.",
      afternoon: "Best for indoor attractions, cafes, and museums.",
      evening: "Perfect for sunset cruises and beach dining.",
    },
    basePricePerPerson: 18000,
    highlights: ["Beachfront 4★ stay", "Island cruise", "Kids friendly water sports"],
  },
  {
    id: "himachal-adventure-trail",
    name: "Himachal Adventure Trail",
    destination: "Manali & Kasol, Himachal",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
    type: "adventure",
    audience: ["friends", "solo"],
    vibe: ["trek", "camp", "adventure", "mountains"],
    budget: "economy",
    minDays: 5,
    maxDays: 8,
    bestMonths: [3, 4, 5, 9, 10, 11],
    idealVisitTime: ["early-morning", "morning"],
    visitTimeTips: {
      "early-morning": "Best for long treks with clear mountain views.",
      morning: "Ideal for hiking, rafting, and adventure sports.",
      afternoon: "Use afternoons for local cafe stops and rest.",
      evening: "Good for campsite bonfire and relaxed walks.",
    },
    basePricePerPerson: 13500,
    highlights: ["Guided trek", "Camping under stars", "River rafting"],
  },
  {
    id: "kerala-luxury-escape",
    name: "Kerala Luxury Backwater Escape",
    destination: "Alleppey & Munnar, Kerala",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
    type: "honeymoon",
    audience: ["couple", "honeymoon"],
    vibe: ["romantic", "luxury", "relax", "nature"],
    budget: "premium",
    minDays: 4,
    maxDays: 6,
    bestMonths: [9, 10, 11, 12, 1, 2, 3],
    idealVisitTime: ["morning", "evening"],
    visitTimeTips: {
      "early-morning": "Serene sunrise views over the backwaters.",
      morning: "Perfect for sightseeing and premium resort activities.",
      afternoon: "Best for spa, wellness, and houseboat relaxation.",
      evening: "Ideal for romantic dinners and sunset lake rides.",
    },
    basePricePerPerson: 32000,
    highlights: ["Private houseboat", "Spa & candlelight dinner", "5★ resort stay"],
  },
  {
    id: "dubai-city-highlights",
    name: "Dubai City Highlights",
    destination: "Dubai, UAE",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    type: "city",
    audience: ["family", "friends", "couple"],
    vibe: ["shopping", "city", "luxury", "sightseeing"],
    budget: "premium",
    minDays: 3,
    maxDays: 5,
    bestMonths: [11, 12, 1, 2, 3],
    idealVisitTime: ["afternoon", "evening"],
    visitTimeTips: {
      "early-morning": "Good for old-town walks and light sightseeing.",
      morning: "Great for malls, museums, and cultural visits.",
      afternoon: "Ideal for indoor attractions and shopping malls.",
      evening: "Best for desert safari and skyline views.",
    },
    basePricePerPerson: 45000,
    highlights: ["Burj Khalifa tickets", "Desert safari", "Luxury hotel stay"],
  },
  {
    id: "rishikesh-budget-reset",
    name: "Rishikesh Budget Reset",
    destination: "Rishikesh, Uttarakhand",
    image:
      "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=1200&q=80",
    type: "mountain",
    audience: ["solo", "friends", "wellness"],
    vibe: ["yoga", "peace", "mountain", "budget"],
    budget: "economy",
    minDays: 3,
    maxDays: 6,
    bestMonths: [2, 3, 4, 9, 10, 11],
    idealVisitTime: ["early-morning", "morning", "evening"],
    visitTimeTips: {
      "early-morning": "Excellent for yoga and peaceful riverside sessions.",
      morning: "Good for temple visits and adventure activities.",
      afternoon: "Relax in cafes, wellness centers, or local markets.",
      evening: "Best time for Ganga aarti and calm walks.",
    },
    basePricePerPerson: 9000,
    highlights: ["Yoga sessions", "Ganga aarti", "Riverside camp"],
  },
  {
    id: "ranthambore-wildlife-special",
    name: "Ranthambore Wildlife Special",
    destination: "Ranthambore, Rajasthan",
    image:
      "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1200&q=80",
    type: "wildlife",
    audience: ["family", "friends"],
    vibe: ["safari", "wildlife", "photography", "nature"],
    budget: "standard",
    minDays: 3,
    maxDays: 5,
    bestMonths: [10, 11, 12, 1, 2, 3, 4, 5],
    idealVisitTime: ["early-morning", "evening"],
    visitTimeTips: {
      "early-morning": "Prime tiger-spotting window with active wildlife.",
      morning: "Great for jungle exploration and guided trails.",
      afternoon: "Often warmer; suitable for rest and photography reviews.",
      evening: "Second best safari slot with beautiful golden light.",
    },
    basePricePerPerson: 15000,
    highlights: ["Jeep safari", "Naturalist guide", "Heritage stay"],
  },
  {
    id: "andaman-island-delight",
    name: "Andaman Island Delight",
    destination: "Port Blair & Havelock, Andaman",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    type: "beach",
    audience: ["couple", "family"],
    vibe: ["beach", "snorkeling", "relax", "island"],
    budget: "premium",
    minDays: 5,
    maxDays: 7,
    bestMonths: [10, 11, 12, 1, 2, 3, 4],
    idealVisitTime: ["morning", "evening"],
    visitTimeTips: {
      "early-morning": "Great for peaceful beach walks and sunrise photos.",
      morning: "Best slot for snorkeling and marine activities.",
      afternoon: "Use for resort leisure and local cafes.",
      evening: "Perfect for beach sunset and seafood dining.",
    },
    basePricePerPerson: 38000,
    highlights: ["Scuba intro dive", "Private beach resort", "Island hopping"],
  },
  {
    id: "jaipur-heritage-break",
    name: "Jaipur Heritage Break",
    destination: "Jaipur, Rajasthan",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80",
    type: "city",
    audience: ["family", "friends", "couple"],
    vibe: ["culture", "fort", "food", "city"],
    budget: "standard",
    minDays: 3,
    maxDays: 5,
    bestMonths: [10, 11, 12, 1, 2, 3],
    idealVisitTime: ["morning", "evening"],
    visitTimeTips: {
      "early-morning": "Good for cool-weather fort exploration.",
      morning: "Best for sightseeing at Amer Fort and City Palace.",
      afternoon: "Ideal for museum tours and local cuisine stops.",
      evening: "Perfect for markets and cultural shows.",
    },
    basePricePerPerson: 16000,
    highlights: ["Amer Fort tour", "Heritage haveli stay", "Local food walk"],
  },
];

const budgetWeight = { economy: 1, standard: 2, premium: 3 };
const seasonByMonth = {
  12: "winter",
  1: "winter",
  2: "winter",
  3: "spring",
  4: "spring",
  5: "summer",
  6: "summer",
  7: "monsoon",
  8: "monsoon",
  9: "autumn",
  10: "autumn",
  11: "autumn",
};

const tripForm = document.getElementById("tripForm");
const result = document.getElementById("result");
const year = document.getElementById("year");
const startDateInput = document.getElementById("startDate");
const packageGrid = document.getElementById("packageGrid");

year.textContent = new Date().getFullYear();
startDateInput.valueAsDate = new Date();

function normalize(text) {
  return text.toLowerCase().trim();
}

function toTitleCase(value) {
  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function getMonthFromDate(dateString) {
  return new Date(dateString).getMonth() + 1;
}

function calculateSeasonScore(pkg, month) {
  if (pkg.bestMonths.includes(month)) return 25;

  const monthDistance = pkg.bestMonths.reduce((minDistance, bestMonth) => {
    const rawDistance = Math.abs(bestMonth - month);
    const wrappedDistance = 12 - rawDistance;
    return Math.min(minDistance, rawDistance, wrappedDistance);
  }, 12);

  return Math.max(6, 18 - monthDistance * 3);
}

function calculateVisitTimeScore(pkg, visitTime) {
  return pkg.idealVisitTime.includes(visitTime) ? 16 : 6;
}

function calculateScore(pkg, userInput) {
  const description = normalize(userInput.description);
  let score = 0;

  if (pkg.type === userInput.tripType) score += 28;

  if (pkg.budget === userInput.budget) {
    score += 24;
  } else {
    const budgetGap = Math.abs(budgetWeight[pkg.budget] - budgetWeight[userInput.budget]);
    score += Math.max(8, 18 - budgetGap * 6);
  }

  if (userInput.days >= pkg.minDays && userInput.days <= pkg.maxDays) {
    score += 16;
  } else {
    const dayDistance = Math.min(
      Math.abs(userInput.days - pkg.minDays),
      Math.abs(userInput.days - pkg.maxDays),
    );
    score += Math.max(4, 12 - dayDistance * 2);
  }

  score += calculateSeasonScore(pkg, userInput.month);
  score += calculateVisitTimeScore(pkg, userInput.visitTime);

  for (const token of [...pkg.vibe, ...pkg.audience]) {
    if (description.includes(token)) score += 5;
  }

  if (userInput.travelers >= 4 && pkg.audience.includes("family")) {
    score += 8;
  }

  if (userInput.travelers <= 2 && pkg.audience.includes("couple")) {
    score += 7;
  }

  return score;
}

function formatCurrency(amount) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(date);
}

function createTripItinerary(userInput, recommendation) {
  const date = new Date(userInput.startDate);
  const lines = [];

  for (let day = 1; day <= userInput.days; day += 1) {
    const currentDate = new Date(date);
    currentDate.setDate(date.getDate() + (day - 1));

    let planLine = `${formatDate(currentDate)} — ${toTitleCase(userInput.visitTime)} activity: `;

    if (day === 1) {
      planLine += `Arrival in ${recommendation.destination}, hotel check-in, and light exploration.`;
    } else if (day === userInput.days) {
      planLine += "Leisure morning, shopping/local food, and departure.";
    } else {
      planLine += `${recommendation.highlights[(day - 2) % recommendation.highlights.length]}.`;
    }

    lines.push(planLine);
  }

  return lines;
}

function renderPackageCards() {
  packageGrid.innerHTML = packages
    .map(
      (pkg) => `
      <article class="package-card">
        <img src="${pkg.image}" alt="${pkg.name}" loading="lazy" />
        <div class="package-body">
          <h3>${pkg.name}</h3>
          <p>${pkg.destination}</p>
          <div class="meta">
            <span class="tag">${pkg.type}</span>
            <span class="tag">${pkg.budget}</span>
            <span class="tag">From ${formatCurrency(pkg.basePricePerPerson)} / person</span>
          </div>
        </div>
      </article>`,
    )
    .join("");
}

function renderRecommendation(recommendation, userInput) {
  const total = recommendation.basePricePerPerson * userInput.travelers;
  const currentSeason = seasonByMonth[userInput.month];
  const isBestSeason = recommendation.bestMonths.includes(userInput.month);
  const itinerary = createTripItinerary(userInput, recommendation);
  const visitTip = recommendation.visitTimeTips[userInput.visitTime];

  const aiText = `Based on your description, I recommend ${recommendation.name} in ${recommendation.destination}. Your selected dates fall in ${currentSeason}, and this package is ${isBestSeason ? "in" : "near"} the best season for this destination.`;

  result.classList.remove("hidden");
  result.innerHTML = `
    <h3>✨ Your Best Package: ${recommendation.name}</h3>
    <img class="result-image" src="${recommendation.image}" alt="${recommendation.name}" />
    <p>${aiText}</p>
    <p><strong>Estimated Total:</strong> ${formatCurrency(total)} for ${userInput.travelers} traveler(s)</p>
    <p><strong>Highlights:</strong> ${recommendation.highlights.join(" • ")}</p>
    <div class="season-box">
      <span class="tag">Travel season: ${currentSeason}</span>
      <span class="tag">Best months: ${recommendation.bestMonths.join(", ")}</span>
      <span class="tag">Preferred visit time: ${toTitleCase(userInput.visitTime)}</span>
    </div>
    <p><strong>Visit time tip:</strong> ${visitTip}</p>
    <div class="meta">
      <span class="tag">${recommendation.type}</span>
      <span class="tag">${recommendation.budget} budget</span>
      <span class="tag">${recommendation.minDays}-${recommendation.maxDays} days ideal</span>
    </div>
    <div class="itinerary">
      <h4>Suggested Day-wise Plan (${formatDate(new Date(userInput.startDate))} onward)</h4>
      <ol>
        ${itinerary.map((item) => `<li>${item}</li>`).join("")}
      </ol>
    </div>
  `;
}

tripForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const userInput = {
    description: document.getElementById("description").value,
    budget: document.getElementById("budget").value,
    tripType: document.getElementById("tripType").value,
    startDate: document.getElementById("startDate").value,
    days: Number(document.getElementById("days").value),
    travelers: Number(document.getElementById("travelers").value),
    visitTime: document.getElementById("visitTime").value,
  };

  if (!userInput.startDate) {
    result.classList.remove("hidden");
    result.innerHTML = "<p>Please select a valid start date to build your trip plan.</p>";
    return;
  }

  userInput.month = getMonthFromDate(userInput.startDate);

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

renderPackageCards();
