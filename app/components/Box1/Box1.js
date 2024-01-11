"use client";
import React, {useState} from "react";
import { motion } from "framer-motion";

const Box1 = () => {
    const [isAnimating, setIsAnimating] = useState(false)
	return (
		<div className="mb-20">
			<motion.div
				className="size-40 bg-yellow-600 flex flex-col justify-center items-center"
                animate={{
                    x: isAnimating ? "60vw" : 0,
                    opacity: isAnimating ? 1 : 0.5,
                    rotate: isAnimating ? 180 : 0,
                    borderColor: isAnimating ? "white" : "black"
                }}
                initial={{
                    opacity: 0.5,
                    
                }}
                transition={{
                    type: "spring",
                    stiffness: 50,
                    damping: 8
                }}
                onClick={() => setIsAnimating(!isAnimating)}
			></motion.div>
		</div>
	);
};

export default Box1;
