import './styles/home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <div className="left">
        <h1>New items added to the shop, check them out!</h1>
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
