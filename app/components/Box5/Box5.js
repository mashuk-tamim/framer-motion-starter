"use client"
import React from "react";
import {motion, useAnimation} from "framer-motion"

const Box5 = () => {
    const control = useAnimation();
	return (
		<div>
			<div className="flex gap-5 mb-10">
				<button
					className="bg-yellow-900 px-4 py-1 rounded w-32"
					onClick={() => {
						control.start({
							x: "60vw",
							transition: {
								duration: 2,
							},
						});
					}}
				>
					Move Right
				</button>
				<button
					className="bg-yellow-900 px-4 py-1 rounded w-32"
					onClick={() => {
						control.start({
							x: 0,
							transition: {
								duration: 2,
							},
						});
					}}
				>
					Move Left
				</button>
				<button
					className="bg-yellow-900 px-4 py-1 rounded w-32"
					onClick={() => {
						control.start({
							borderRadius: "50%",
							transition: {
								duration: 2,
							},
						});
					}}
				>
					Circle
				</button>
				<button
					className="bg-yellow-900 px-4 py-1 rounded w-32"
					onClick={() => {
						control.start({
							borderRadius: 0,
							transition: {
								duration: 2,
							},
						});
					}}
				>
					Square
				</button>
				<button
					className="bg-yellow-900 px-4 py-1 rounded w-32"
					onClick={() => {
						control.stop();
					}}
				>
					Stop
				</button>
			</div>
			<motion.div
				className="size-40 bg-yellow-600 flex flex-col justify-center items-center gap-2"
				animate={control}
			></motion.div>
		</div>
	);
};

export default Box5;
