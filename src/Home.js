import './styles/home.css';

function Home() {
  return (
    <div className="home">
      <div className="left">
        <h1>New items added to the shop, check them out!</h1>
        <p className='btn'>Shop now</p>
      </div>

      <div className="right">
        <img src={require('./images/dog-house.jpg')} alt="" />
      </div>

    </div>
  );
}

export default Home;
