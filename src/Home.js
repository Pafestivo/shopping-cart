import './styles/home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <div className="left">
        <div className="details">
          <h1>XS Wooden Dog Kennel</h1>
          <h2>Is now available for sale, with a new item discount and free shipping.</h2>
        </div>

        <Link to='/shop'>
          <p className='btn'>Shop now</p>
        </Link>
      </div>

      <div className="right">
        <img src={require('./images/dog-house.jpg')} alt="" />        
      </div>

    </div>
  );
}

export default Home;
