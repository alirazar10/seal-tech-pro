import Hero from "@/components/sections/Hero";
import ServicesOverview from "@/components/sections/ServicesOverview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Process from "@/components/sections/Process";
import Locations from "@/components/sections/Locations";
import CallToAction from "@/components/sections/CallToAction";
import ContactPreview from "@/components/sections/ContactPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <Process />
      <Locations />
      <CallToAction />
      <ContactPreview />
    </>
  );
}

