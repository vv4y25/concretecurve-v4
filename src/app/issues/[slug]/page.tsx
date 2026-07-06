import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IssueHero } from "@/components/issues/IssueHero";
import { EditorialIntroduction } from "@/components/issues/EditorialIntroduction";
import { MagazineGallery } from "@/components/issues/MagazineGallery";
import { ContinueReading } from "@/components/issues/ContinueReading";
import { getAdjacentIssues, getIssueBySlug, issues } from "@/lib/issues";

type IssuePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return issues.map((issue) => ({ slug: issue.slug }));
}

export async function generateMetadata({ params }: IssuePageProps): Promise<Metadata> {
  const { slug } = await params;
  const issue = getIssueBySlug(slug);
  if (!issue) return { title: "Issue Not Found" };

  return {
    title: `Issue ${issue.number}: ${issue.title}`,
    description: issue.introShort,
    openGraph: {
      title: `Issue ${issue.number}: ${issue.title}`,
      description: issue.introShort,
      images: [{ url: issue.coverImage, alt: `Cover of Issue ${issue.number}: ${issue.title}` }],
    },
  };
}

export default async function IssuePage({ params }: IssuePageProps) {
  const { slug } = await params;
  const issue = getIssueBySlug(slug);
  if (!issue) notFound();

  const { prev, next } = getAdjacentIssues(slug);

  return (
    <>
      <IssueHero issue={issue} />
      <EditorialIntroduction issue={issue} />
      <MagazineGallery pages={issue.pages} />
      <ContinueReading prev={prev} next={next} />
    </>
  );
}
