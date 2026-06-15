/*const newsTitle = "Liverpool wins an important match";

const newsContainer = document.getElementById("news-container");

newsContainer.innerHTML = newsTitle;*/

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
function showNews(article) {
  const newsContainer = document.getElementById("news-container");

  newsContainer.innerHTML = "";

  article.forEach((article) => {
    newsContainer.innerHTML += `
      <h3>${article.title}</h3>
      <p><strong>Source:</strong> ${article.source}</p>
      <p>${article.summary}</p>
    `;
  });
}
// showNews(news);

const searchBtn = document.getElementById("search-btn");
const topicInput = document.getElementById("topic-input");

searchBtn.addEventListener("click", () => {
  const topic = topicInput.value.trim().toLowerCase();
  const filteredNews = news.filter((article) => article.topic === topic);
  showNews(filteredNews);
});
