// SlideInWhenVisible.jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const SlideInWhenVisible = ({ childrenTop, childrenBottom, childrenRight, triggerOnce = true }) => {
    const { ref, inView } = useInView({
        triggerOnce: triggerOnce,   // only animate the first time it comes into view
        threshold: 0.1,       // how much of it needs to be visible
    });

    return (
        <div ref={ref}>
            <motion.div
                initial={{ x: '-8%', opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}} // trigger animation on scroll
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                { childrenTop }
            </motion.div>
            <motion.div
                initial={{ x: '4%', opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}} // trigger animation on scroll
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                { childrenRight }
            </motion.div>
            <motion.div
                initial={{ y: '8%', opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}} // trigger animation on scroll
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                { childrenBottom }
            </motion.div>
        </div>
    );
};

export default SlideInWhenVisible;
