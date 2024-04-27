import Title from '../Title/Title';
import './_about.scss';
import images from '~/assets/images';

export default function About() {
    return (
        <div className='about__wrapper' id='about'>
            <Title title='About' />
            <div className='about__content row'>
                <div className='about__avatar__wrapper col-lg-3'>
                    <img
                        className='about__avatar'
                        src={images.avatar}
                        alt='avatar-img'
                        loading='lazy'
                    />
                </div>
                <div className='about__desc col-lg-9'>
                    <p>I’m from Vietnam, started programming in 2021 and turned it into a hobby</p>
                    <p>My focus is fullstack web development, but I also create and explore other fields such as Data Science, Solution Architecture</p>
                    <p>Besides from programming, I also listen to music, do exercise, read the book and learn about business and finance</p>
                </div>
            </div>
        </div>
    )
};  
