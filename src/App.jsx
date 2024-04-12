import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(1);
  const [category, setCategory] = useState("general");

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=4a4a284781cf4963a5f41ace29277a71`)
      .then(res => res.json())
      .then(data => setItems(data.articles));
  }, [category]);

  return (
    <div className="App">
      <h1 className="title">Noticias</h1>
      <div className="menu">
        <button className={active === 1 ? 'active' : ''} onClick={() => { setActive(1); setCategory("general"); }}>General</button>
        <button className={active === 2 ? 'active' : ''} onClick={() => { setActive(2); setCategory("business"); }}>Negocios</button>
        <button className={active === 3 ? 'active' : ''} onClick={() => { setActive(3); setCategory("technology"); }}>Tecnología</button>
        <button className={active === 4 ? 'active' : ''} onClick={() => { setActive(4); setCategory("science"); }}>Ciencia</button>
        <button className={active === 5 ? 'active' : ''} onClick={() => { setActive(5); setCategory("sports"); }}>Deportes</button>
      </div>
      <div className="news-grid">
        {items.map((item, index) => (
          <div key={index} className="news-item">
            {item.urlToImage && <img src={item.urlToImage} alt={item.title} />}
            <div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <a href={item.url} target="_blank" rel="noopener noreferrer">Leer más</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
