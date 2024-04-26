import './_technology.scss';

export default function Technology({ name, icon }) {
    return (
        <div className='technology__wrapper'>
            <div className='technology__icon__wrapper'>
                {icon}
            </div>
            <p className='technology__name'>{name}</p>
        </div>
    )
}