import { UserButton } from "@clerk/nextjs"

export const Navbar = () => {
    return (
        <div className="flex items-center p-4">
            <div className="flex w-full justify-end">
                <UserButton afterSignOutUrl="/"/>
            </div>
        </div>
    )
}