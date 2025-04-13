import Button from '../Button/Button';
import SlideInWhenVisible from '../SlideInWhenVisible/SlideInWhenVisible';
import './_introduction.scss';
import images from '~/assets/images';

export default function Introduction() {
    return (
        <div className='introduction__wrapper' name='introduction'>
            <SlideInWhenVisible
                triggerOnce={false}
                childrenTop={
                    <div className='introduction__overview'>
                        <div>
                            <h1>Xin chao,</h1>
                            <h1>I'm <span>Hieu Mai Xuan</span></h1>
                        </div>
                        <img
                            className='avatar'
                            src={images.anime_avatar}
                            alt='avatar-img'
                            loading='lazy'
                        />
                    </div>
                }
            />
            <div className='introduction__programming__info'>
                <SlideInWhenVisible
                    triggerOnce={false}
                    childrenRight={
                        <h3>Software Engineer | DevOps Engineer</h3>
                    }
                />
                <SlideInWhenVisible
                    childrenBottom={
                        <Button
                            type='href'
                            href='https://drive.google.com/file/d/1GGt92Zg0D297E1ie9RD3vUb3nbvhku7Z/view?usp=sharing'
                            target='_blank'
                        >
                            My Resume
                        </Button>
                    }
                />
            </div>
        </div>
    )
};