"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useMobileSidebar } from "@/hooks/mobile-sidebar";
import { MenuIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Sidebar from "./sidebar";

const MobileSidebar = () => {
	const pathname = usePathname();
	const [isMounted, setIsMounted] = useState(false);

    const onOpen = useMobileSidebar((state) => state.onOpen);
    const isOPen = useMobileSidebar((state) => state.isOpen)
    const onClose  = useMobileSidebar((state)=> state.onClose)
    
	useEffect(() => {
		setIsMounted(true);
	}, []);

    useEffect(() => {
        onClose();
    },[pathname, onClose]);

	if (!isMounted) {
		return null;
	}
	return (
		<Sheet>
			<SheetTrigger>
                <Button
                    onClick={onOpen}
                    variant="ghost" size="icon" className="md:hidden">
					<MenuIcon />
				</Button>
			</SheetTrigger>
			<SheetContent side="left" className="p-0">
				<Sidebar />
			</SheetContent>
		</Sheet>
	);
};

export default MobileSidebar;
