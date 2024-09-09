import ProjectItem from './components/ProjectItem/ProjectItem';
import Title from '../Title/Title';
import './_project.scss';
import images from '~/assets/images';
import PropTypes from 'prop-types';

function Project({ title, projects }) {

    return (
        <div className='project__wrapper' id='projects'>
            <Title title={title} />
            <div className='row'>
                {projects?.map((proj, idx) =>
                    <ProjectItem
                        key={idx}
                        imageSrc={images[proj.imageSrc]}
                        name={proj.name}
                        technologies={proj.technologies}
                        detail={proj.detail}
                        prjLink={proj.prjLink}
                    />
                )}
            </div>
            <a className='project__see__more' href='https://github.com/hiumx'>See more in my Github</a>
        </div>
    )
};

Project.propTypes = {
    title: PropTypes.string.isRequired,
    projects: PropTypes.array.isRequired
}

export default Project;