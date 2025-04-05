
import Experience from '~/components/Experience/Experience';
import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';
import Introduction from '../../components/Introduction/Introduction';
import Project from '../../components/Project/Project';
import './_home.scss';
import { GROUP_PROJECTS, PROJECTS } from '~/db';
import MainLayout from '~/layouts/MainLayout';

export default function Home() {
    return (
        <div className='home__wrapper'>
            <MainLayout>
                <Introduction />
                {/* <Experience /> */}
                <Project title='Personal Project' projects={PROJECTS} />
                <Project title='Group Project' projects={GROUP_PROJECTS} />
                <About />
                <Contact />
            </MainLayout>
        </div>
    )
};