// Add this inside script.js to check for saved feedback when the page loads
window.addEventListener('DOMContentLoaded', () => {
  let savedRecommendations = JSON.parse(localStorage.getItem('portfolio_recs')) || [];
  savedRecommendations.forEach(text => {
    renderRecommendationDOM(text);
  });
});

function addRecommendation() {
  let recommendation = document.getElementById("new_recommendation");
  if (recommendation.value && recommendation.value.trim() !== "") {
    let cleanText = recommendation.value.trim();
    
    // 1. Save locally to local browser memory array
    let currentRecs = JSON.parse(localStorage.getItem('portfolio_recs')) || [];
    currentRecs.push(cleanText);
    localStorage.setItem('portfolio_recs', JSON.stringify(currentRecs));
    
    // 2. Render to DOM
    renderRecommendationDOM(cleanText);
    showPopup(true);
    recommendation.value = "";
  }
}

function renderRecommendationDOM(text) {
  var element = document.createElement("div");
  element.setAttribute("class", "recommendation");
  element.innerHTML = "<span>&#8220;</span>" + text + "<span>&#8221;</span>";
  document.getElementById("all_recommendations").appendChild(element);
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}
// Dynamic Header Shrink Loop
window.addEventListener("scroll", function () {
  const header = document.getElementById("main-header");
  
  // Trigger shrink state if page is scrolled down more than 50 pixels
  if (window.scrollY > 50) {
    header.classList.add("shrunk");
  } else {
    header.classList.remove("shrunk");
  }
});
