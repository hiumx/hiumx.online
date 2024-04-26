import './_title.scss';

export default function Title({ title }) {
    return (
        <div className='title__wrapper'>
            <h1 className='title__name'>{title}</h1>
        </div>
    )
};