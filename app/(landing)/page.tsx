import { LandingHero } from "./_components/landing-hero";
import { LandingNavbar } from "./_components/landing-navbar";
import { LandingTestimonials } from "./_components/landing-testimonial";

const LandingPage = () => {
    return ( 
        <div className="h-full">
            <LandingNavbar />
            <LandingHero />
            <LandingTestimonials/>
        </div>
     );
}
 
export default LandingPage;