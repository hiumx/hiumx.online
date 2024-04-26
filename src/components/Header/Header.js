import { useEffect, useState } from 'react';
import './_header.scss';

export default function Header() {

    const [isTopHeader, setIsTopHeader] = useState(false);
    
    const handleScroll = () => {
        const distance = window.scrollY || document.documentElement.scrollTop;
        if (distance > 16) {
            setIsTopHeader(true)
        } else {
            setIsTopHeader(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    console.log(isTopHeader);
   
    return (
        <div className='header'>
            <ul className={isTopHeader ? 'header__list top__header' : 'header__list'}>
                <a href='#' className='header__item--link'>
                    <li className='header__item'>About</li>
                </a>
                <a href='#' className='header__item--link'>
                    <li className='header__item'>Project</li>
                </a>
                <a href='#' className='header__item--link'>
                    <li className='header__item'>Experience</li>
                </a>
                <a href='#' className='header__item--link'>
                    <li className='header__item'>Contact</li>
                </a>
            </ul>
        </div>
    )
};