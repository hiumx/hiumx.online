import Button from '../Button/Button';
import './_introduction.scss';

export default function Introduction() {
    return (
        <div className='introduction__wrapper' id='introduction'>
            <h1>Xin chao,</h1>
            <h1>I'm <span>Hieu Mai Xuan</span></h1>
            <div className='introduction__programming__info'>
                <h3>Software Engineer | DevOps Engineer</h3>
                <Button
                    type='href'
                    href='https://drive.google.com/file/d/1GGt92Zg0D297E1ie9RD3vUb3nbvhku7Z/view?usp=sharing'
                >
                    My Resume
                </Button>
            </div>
        </div>
    )
};