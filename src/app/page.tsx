import Categories from "@/components/Categories";
import CommunityStats from "@/components/CommunityStats";
import FaqSection from "@/components/FaqSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import Hero from "@/components/Hero";
import TrandingTechnology from "@/components/TrandingTechnology";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Hero/>
      <CommunityStats/>
      <FeaturedProjects/>
      <TrandingTechnology/>
      <Categories/>
      <FaqSection/>
    </div>
  );
}
