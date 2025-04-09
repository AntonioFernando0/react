import Logo from '../../assets/media/logo.jpg';



function Logos() {
    return (
        <div>
            <h1>
                <img src={Logo} alt='Logo da empresa' />
            </h1>
        </div>
    );
}

export default Logos;


// import Logo from './assets/media/logo.jpg'; // Caminho correto da imagem