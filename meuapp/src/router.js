// Importação dos componentes necessários do React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importação do cabeçalho (menu de navegação)
import Header from "./components/Header/index.js";

// Importação das páginas (views) do sistema
import Home from './pages/home/Home.js';
import Sobre from './pages/sobre/index.js';
import Contato from './pages/Contato/index.js';
import Erro from './pages/error/index.js';
import Localidade from './pages/Localidade/index.js';
import Logos from './pages/imagem/index.js'; // Página onde é exibida a imagem (logo)
import Produto from './pages/produtos/index.js'; // Página que exibe produtos dinamicamente por ID

// Função principal que define as rotas da aplicação
function RouterApp(){
    return(
        // Envolve toda a aplicação com o BrowserRouter para habilitar as rotas
        <BrowserRouter>
        
            {/* O Header ficará visível em todas as rotas, pois está fora do <Routes> */}
            <Header/>

            {/* Container de todas as rotas da aplicação */}
            <Routes>

                {/* Rota principal, quando a URL for '/' renderiza o componente Home */}
                <Route path='/' element={<Home />} />

                {/* Rota para a página Sobre */}
                <Route path="/sobre" element={<Sobre />} />

                {/* Rota para a página Contato (ajustar para minúsculo se desejar padrão) */}
                <Route path='/contato' element={<Contato />} />

                {/* Rota para a página de localização/localidade */}
                <Route path='/localidade' element={<Localidade />} />

                {/* Rota dinâmica: acessa um produto específico pelo ID (ex: /produto/123) */}
                <Route path='/produto/:id' element={<Produto />} />

                {/* Rota para exibir uma imagem (logo) */}
                <Route path='/img' element={<Logos />} />

                {/* Rota coringa (pega qualquer URL não definida acima) e exibe a página de erro */}
                <Route path='*' element={<Erro />} />

            </Routes>

        </BrowserRouter>
    )
}

// Exporta o componente para ser utilizado no index.js principal da aplicação
export default RouterApp;
