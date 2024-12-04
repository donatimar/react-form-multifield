import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  // Stati per gestione articoli, titolo form e contatore Id
  const [articles, setArticles] = useState([]);
  const [title, setTitle] = useState("");
  const [idCounter, setIdCounter] = useState(1);

  // Funzione invio del form
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita il refresh della pagina

    if (title) {
      setArticles([...articles, { id: idCounter, title }]);
      setTitle("");
      setIdCounter(idCounter + 1);
    }
  };

  // Funzione per eliminare un articolo
  const deleteArticle = (id) => {
    setArticles(articles.filter((article) => article.id !== id));
  };

  return (
    <div className="container mt-5">
      {" "}
      <h1 className="text-center">Gestore per Articoli di Blog</h1>{" "}
      <form onSubmit={handleSubmit} className="mb-4">
        {" "}
        <div className="form-group mt-4">
          {" "}
          <label htmlFor="articleTitle">Titolo Articolo</label>{" "}
          <input
            type="text"
            id="articleTitle"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Inserisci titolo dell'articolo"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-4">
          {" "}
          Aggiungi Titolo Articolo
        </button>
      </form>
      {articles.length > 0 ? (
        <ul className="list-group">
          {" "}
          {articles.map((article) => (
            <li
              key={article.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {article.title}
              <button
                className="btn btn-danger btn-sm"
                onClick={() => deleteArticle(article.id)}
              >
                <FaTrash />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center mt-4">Nessun articolo inserito</p>
      )}
    </div>
  );
};

export default App;
