import { Link } from 'react-router-dom';
import './_button.scss';

export default function Button({ type = 'link', children, href = '/', target = '_self' }) {
    return (
        <>
            {
                type === 'href'
                    ? <a
                        href={href}
                        className='button__btn'
                        target={target}
                    >
                        {children}
                    </a>
                    : <Link
                        className='button__btn'
                        to={href}
                    >
                        {children}
                    </Link>
            }
        </>
    )
}