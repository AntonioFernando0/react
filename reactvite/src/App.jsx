import { useState, useEffect } from 'react';

function App() {
  const [nutri, setNutri] = useState([]);

  useEffect(() => {
    function loadApi() {
      let url = 'https://picsum.photos/v2/list?page=1&limit=10'; // Corrigindo para uma URL válida
      fetch(url)
        .then((r) => r.json())
        .then((json) => {
          console.log(json);
          setNutri(json); // Atualiza o estado com os dados da API
        })
        .catch((error) => {
          console.error('Erro ao buscar dados da API:', error);
        });
    }

    loadApi();
  }, []); // O array vazio faz a requisição acontecer uma vez ao carregar o componente

  return (
    <>
      <div>
        <header>
          {nutri.map((item) => {
            return (
              <article key={item.id}>
                <strong>{item.author}</strong> <br />
                <img src={item.download_url} alt={item.author} width="200" />
                <p>ID: {item.id}</p>
                <hr />
              </article>
            );
          })}
        </header>
      </div>
    </>
  );
}

export default App;
