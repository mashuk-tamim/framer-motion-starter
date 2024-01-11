"use client";
import React from "react";
import { motion } from "framer-motion";

const Box3 = () => {
	const boxVariant = {
		hidden: {
			x: "-100vw",
		},
		visible: {
			x: 0,
			transition: {
				when: "beforeChildren",
				staggerChildren: 0.2, // Stagger children with 0.2s delay
			},
		},
	};
	const innerBoxVariant = {
		hidden: {
			opacity: 0,
			scale: 0,
		},
		visible: {
			opacity: 1,
            scale: 1,
		},
	};
	return (
		<div className="mb-20">
			<motion.div
				className="size-40 bg-yellow-600 flex flex-col justify-center items-center gap-2"
				variants={boxVariant}
				animate="visible"
				initial="hidden"
			>
				{[1, 2, 3].map((idx) => (
                    <motion.div
                        key={idx}
						className="size-6 bg-white"
						variants={innerBoxVariant}
					></motion.div>
				))}
			</motion.div>
		</div>
	);
};

export default Box3;
