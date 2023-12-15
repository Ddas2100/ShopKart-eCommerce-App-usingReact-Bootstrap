import './Home.css';
import FooterNav from '../Components/Layout/FooterNav';
import HomePage from '../Assets/HomePage.png'

function Home() {
    return (
      <>
        <div>
            <h2 className="heading">About Us</h2>
            <img src={HomePage} alt='home page' className='home-page' />
        </div>
            
        <FooterNav />
      </>
    );
  }
  
  export default Home;