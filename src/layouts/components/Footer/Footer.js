import SlideInWhenVisible from '~/components/SlideInWhenVisible/SlideInWhenVisible';
import './_footer.scss';

export default function Footer() {
    return (
        <div className='footer__wrapper'>
            <SlideInWhenVisible
                childrenRight={
                    <>
                        <p>Designed and made with 💙 by <span>Hieu Mai Xuan</span></p>
                        <p className='footer__copyright'>© 2025 hieumaixuan</p>
                    </>
                }
            />
        </div>
    )
};