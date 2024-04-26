import ProjectItem from '../ProjectItem/ProjectItem';
import Title from '../Title/Title';
import './_project.scss';

import { AWSIcon, MongoDBIcon, NodeJSIcon, RabbitMQIcon, RedisIcon } from '../Icons/Icons';

export default function Project() {

    const techProjECommerce = [
        {
            name: 'NodeJS',
            icon: <NodeJSIcon className='svg__icon nodejs__icon' />
        },
        {
            name: 'RabbitMQ',
            icon: <RabbitMQIcon className='svg__icon rabbitmq__icon' />
        },
        {
            name: 'MongoDB',
            icon: <MongoDBIcon className='svg__icon mongodb__icon' />
        },
        {
            name: 'Redis',
            icon: <RedisIcon className='svg__icon redis__icon' />
        },
    ]

    return (
        <div className='project__wrapper'>
            <Title title='Projects' />
            <div className='row'>
                <ProjectItem
                    imageSrc='https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg'
                    name='E-commerce Back-end'
                    technologies={techProjECommerce}
                    detail='The system is architected with Micro-services
                    Architecture, employing Rabbit MQ to manage order tasks like payment authentication, inventory updates, and
                    dispatching order confirmation emails'
                />
                <ProjectItem
                    imageSrc='https://www.celoxis.com/cassets/img/pmc/project-management.png'
                    name='Booking Care Back-end'
                    technologies={techProjECommerce}
                    detail='The system is architected with Micro-services
                    Architecture, employing Rabbit MQ to manage order tasks like payment authentication, inventory updates, and
                    dispatching order confirmation emails'
                />
                <ProjectItem
                    imageSrc='https://cdn.bookingcare.vn/fo/2021/08/20/122413-bookingcarecover2021.jpg'
                    name='Booking Care Front-end'
                    technologies={techProjECommerce}
                    detail='The system is architected with Micro-services
                    Architecture, employing Rabbit MQ to manage order tasks like payment authentication, inventory updates, and
                    dispatching order confirmation emails'
                />
            </div>
            <a className='project__see__more' href='https://github.com/hiumx'>See more in my Github</a>
        </div>
    )
};