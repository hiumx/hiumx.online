import ProjectItem from '../ProjectItem/ProjectItem';
import Title from '../Title/Title';
import './_project.scss';
import images from '~/assets/images'

import { AWSIcon, GoIcon, MongoDBIcon, MySQLIcon, NodeJSIcon, RabbitMQIcon, ReactIcon, RedisIcon } from '../Icons/Icons';

export default function Project() {

    const techProjECommerce = [
        {
            name: 'NodeJS',
            icon: <NodeJSIcon className='svg__icon nodejs__icon' />
        },
        {
            name: 'Golang',
            icon: <GoIcon className='svg__icon golang__icon' />
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
    ]; 

    const techProjBookingCareFE = [
        {
            name: 'ReactJS',
            icon: <ReactIcon className='svg__icon react__icon' />
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
    ];

    const techProjBookingCareBE = [
        {
            name: 'NodeJS',
            icon: <NodeJSIcon className='svg__icon nodejs__icon' />
        },
        {
            name: 'MySQL',
            icon: <MySQLIcon className='svg__icon mysql__icon' />
        },
        {
            name: 'MongoDB',
            icon: <MongoDBIcon className='svg__icon mongodb__icon' />
        },
        {
            name: 'Redis',
            icon: <RedisIcon className='svg__icon redis__icon' />
        },
    ];

    return (
        <div className='project__wrapper'>
            <Title title='Projects' />
            <div className='row'>
                <ProjectItem
                    imageSrc={images.eCommerce}
                    name='E-commerce Back-end'
                    technologies={techProjECommerce}
                    detail='The system is architected with Micro-services
                    Architecture, employing Rabbit MQ to manage order tasks like payment authentication, inventory updates, and
                    dispatching order confirmation emails'
                    prjLink='https://github.com/hiumx/ecommerce-backend'
                />
                <ProjectItem
                    imageSrc={images.bookingCareBE}
                    name='Booking Care Back-end'
                    technologies={techProjBookingCareBE}
                    detail='An efficient back-end system to manage appointment schedules, doctor information, and patient records for a clinic.'
                    prjLink='https://github.com/hiumx/booking-care-nodejs'
                />
                <ProjectItem
                    imageSrc={images.bookingCareFE}
                    name='Booking Care Front-end'
                    technologies={techProjBookingCareFE}
                    detail='Design a user interface for appointment scheduling and a management platform for doctors to view schedules and patient information'
                    prjLink='https://github.com/hiumx/booking-care-react'
                />
            </div>
            <a className='project__see__more' href='https://github.com/hiumx'>See more in my Github</a>
        </div>
    )
};