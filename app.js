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

async function getNews() {
  // This function will eventually fetch news from an API
  // For now, it just returns the fake news data
  return news;
}

// Show news articles on the page
function showNews(article) {
  const newsContainer = document.getElementById("news-container");

  // Clear old news before showing new results
  newsContainer.innerHTML = "";

  // If no articles are found, show a message
  if (article.length === 0) {
    newsContainer.innerHTML = "<p>No articles found for this topic.</p>";
    return;
  }

  // Loop through each article and add it to the page
  article.forEach((article) => {
    newsContainer.innerHTML += `
      <h3>${article.title}</h3>
      <p><strong>Topic:</strong> ${article.topic}</p>
      <p><strong>Source:</strong> ${article.source}</p>
      <p>${article.summary}</p>
    `;
  });
}

// Get HTML elements from the page
const searchBtn = document.getElementById("search-btn");
const topicInput = document.getElementById("topic-input");

async function loadNews() {
  // Get all news articles
  const allNews = await getNews();
  // Show all news when the page first opens
  showNews(allNews);
}
loadNews();

// When the user clicks Search, filter news by topic
async function searchNews() {
  // Get user input, remove spaces, and make it lowercase
  const topic = topicInput.value.trim().toLowerCase();

  // Get all news articles
  const allNews = await getNews();

  // If the input is empty, show all news
  if (topic === "") {
    showNews(allNews);
    return;
  }

  // Keep only articles with the same topic
  const filteredNews = allNews.filter((article) =>
    article.topic.includes(topic),
  );

  // Show the filtered news on the page
  await showNews(filteredNews);
}

searchBtn.addEventListener("click", searchNews);

// If the user presses Enter key, trigger the search
topicInput.addEventListener("keypress", function (event) {
  // If the user presses Enter key, trigger the search
  if (event.key === "Enter") {
    searchNews();
  }
});
