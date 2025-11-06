import Navbar from "./Components/navbar/nav-bar";
import Hero from "./Components/Hero/hero";
import Programs from "./Components/Programs/programs";
import Title from "./Components/Title/title";
import About from "./Components/About/about";
import Campus from "./Components/Campus/campus";
import Testimonials from "./Components/Testimonials/testimonials";
import Contact from "./Components/Contact/contact";
import Footer from "./Components/Footer/footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <div className="container">
        <Title subTitle="our program" title="what we offer" />
        <Programs />
        <About />
        <Title subTitle="Gallery" title="Campus Pics" />
        <Campus />
        <Title subTitle="Testimonials" title="What Our Students Say" />
        <Testimonials />
        <Title subTitle="Contact Us" title="Ask Anything" />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
