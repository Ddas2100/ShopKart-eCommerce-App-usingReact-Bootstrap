// import { Link } from 'react-router-dom';
import './AboutUs.css';
import Aboutus1 from '../Assets/Aboutus1.jpg';
import Aboutus2 from '../Assets/Aboutus2.avif';

function AboutUs() {
  return (
    <>
      <h2 className="heading">About Us</h2>
        <div className="about">
          <img src={Aboutus1} alt='Aboutus1' className='left-image'/>
          <p> 
            Welcome to Shopkart, where we're on a mission to tackle an often-overlooked problem in the world 
            of online shopping. We understand the challenges faced by sellers who encounter high commission 
            percentages imposed by e-commerce platforms, while simultaneously striving to offer competitive 
            and affordable prices to buyers (customers). 
          </p>

          <p>
            The landscape has shifted, with customers transitioning from local stores to the convenience of 
            online shopping. Their primary focus is finding the best affordable goods to maximize their savings. 
            However, sellers find themselves grappling with unrealistic platform commissions, leaving them with 
            meager profits.
          </p>
          <img src={Aboutus2} alt='Aboutus2' className='right-image' />

          <p>
            At Shopkart, we're changing the game. We're building a platform that prioritizes affordability for 
            customers while maximizing sellers' profits by slashing excessive platform margins. We believe that 
            fair and transparent pricing benefits everyone involved. But that's not all. We go above and beyond 
            by taking care of logistics, ensuring a seamless experience from order placement to delivery. Our 
            goal is to provide a comprehensive solution that empowers both sellers and customers in the 
            ever-evolving e-commerce landscape.
          </p>

          <p>
            But that's not all. We go above and beyond by taking care of logistics, ensuring a seamless experience from 
            order placement to delivery. Our goal is to provide a comprehensive solution that empowers both sellers and 
            customers in the ever-evolving e-commerce landscape. Now, you may be wondering, how do we sustain our 
            operations? We operate on a small and reasonable commission percentage from sellers, ensuring a win-win 
            situation for all parties involved. Additionally, our in-house product offerings further contribute to our 
            revenue streams.
          </p>

          <p>
            Join us on this exciting journey as we reshape the e-commerce industry. Together, we can create a fair and thriving marketplace that benefits everyone. Visit our website today to discover the Shopkart difference.
          </p>
        </div>
    </>
  );
}

export default AboutUs;