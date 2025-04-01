import React, { useState, useEffect } from "react";
import "./style.css";

function App() {
  // 1. Definir o estado para armazenar os dados
  const [posts, setPosts] = useState([]);

  // 2. UseEffect para fazer a requisição quando o componente carregar
  useEffect(() => {
    // 3. Definir a URL da API
    const url = 'https://jsonplaceholder.typicode.com/posts';

    // 4. Fazer a requisição usando fetch
    fetch(url)
      .then((response) => response.json())  // Converter a resposta para JSON
      .then((data) => {
        setPosts(data);  // Armazenar os dados recebidos no estado
      })
      .catch((error) => {
        console.error('Erro ao buscar dados da API:', error);
      });
  }, []); // O array vazio significa que isso será feito apenas uma vez, quando o componente for montado

  // 5. Exibir os dados no JSX
  return (
    <div>
      <h1>Lista de Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
