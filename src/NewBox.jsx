import React, { useEffect, useState } from "react";

export default function NewsBox({ city }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = "pub_01945b028d9a4d7e88095c641dad84a0"; 

  useEffect(() => {
    if (!city) return;

    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://newsdata.io/api/1/news?apikey=${API_KEY}&q=${city}&country=in&language=en`
        );
        const data = await response.json();
        setArticles(data.results || []);
      } catch (error) {
        console.error("Error fetching news:", error);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [city]);

  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>📰 News in {city}</h3>
      {loading ? (
        <p>Loading news...</p>
      ) : articles.length > 0 ? (
        <ul style={styles.list}>
          {articles.map((article, idx) => (
            <li key={idx} style={styles.listItem}>
              <a href={article.link} target="_blank" rel="noopener noreferrer" style={styles.link}>
                {article.title}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No articles found for this city.</p>
      )}
    </div>
  );
}

const styles = {
  container: {
    marginTop: "2rem",
    padding: "1.5rem",
    backgroundColor: "#f4f4f4",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
  },
  heading: {
    fontSize: "1.4rem",
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: "1rem"
  },
  list: {
    paddingLeft: "1rem"
  },
  listItem: {
    marginBottom: "0.7rem"
  },
  link: {
    fontWeight: "500",
    color: "#007bff",
    textDecoration: "none"
  }
};



