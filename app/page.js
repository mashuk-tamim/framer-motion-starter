import Image from "next/image";
import Box1 from "./components/Box1/Box1";
import Box2 from "./components/Box2/Box2";
import Box3 from "./components/Box3/Box3";
import Box4 from "./components/Box4/Box4";
import Box5 from "./components/Box5/Box5";

export default function Home() {
	return (
		<main className="p-10 ">
			<div className="flex gap-20">
				<Box1></Box1>
				<Box2></Box2>
			</div>
			<div className="flex gap-20">
				<Box3></Box3>
				<Box4></Box4>
            </div>
            <Box5></Box5>
		</main>
	);
}
