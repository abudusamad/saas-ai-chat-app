"use client";

import Logo from "@/components/Logo";
import {
	Code,
	ImageIcon,
	LayoutDashboard,
	MessageSquare,
	Music,
	Settings,
	VideoIcon,
} from "lucide-react";
import Link from "next/link";
import SidebarItem from "./sidebar-item";
import { useEffect, useState } from "react";

export const routes = [
	{
		label: "Dashboard",
		href: "/dashboard",
		icon: LayoutDashboard,
		color: "text-sky-700",
	},
	{
		label: "Conversation",
		href: "/conversation",
		icon: MessageSquare,
		color: "text-violet-500",
	},
	{
		label: "Image Generation",
		href: "/image",
		icon: ImageIcon,
		color: "text-pink-700",
	},
	{
		label: "Video Generation",
		icon: VideoIcon,
		color: "text-orange-700",
		href: "/video",
	},
	{
		label: "Music Generation",
		icon: Music,
		color: "text-emerald-500",
		href: "/music",
	},
	{
		label: "Code Generation",
		icon: Code,
		color: "text-green-700",
		href: "/code",
	},
	{
		label: "Settings",
		icon: Settings,
		href: "/settings",
	},
];

const Sidebar = () => {
	const [isMounted, setIsMounted] = useState(false);
	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

	return (
		<div className="h-full flex flex-col bg-[#111827] text-white space-y-4 py-4">
			<div className="px-3 py-2 flex-1">
				<Link href="/dashboard" className="flex items-center pl-3 mb-14">
					<div>
						<Logo />
					</div>
				</Link>
				<div className="spacy-y-1">
					{routes.map((route) => (
						<Link key={route.href} href={route.href}>
							<SidebarItem
								icon={route.icon}
								label={route.label}
								color={route.color}
								href={route.href}
							/>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
