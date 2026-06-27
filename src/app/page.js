import HeroSlider from "@/components/home/HeroSlider";
import FeaturedEbooks from "@/components/home/FeaturedEbooks";
import TopWriters from "@/components/home/TopWriters";
import GenreGrid from "@/components/home/GenreGrid";
import WhyChooseBookSpace from "@/components/home/WhyChooseBookSpace";
import CommunityStats from "@/components/home/CommunityStats";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <FeaturedEbooks />
      <TopWriters />
      <GenreGrid />
      <WhyChooseBookSpace />
      <CommunityStats />
    </>
  );
}