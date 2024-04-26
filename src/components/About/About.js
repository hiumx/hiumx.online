import Title from '../Title/Title';
import './_about.scss';

export default function About() {
    return (
        <div className='about__wrapper'>
            <Title title='About' />
            <div className='about__content row'>
                <div className='about__avatar__wrapper col-lg-3'>
                    <img
                        className='about__avatar'
                        src='https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/321290013_1292807687930876_939451566577586796_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=KpDipoSt6bcAb495GsP&_nc_ht=scontent.fhan14-2.fna&oh=00_AfCNS17Ivth6yt-XVhVF1-IAYAp5DD-ZjFKDhGBCBp6z5w&oe=66312247'
                        alt='avatar-img'
                        loading='lazy'
                    />
                </div>
                <div className='about__desc col-lg-9'>
                    <p>I’m from Vietnam, started programming in 2021 and turned it into a hobby</p>
                    <p>My focus is fullstack web development, but I also create and explore other fields such as Data Science, Machine Learning</p>
                    <p>Besides from programming, I also listen to music, do exercise, read the book and learn about business and finance</p>
                </div>
            </div>
        </div>
    )
};  
