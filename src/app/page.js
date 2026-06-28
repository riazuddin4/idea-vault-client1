import Contact from '@/components/Contact';
import FeaturedCourses from '@/components/FeaturedCourses';
import Features from '@/components/Features';
import Hero from '@/components/Hero';
import Statistics from '@/components/Statistics';
import StatsSection from '@/components/StatsSection';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Features />
      <FeaturedCourses />
      {/* <StatsSection /> */}
      <Testimonials />
      {/* <Statistics /> */}
      <Contact />
    </div>
  );
}
