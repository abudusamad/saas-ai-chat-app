import Logo from "@/components/Logo"
import Link from "next/link"

export const LandingNavbar = () => {
    return (
        <nav className="flex items-center justify-between p-4 bg-transparent">
            <Link href="/" className="flex items-center">
                <Logo/>
            </Link>
            <div className="flex items-center ">
                <Link href="/sign-up">
                    <button>
                        Get Started
                    </button>
                    
                </Link>
            </div>
        </nav>
    )
}