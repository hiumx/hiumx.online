import { EmailIcon, FacebookIcon, GithubIcon, LinkedInIcon, YoutubeIcon } from '../Icons/Icons';
import Title from '../Title/Title';
import './_contact.scss';

export default function Contact() {
    return (
        <div className='contact__wrapper'>
            <Title title='Contact' />
            <div className='contact__socials'>
                <ul className='contact__socials--list'>
                    <li className='contact__socials--item'>
                        <LinkedInIcon className='social__icon linkedin__icon' />
                    </li>
                    <li className='contact__socials--item'>
                        <GithubIcon className='social__icon github__icon' />
                    </li>
                    <li className='contact__socials--item'>
                        <EmailIcon className='social__icon email__icon' />
                    </li>
                    <li className='contact__socials--item'>
                        <FacebookIcon className='social__icon facebook__icon' />
                    </li>
                    <li className='contact__socials--item'>
                        <YoutubeIcon className='social__icon youtube__icon' />
                    </li>
                </ul>
            </div>
        </div>
    )
};  