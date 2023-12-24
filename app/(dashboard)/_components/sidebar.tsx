import Logo from "@/components/Logo";
import Link from "next/link";

const Sidebar = () => {
    return (<div className="h-full flex flex-col  text-white space-y-4 py-4">
        <div className="px-3 py-2 flex-1">
            <Link href="/dashboard" className="flex items-center pl-3 mb-14">
                <div>
                    <Logo/>
                </div>
            </Link>
        </div>
    </div> );
}
 
export default Sidebar;