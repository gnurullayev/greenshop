import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero"; 
import Posts from "./components/posts/Posts";
import Products from "./components/products/Products";
import TrendFlower from "./components/trend/TrendFlower";

function App() {
  return (
    <div className="App">
      <Header/>

      <main className="main">
        <Hero/>
        <Products/>
        <TrendFlower/>
        <Posts/>
      </main>

      <Footer/>
    </div>
  );
}

export default App;
