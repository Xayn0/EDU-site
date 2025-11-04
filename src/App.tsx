
import Navbar from "./Components/navbar/nav-bar";
import Hero from "./Components/Hero/hero";
import Programs from "./Components/Programs/programs";
import Title from "./Components/Title/title";
import About from "./Components/About/about";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <div className="container">
        <Title subTitle="our program" title="what we offer" />
        <Programs />
        <About />
      </div>
    </>
  );
}

export default App;
