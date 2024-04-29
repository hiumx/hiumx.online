import './_introduction.scss';

export default function Introduction() {
    return (
        <div className='introduction__wrapper' id='introduction'>
            <h1>Xin chao,</h1>
            <h1>I'm <span>Hieu Mai Xuan</span></h1>
            <div className='introduction__programming__info'>
                <h3>Software Engineer | DevOps Engineer</h3>
                <a href='https://drive.google.com/file/d/1aqFIG7FW49KCODmWrBu1jOdTw_TR5koB/view?usp=drive_link' className='introduction__resume__btn'>My Resume</a>
            </div>
        </div>
    )
};