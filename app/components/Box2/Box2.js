"use client";
import React from "react";
import { motion } from "framer-motion";

const Box2 = () => {
	return (
		<div className="mb-20">
			<motion.div
				className="size-40 bg-yellow-600 flex flex-col justify-center items-center"
				drag
				dragConstraints={{
					right: 20,
					left: 20,
					top: 10,
					bottom: 10,
				}}
				whileHover={{
					scale: 1.2,
					opacity: 1,
				}}
				whileTap={{
					scale: 0.8,
					opacity: 0.5,
				}}
				initial={{
					opacity: 0.5,
				}}
			></motion.div>
		</div>
	);
};

export default Box2;
