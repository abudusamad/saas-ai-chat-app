"use client";

import Logo from "@/components/Logo";
import { tools } from "@/config/constant";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SidebarItem } from "./sidebar-item";


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
					{tools.map((route) => (
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
