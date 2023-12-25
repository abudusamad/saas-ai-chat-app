"use client";
import { useMedia } from "react-use";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useMobileSidebar } from "@/hooks/mobile-sidebar";
import { MenuIcon } from "lucide-react";
import { useEffect, useState } from "react";
import Sidebar from "./sidebar";

const MobileSidebar = () => {
	const [isMounted, setIsMounted] = useState(false);

	const onOpen = useMobileSidebar((state) => state.onOpen);
	const isOPen = useMobileSidebar((state) => state.isOpen);
	const onClose = useMobileSidebar((state) => state.onClose);

	const isSmallScreen = useMedia("(max-width: 768px)", false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	useEffect(() => {
		if (!isSmallScreen && isOPen) {
			onClose();
		}
	}, [isSmallScreen, isOPen, onClose]);

	if (!isMounted) {
		return null;
	}
	return (
		<>
			<Button
				onClick={onOpen}
				variant="ghost"
				size="icon"
				className="md:hidden"
			>
				<MenuIcon />
			</Button>
			<Sheet open={isOPen} onOpenChange={onClose}>
				<SheetContent side="left" className="p-0">
					<Sidebar />
				</SheetContent>
			</Sheet>
		</>
	);
};

export default MobileSidebar;
