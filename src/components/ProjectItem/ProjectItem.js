import './_project_item.scss';
import Technology from '../Technology/Technology';

export default function ProjectItem({
    imageSrc,
    name,
    technologies = [],
    detail = '',
    prjLink = '#'
}) {
    return (
        <div className='project__item__wrapper col-lg-4'>
            <a href={prjLink}>
                <img className='project__item__img'
                    src={imageSrc}
                    lt='project-img'
                    loading='lazy'
                />
            </a>
            <div className='project__item__desc'>
                <h4 className='project__item__name'>{name}</h4>
                <div className='project__item__technologies'>
                    {technologies.map((tech, index) => <Technology key={index} name={tech.name} icon={tech.icon} />)}
                </div>
                <p className='project__item__detail'>{detail}
                </p>
            </div>
        </div>
    )
};
