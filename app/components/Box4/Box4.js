"use client"
import React from 'react';
import {motion} from "framer-motion"

const Box4 = () => {
    return (
        <motion.div className="size-40 bg-yellow-600 flex flex-col justify-center items-center gap-2"
            animate={{
                scale: [1, 1.2, 1.2, 1, 1],
                rotate: [0, 0, 0, 180, 180],
                borderRadius: [0, 0, 30, 30, 0]
            }}
            transition={{
                duration: 4
            }}

        ></motion.div>
	);
};

export default Box4;