import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import Image from "next/image";

const font = Montserrat({ weight: "700", subsets: ["latin"] });

const Logo = () => {
	return (
		<div className="relative h-8 w-8">
			<Image fill alt="Logo" src="/logo.svg" />

			<h1 className={cn("text-2xl font-bold text-white ml-10", font.className)}>
				Chatbot
			</h1>
		</div>
	);
};

export default Logo;
