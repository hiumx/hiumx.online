import Title from '../Title/Title';
import './_experience.scss';

export default function Experience() {
    return (
        <div className='experience' id='experience' name="experience">
            <Title title='Experience' />
            <div className='experience__detail'>
                <h4 className='experience__title'>
                    <span>Front-end Development Engineer Fresher&nbsp;</span>
                    <a href='https://fptsoftware.com' className='experience__title--link'>@FPT Software</a>
                </h4>
                <p className='experience__time'>July 2024 - March 2025</p>
                <ul className='experience__job-list'>
                    <li className='experience__job-detail'>
                        <span>🍀</span>
                        Responsible for managing validation processes to ensure data accuracy and integrity, making API calls from the backend to retrieve or
                        send necessary information, and rendering the received data effectively on the user interface to provide a seamless user experience
                    </li>
                    <li className='experience__job-detail'>
                        <span>🍀</span>
                        Build common components, solved customer business issues and developed over 40 customer screens with Angular Framework
                    </li>
                    <li className='experience__job-detail'>
                        <span>🍀</span>
                        Develop responsive user interfaces optimized for various devices, including tablets and mobile phones, ensuring cross-browser
                        compatibility with platforms such as Google Chrome, Safari, Microsoft Edge
                    </li>
                    <li className='experience__job-detail'>
                        <span>🍀</span>
                        Responsible for writing detailed test cases and implementing unit tests for various components to ensure functionality, reliability, and
                        stability, aiming for 100% test coverage to maintain high code quality and prevent potential issues
                    </li>
                </ul>
            </div>
        </div>
    )
};