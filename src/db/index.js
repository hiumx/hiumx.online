import { BabelIcon, BootstrapIcon, ElasticSearchIcon, GoIcon, MongoDBIcon, MySQLIcon, NodeJSIcon, RabbitMQIcon, ReactIcon, RedisIcon, ReduxIcon, SassIcon, WebpackIcon } from '../components/Icons/Icons';

export const TECHS_PROJECT_E_COMMERCE = [
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
    {
        name: 'ElasticSearch',
        icon: <ElasticSearchIcon className='svg__icon elasticsearch__icon' />
    },
];

export const TECHS_PROJECT_BOOKING_CARE_FE = [
    {
        name: 'ReactJS',
        icon: <ReactIcon className='svg__icon react__icon' />
    },
    {
        name: 'Redux',
        icon: <ReduxIcon className='svg__icon redux__icon' />
    },
    {
        name: 'Sass',
        icon: <SassIcon className='svg__icon sass__icon' />
    },
    {
        name: 'Bootstrap',
        icon: <BootstrapIcon className='svg__icon bootstrap__icon' />
    },
];

export const TECHS_PROJECT_BOOKING_CARE_BE = [
    {
        name: 'NodeJS',
        icon: <NodeJSIcon className='svg__icon nodejs__icon' />
    },
    {
        name: 'MySQL',
        icon: <MySQLIcon className='svg__icon mysql__icon' />
    },
    {
        name: 'Babel',
        icon: <BabelIcon className='svg__icon babel__icon' />
    },
    {
        name: 'Webpack',
        icon: <WebpackIcon className='svg__icon webpack__icon' />
    },
];

export const PROJECTS = [
    {
        imageSrc: 'eCommerce',
        name: 'E-commerce Back-end',
        technologies: TECHS_PROJECT_E_COMMERCE,
        detail: 'The system is architected with Micro-services Architecture, employing Rabbit MQ to manage order tasks like payment authentication, inventory updates, and dispatching order confirmation emails',
        prjLink: 'https://github.com/hiumx/ecommerce-backend'
    },
    {
        imageSrc: 'bookingCareBE',
        name: 'Booking Care Back-end',
        technologies: TECHS_PROJECT_BOOKING_CARE_BE,
        detail: 'An efficient back-end system to manage appointment schedules, doctor information, and patient records for a clinic.',
        prjLink: 'https://github.com/hiumx/booking-care-nodejs'
    },
    {
        imageSrc: 'bookingCareFE',
        name: 'Booking Care Front-end',
        technologies: TECHS_PROJECT_BOOKING_CARE_FE,
        detail: 'Design a user interface for appointment scheduling and a management platform for doctors to view schedules and patient information',
        prjLink: 'https://github.com/hiumx/booking-care-react'
    },
];

export const GROUP_PROJECTS = [
    {
        imageSrc: 'bookingHotelBE',
        name: 'Booking Hotel Platform Back-end',
        technologies: TECHS_PROJECT_BOOKING_CARE_BE,
        detail: 'A powerful backend system for users to search and book hotels, utilizing a Micro-services architecture with an independent notification system and communication through Apache Kafka.',
        prjLink: 'https://github.com/hiumx/booking-backend'
    },
    {
        imageSrc: 'bookingHotelFE',
        name: 'Booking Hotel Platform Front-end',
        technologies: TECHS_PROJECT_BOOKING_CARE_FE,
        detail: 'Interfaces for the homepage, search results, and hotel details to be user-friendly and enhance the overall user experience.',
        prjLink: 'https://github.com/hiumx/booking-client'
    },
];