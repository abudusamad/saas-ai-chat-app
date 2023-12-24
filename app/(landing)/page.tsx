import { LandingHero } from "./_components/landing-hero";
import { LandingNavbar } from "./_components/landing-navbar";

const LandingPage = () => {
    return ( 
        <div className="h-full">
            <LandingNavbar />
            <LandingHero/>
        </div>
     );
}
 
export default LandingPage;