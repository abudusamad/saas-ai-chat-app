"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";

interface SidebarItemProps {
	label: string;
	icon: LucideIcon;
	color?: string;
	href?: string;
}
export const SidebarItem = ({
	label,
	icon: Icon,
	color,
	href,
}: SidebarItemProps) => {
	const pathname = usePathname();

	return (
		<div
			className={cn(
				"text-sm group p-3 w-full justify-start cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
				pathname === href ? "text-white bg-white/10" : "text-zinc-400"
			)}
		>
			<div className="flex items-center flex-1">
				<Icon className={cn("h-6 w-6 mr-3", color)} />
				<span>{label}</span>
			</div>
		</div>
	);
};
