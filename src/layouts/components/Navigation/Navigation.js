import { useEffect, useState } from 'react';
import './_navigation.scss';
import { Link, animateScroll as scroll } from 'react-scroll';

export default function Navigation() {

    const [isTopNavigation, setIsTopNavigation] = useState(false);

    const handleScroll = () => {
        const distance = window.scrollY || document.documentElement.scrollTop;
        if (distance > 16) {
            setIsTopNavigation(true)
        } else {
            setIsTopNavigation(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    return (
        <div className='navigation'>
            <ul className={isTopNavigation ? 'navigation__list top__navigation' : 'navigation__list'}>
                <li className='navigation__item'>
                    <Link
                        className='navigation__item--link'
                        to='introduction' smooth='linear'
                        duration={300}
                        isDynamic={true}
                    >
                        Introduction
                    </Link>
                </li>
                <li className='navigation__item navigation__item__exp'>
                    <Link
                        className='navigation__item--link'
                        to='experience' smooth='linear'
                        duration={300}
                        isDynamic={true}
                        >
                            Experience
                        </Link>
                </li>
                <li className='navigation__item'>
                    <Link
                        className='navigation__item--link'
                        to='projects' smooth='linear'
                        duration={300}
                        isDynamic={true} offset={-56}
                        >
                            Project
                        </Link>
                </li>
                <li className='navigation__item'>
                    <Link
                        className='navigation__item--link'
                        to='about' smooth='linear'
                        duration={300}
                        isDynamic={true} spy={true}
                        >
                            About
                        </Link>
                </li>
                <li className='navigation__item'>
                    <Link
                        className='navigation__item--link'
                        to='contact' smooth='linear'
                        duration={300}
                        isDynamic={true}
                        >
                            Contact
                        </Link>
                </li>
            </ul>
        </div>
    )
};