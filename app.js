/*const newsTitle = "Liverpool wins an important match";

const newsContainer = document.getElementById("news-container");

newsContainer.innerHTML = newsTitle;*/

console.log("app.js is connected");

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

const API_KEY = "c4154f0ffe1630212accf371a7b7b505"; // Replace with your actual API key

async function getNews(topic = "technology") {
  try {
    // Fetch news articles from the GNews API
    const url = `https://gnews.io/api/v4/search?q=${topic}&lang=en&max=5&apikey=${API_KEY}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }

    const data = await response.json();

    return data.articles || [];
  } catch (error) {
    console.error("Failed to fetch news:", error);
    const newsContainer = document.getElementById("news-container");
    newsContainer.innerHTML =
      "<p>Something went wrong loading news. Please try again later.</p>";
    return [];
  }
}

// Show news articles on the page
function showNews(articles) {
  const newsContainer = document.getElementById("news-container");
  newsContainer.innerHTML = "";

  if (articles.length === 0) {
    newsContainer.innerHTML = "<p>No articles found for this topic.</p>";
    return;
  }

  articles.forEach((article) => {
    newsContainer.innerHTML += `
      <div class="article-card">
        <h3>${article.title}</h3>
        <p><strong>Source:</strong> ${article.source.name}</p>
        <p><strong>Summary:</strong> ${article.description}</p>
        <p><a href="${article.url}" target="_blank">Read more</a></p>
      </div>
    `;
  });
}

// Get HTML elements from the page
const searchBtn = document.getElementById("search-btn");
const topicInput = document.getElementById("topic-input");

// Load news articles when the page first opens
async function loadNews() {
  // Show a loading message while fetching news
  const newsContainer = document.getElementById("news-container");
  newsContainer.innerHTML = "<p>Loading news ...</p>";

  // Get all news articles
  const article = await getNews("technology");
  // Show all news when the page first opens
  showNews(article);
}
loadNews();

// When the user clicks Search, filter news by topic
async function searchNews() {
  // Get user input, remove spaces, and make it lowercase
  const topic = topicInput.value.trim().toLowerCase();
  // Show a loading message while fetching news
  const newsContainer = document.getElementById("news-container");
  newsContainer.innerHTML = "<p>Loading news ...</p>";

  // Get all news articles
  const article = await getNews(topic);

  // If the input is empty, show all news
  if (topic === "") {
    return;
  }

  // Keep only articles with the same topic
  // const filteredNews = article.filter((article) =>
  // article.topic.includes(topic),
  // );

  // Show the filtered news on the page
  // await showNews(filteredNews);
}

searchBtn.addEventListener("click", searchNews);

// If the user presses Enter key, trigger the search
topicInput.addEventListener("keypress", function (event) {
  // If the user presses Enter key, trigger the search
  if (event.key === "Enter") {
    searchNews();
  }
});
