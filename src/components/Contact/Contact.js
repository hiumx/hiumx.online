import { EmailIcon, FacebookIcon, GithubIcon, LinkedInIcon, YoutubeIcon } from '../Icons/Icons';
import Title from '../Title/Title';
import './_contact.scss';

export default function Contact() {
    return (
        <div className='contact__wrapper' name="contact">
            <Title title='Contact' />
            <div className='contact__socials'>
                <ul className='contact__socials--list'>
                    <li className='contact__socials--item'>
                        <a href='https://www.linkedin.com/in/hieumaixuan251/'>
                            <LinkedInIcon className='social__icon linkedin__icon' />
                        </a>
                    </li>
                    <li className='contact__socials--item'>
                        <a href='https://github.com/hiumx'>
                            <GithubIcon className='social__icon github__icon' />
                        </a>
                    </li>
                    <li className='contact__socials--item'>
                        <a href='https://mail.google.com/'>
                            <EmailIcon className='social__icon email__icon' />
                        </a>
                    </li>
                    <li className='contact__socials--item'>
                        <a href='https://www.facebook.com/hiuxm.2501'>
                            <FacebookIcon className='social__icon facebook__icon' />
                        </a>
                    </li>
                    <li className='contact__socials--item'>
                        <a href='https://www.youtube.com/channel/UCCXBhVqIVx5IsLSSU0feR8g'>
                            <YoutubeIcon className='social__icon youtube__icon' />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
};  