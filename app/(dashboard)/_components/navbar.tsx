import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./mobile-sidebar";
import { Skeleton } from "@/components/ui/skeleton";

export const Navbar = () => {
	return (
		<div className="flex items-center p-4">
			<MobileSidebar />
			<div className="flex w-full justify-end">
				<UserButton afterSignOutUrl="/" />
			</div>
		</div>
	);
};

Navbar.Skeleton = function SkeletonNavbar() {
    return (
        <div className="flex items-center p-4">
            <div className="flex w-full justify-end">
                <Skeleton className="w-8 h-8 rounded-full"/>
            </div>
        </div>
    );
}
