import SlideInWhenVisible from '../SlideInWhenVisible/SlideInWhenVisible';
import './_title.scss';
import PropTypes from 'prop-types';

function Title({ title }) {
    return (
        <div className='title__wrapper'>
            <SlideInWhenVisible
                childrenTop={
                    <h1 className='title__name'>{title}</h1>
                }
            />
        </div>
    )
};

Title.propTypes = {
    title: PropTypes.string.isRequired
}

export default Title;
