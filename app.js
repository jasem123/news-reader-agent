/*const newsTitle = "Liverpool wins an important match";

const newsContainer = document.getElementById("news-container");

newsContainer.innerHTML = newsTitle;*/

// Fake news data for testing before using a real API
const news = [
  {
    title: "Liverpool wins an important match",
    topic: "football",
    source: "BBC Sport",
    summary: "Liverpool won after a strong performance.",
  },
  {
    title: "Real Madrid signs a young player",
    topic: "football",
    source: "Sky Sports",
    summary: "Real Madrid added a young talent to the squad.",
  },
  {
    title: "AI tools become more popular",
    topic: "technology",
    source: "Tech News",
    summary: "More people are using AI tools for work and learning.",
  },
];

// Show news articles on the page
function showNews(article) {
  const newsContainer = document.getElementById("news-container");

  // Clear old news before showing new results
  newsContainer.innerHTML = "";

  // Loop through each article and add it to the page
  article.forEach((article) => {
    newsContainer.innerHTML += `
      <h3>${article.title}</h3>
      <p><strong>Source:</strong> ${article.source}</p>
      <p>${article.summary}</p>
    `;
  });
}

// Show all news when the page first opens
// showNews(news);

// Get HTML elements from the page
const searchBtn = document.getElementById("search-btn");
const topicInput = document.getElementById("topic-input");

// When the user clicks Search, filter news by topic
searchBtn.addEventListener("click", () => {
  // Get user input, remove spaces, and make it lowercase
  const topic = topicInput.value.trim().toLowerCase();

  // Keep only articles with the same topic
  const filteredNews = news.filter((article) => article.topic === topic);

  // Show the filtered news on the page
  showNews(filteredNews);
});
