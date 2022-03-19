import Navbar from 'components/Navbar';
import MainImage from 'assets/images/main-car-image.png';
import './styles.css';
import ButtonIcon from 'components/ButtonIcon';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-card">
          <div className="home-card1">
            <div className="home-content-container">
              <h1>O carro perfeito para você</h1>
              <p>
                Conheça nossos carros e dê mais um passo na realização do seu
                sonho
              </p>
            </div>
            <div className="home-image-container">
              <img src={MainImage} />
            </div>
          </div>
          <div className="home-card2">
            <div className="home-card2-button">
              <ButtonIcon />
              <p>Comece agora a navegar</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
