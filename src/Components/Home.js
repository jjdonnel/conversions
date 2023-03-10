import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <div className='home'>
            <motion.div
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                exit={{opacity: 0}}
                transition={{ duration: 0.5 }} className='parent' style={{ color: "black"}}
            > 
            <h3 className='description' style={{fontSize: '30px'}}>Conversions Etc...</h3>
            </motion.div>
        </div>
    );
};

export default Home;