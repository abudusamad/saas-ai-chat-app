"use client";


import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface HeadingProps {
	title: string;
	description: string;
	icon: LucideIcon;
	iconColor: string;
	bgColor: string;
}

export const Heading = ({
	title,
	description,
	icon: Icon,
	iconColor,
	bgColor,
}: HeadingProps) => {
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        setIsLoading(false);
    }, [])

    if (isLoading) {
        return <Heading.Skeleton />
    }

	return (
		<div
            className="px-4 lg:px-8 flex items-center gap-x-3
             mb-8"
		>
			<div className={cn("p-2 w-fit rounded-md",bgColor)}>
				<Icon className={`w-8 h-8 ${iconColor}`} />
			</div>
            <div>
                <h2 className="text-3xl font-bold">{title}</h2>
                <p className="text-sm text-muted-foreground">{ description}</p>
            </div>
		</div>
	);
};

Heading.Skeleton = function HeadingSkeleton() {
    return (
        <div className=" px-4 lg:px-8 flex items-center gap-x-3 mb-8">
           <Skeleton className="w-20 h-10 rounded-md" />
            <div className="space-y-2">
                <Skeleton className="w-40 h-6 " />
                <Skeleton className="w-20 h-4" />
            </div>
        </div>
    );
}
