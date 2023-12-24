"use client";

import Logo from "@/components/Logo"
import { Button } from "@/components/ui/button"
import Link from "next/link"

import { useAuth } from "@clerk/nextjs"

export const LandingNavbar = () => {
    const { isSignedIn } = useAuth();

    return (
        <nav className="flex items-center justify-between p-4 bg-transparent">
            <Link href="/" className="flex items-center">
                <Logo/>
            </Link>
            <div className="flex items-center ">
                <Link href={isSignedIn ? "/dashboard" : "sign-up"}>
                    <Button variant="outline" className="rounded-full">
                        Get Started
                    </Button>
                    
                </Link>
            </div>
        </nav>
    )
}