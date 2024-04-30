import './_not_found.scss';
import Button from '~/components/Button/Button';

export default function NotFound() {
    return (
        <div className="notfound__wrapper">
            <div className='notfound__content'>
                <h1 className="notfound__code">404</h1>
                <h3 className="notfound__title">Content not found 😓</h3>
                <p className="notfound__detail">The URL of this content has been changed or is no longer available.</p>
                <p className="notfound__detail">If you are bookmarking this URL, please try accessing it again from the homepage instead of using the saved URL.</p>
                <div className='notfound__btn__wrapper'>
                    <Button href='/'>Access the homepage</Button>
                </div>
            </div>
            <p className='notfound_copyright'>© 2024 hieumaixuan</p>
        </div>
    )
}