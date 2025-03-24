import { useState, useEffect } from 'react';

function App() {
  const [nutri, setNutri] = useState([]);

  useEffect(() => {
    function loadApi() {
      let url = 'https://jsonplaceholder.typicode.com/posts';
      fetch(url)
        .then((r) => r.json())
        .then((json) => {
          console.log(json);
          setNutri(json); // Corrigi colocando o setNutri dentro do .then()
        })
        .catch((error) => {
          console.error("Erro ao buscar dados da API:", error);
        });
    }

    loadApi();
  }, []); // Adicionei o array vazio para evitar requisições infinitas

  return (
    <>
     <div>
      <header>
        {nutri.map((item)=>
        {
          return(
            <article key={item.id}>
              <strong >{item.id} {item.title}</strong>
              
            </article>
          )
        })}
      </header>
     </div>
    </>
  );
}

export default App;



// https://sujeitoprogramador.com/rp-api/?api=posts