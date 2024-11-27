import Download from "./sections/Download";
import Faq from "./sections/Faq";
import Features from "./sections/Features";
import Hero from "./sections/Hero";
import Pricing from "./sections/Pricing";
import Testimonials from "./sections/Testimonials";


export default function Home() {
  return (
    <>
       <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Testimonials />
      <Download />
    </>
  );
}
