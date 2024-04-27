
import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';
import Experience from '../../components/Experience/Experience';
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation/Navigation';
import Introduction from '../../components/Introduction/Introduction';
import Project from '../../components/Project/Project';
import './_home.scss';

export default function Home() {
    return (
        <div className='home__wrapper'>
            <Navigation />
            <div className='home__content'>
                <Introduction />
                <Project />
                <About />
                {/* <Experience /> */}
                <Contact />
                <Footer />
            </div>
        </div>
    )
};