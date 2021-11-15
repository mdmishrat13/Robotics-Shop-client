import Product from "../Product/Product";
import Products from "../Product/Products";
import Reviews from "../Reviews/Reviews";
// import Reviewx from "../Reviews/Reviewx";
import NavBar from "./../../Shared/NavBar/NavBar";
import Banner from "./../Banner/Banner"
import Newsletter from "./Newsletter";
function Home() {
    return (
      <div className="App">
          <Banner></Banner>
          <Products></Products>
          <Reviews></Reviews>
          <Newsletter></Newsletter>       
      

      </div>
    );
  }
  
  export default Home;