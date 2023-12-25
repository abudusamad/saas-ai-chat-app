"use client";

import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { tools } from "@/config/constant";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export default function Home() {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(false);
	}, []);
	if (isLoading) {
		return <Home.Sketelon />;
	}

	return (
		<div>
			<div className="mb-8 space-y-4">
				<h2 className="text-2xl md:text-4xl font-bold text-center">
					Explore the power of AI
				</h2>
				<p className="text-muted-foreground font-light text-sm md:text-lg text-center">
					Chat with the smartest AI on the planet. Generate content
				</p>
			</div>
			<div className="px-4 md:px-20 lg:px-32 space-y-4">
				{tools.map((tool) => (
					<Card
						onClick={() => router.push(tool.href)}
						key={tool.href}
						className="flex items-center justify-between p-4 border-black/5 hover:shadow-md transition cursor-pointer"
					>
						<div className="flex items-center gap-x-4">
							<div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
								<tool.icon className={cn("w-8 h-8", tool.color)} />
							</div>
							<div className="font-semibold">{tool.label}</div>
						</div>
						<ArrowRight className="w-6 h-6" />
					</Card>
				))}
			</div>
		</div>
	);
}

Home.Sketelon = function HomeSkeleton() {
	return (
		<div>
			<div className="mb-8 space-y-4">
				<Skeleton className="h-12 w-48" />
				<Skeleton className="h-8 w-64" />
			</div>
			<div className="px-4 md:px-20 lg:px-32 space-y-4">
				{tools.map((tool) => (
					<Card
						key={tool.href}
						className="flex items-center justify-between p-4 border-black/5 hover:shadow-md transition cursor-pointer"
					>
						<div className="flex items-center gap-x-4">
							<div className="h-10 w-10 bg-black/10 rounded-md"></div>
							<div className="h-4 w-24 bg-black/10 rounded-md"></div>
						</div>
						<div className="h-6 w-6 bg-black/10 rounded-md"></div>
					</Card>
				))}
			</div>
		</div>
	);
};
