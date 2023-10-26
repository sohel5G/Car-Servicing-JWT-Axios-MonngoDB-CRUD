import About from "./About";
import Helps from "./Helps";
import Products from "./Products";
import Review from "./Review";
import Services from "./Services";
import Slider from "./Slider";

const Home = () => {
    return (
        <>
            <section>
                <Slider></Slider>
            </section>
            <section>
                <About></About>
            </section>
            <section>
                <Services></Services>
            </section>
            <section>
                <Helps></Helps>
            </section>
            <section>
                <Products></Products>
            </section>
            <section>
                <Review></Review>
            </section>
        </>
    );
};

export default Home;