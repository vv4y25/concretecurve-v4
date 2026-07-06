import { Hero } from "@/components/landing/Hero";
import { FeaturedIssues } from "@/components/landing/FeaturedIssues";
import { AboutMagazine } from "@/components/landing/AboutMagazine";
import { CollectionGrid } from "@/components/landing/CollectionGrid";
import { LatestIssue } from "@/components/landing/LatestIssue";
import { Newsletter } from "@/components/landing/Newsletter";
import { issues, latestIssue } from "@/lib/issues";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedIssues issues={issues} />
      <AboutMagazine />
      <CollectionGrid issues={issues} />
      <LatestIssue issue={latestIssue} />
      <Newsletter />
    </>
  );
}
