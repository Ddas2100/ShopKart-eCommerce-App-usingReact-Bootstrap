import './Home.css';
import HomePage from '../Assets/HomePage.png'
import { useNavigate } from 'react-router-dom';
import manfashion from '../Assets/manfashion.png';
import womanfashion from '../Assets/womanfashion.png';
import kidfashion from '../Assets/kidfashion.png';
import electronics from '../Assets/electronics.png';
import shoes from '../Assets/shoes.png';
import grocery from '../Assets/grocery.png';

function Home() {

  const navigate = useNavigate();

  function navigateHandler() {
    navigate('/')
  }
    return (
      <>
        <img src={HomePage} alt='home page' className='home-page' />
        <card className='card'>
        <section className="row">
          <div className="col">
            <img src={manfashion} alt="Men Fashion Logo" className="logo2" />
            <h5>Men's Fashion</h5>
            <div className="button-container">
              <button className='button2'> Visit </button>
              <button className='button2' onClick={navigateHandler}> Products </button>
            </div>
          </div>

          <div className="col">
          <img src={womanfashion} alt="Women Fashion Logo" className="logo2" />
            <h5>Women's Fashion</h5>
            <div className="button-container">
              <button className='button2'> Visit </button>
              <button className='button2' onClick={navigateHandler}> Products </button>
            </div>
          </div>

          <div className="col">
          <img src={kidfashion} alt="Kids Fashion Logo" className="logo2" />
            <h5>Kid's Fashion</h5>
            <div className="button-container">
              <button className='button2'> Visit </button>
              <button className='button2' onClick={navigateHandler}> Products </button>
            </div>
          </div>

          <div className="col">
          <img src={electronics} alt="Electronics" className="logo2" />
            <h5>Electronics</h5>
            <div className="button-container">
              <button className='button2'> Visit </button>
              <button className='button2' onClick={navigateHandler}> Products </button>
            </div>
          </div>

          <div className="col">
          <img src={shoes} alt="Shoes" className="logo2" />
            <h5>Shoes and Accesories</h5>
            <div className="button-container">
              <button className='button2'> Visit </button>
              <button className='button2' onClick={navigateHandler}> Products </button>
            </div>
          </div>

          <div className="col">
          <img src={grocery} alt="Grocery" className="logo2" />
            <h5>Grocery</h5>
            <div className="button-container">
              <button className='button2'> Visit </button>
              <button className='button2' onClick={navigateHandler}> Products </button>
            </div>
          </div>
        </section>
        </card>
      </>
    );
  }
  
  export default Home;