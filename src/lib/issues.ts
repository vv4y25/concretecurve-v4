import type { Issue } from "./types";

function createPages(issueSlug: string, issueNum: string, pageTitles: string[]): Issue["pages"] {
  return pageTitles.map((title, index) => {
    const num = index + 1;
    const pageSlug = `page-${String(num).padStart(2, "0")}`;
    const imagePath = `/images/issues/${issueSlug}/${pageSlug}.svg`;
    return {
      number: num,
      slug: pageSlug,
      title,
      alt: `Concrete Curve Issue ${issueNum}, page ${String(num).padStart(2, "0")}: ${title}`,
      thumbnail: imagePath,
      full: imagePath,
    };
  });
}

export const issues: Issue[] = [
  {
    slug: "issue-01",
    number: "01",
    title: "Groundwork",
    subtitle: "Foundations of form and place",
    publicationDate: "March 2025",
    editor: "Elena Vasquez",
    coverImage: "/images/issues/issue-01/cover.svg",
    introShort:
      "Our debut issue traces the quiet geometry of everyday spaces — from brutalist stairwells to sun-warmed courtyards. Groundwork invites you to look closer at the structures that shape how we move, gather, and remember.",
    introLong: `Groundwork began with a simple question: what do we overlook when we walk through the world? This first issue of Concrete Curve sets out to answer it through photography, essays, and visual essays that linger on the in-between — the threshold, the corridor, the unfinished wall.

We believe design is not only what architects draw, but what communities inhabit. Issue 01 brings together contributors who share a patience for detail: a photographer documenting municipal pools in southern Europe, a writer reflecting on the language of concrete in postwar housing, and a designer's notebook of sketches from a year spent drawing doorways.

Our editorial vision is rooted in curiosity rather than trend. We publish work that rewards slow looking — images you return to, stories that unfold on a second read. Groundwork is for readers who care about craft, context, and the stories embedded in the built environment.

This is just the beginning. Future issues will expand into landscape, material culture, and the people who maintain the spaces others design. We hope you find something here that stays with you long after you close the page.`,
    pageCount: 10,
    pages: createPages("issue-01", "01", [
      "Editor's Letter",
      "Brutalist Light",
      "Courtyard Study",
      "Stairwell No. 7",
      "Material Notes",
      "Poolside Afternoon",
      "Threshold",
      "Concrete Poetry",
      "Doorway Sketches",
      "Colophon",
    ]),
  },
  {
    slug: "issue-02",
    number: "02",
    title: "Soft Edges",
    subtitle: "Where nature meets the built world",
    publicationDate: "September 2025",
    editor: "Elena Vasquez",
    coverImage: "/images/issues/issue-02/cover.svg",
    introShort:
      "Issue 02 explores the gentle collisions between architecture and landscape — overgrown terraces, weathered facades, and gardens that refuse to stay within their borders. A study in patience, decay, and renewal.",
    introLong: `Soft Edges is an issue about boundaries — and what happens when they blur. We asked contributors to look at places where the built environment yields to something wilder: ivy reclaiming a balcony railing, moss settling into mortar joints, a community garden pushing through cracked pavement.

The photographs in this issue favor natural light and unhurried composition. You'll find no stylized perfection here — instead, we celebrate the honest wear of time. An essay on Japanese wabi-sabi in contemporary landscaping sits alongside a portrait series of urban gardeners in three cities. A visual diary documents one wall over twelve months of seasons.

Concrete Curve is written for people who notice small changes — the way shadow moves across a facade, how rain darkens stone differently each hour. Soft Edges speaks to designers, photographers, and anyone who finds beauty in the imperfect intersection of human intention and natural persistence.

We publish sparingly, with care for each image and word. Issue 03 is already in production, turning its attention to light and shadow in interior spaces. Thank you for reading with us.`,
    pageCount: 10,
    pages: createPages("issue-02", "02", [
      "Editor's Letter",
      "Garden Wall",
      "Seasonal Diary",
      "Wabi-Sabi Essay",
      "Urban Growers",
      "Terrace Overgrowth",
      "Weathered Stone",
      "Borderlands",
      "Root Systems",
      "Colophon",
    ]),
  },
  {
    slug: "issue-03",
    number: "03",
    title: "Inner Light",
    subtitle: "Illumination, shadow, and interior life",
    publicationDate: "March 2026",
    editor: "Elena Vasquez",
    coverImage: "/images/issues/issue-03/cover.svg",
    quote:
      "Light does not simply reveal a room — it writes the room, line by line, hour by hour.",
    introShort:
      "Our latest issue follows light as it moves through interior spaces — morning kitchen glow, late-afternoon studio shadows, and the quiet drama of a single window at dusk. Inner Light is an invitation to see familiar rooms anew.",
    introLong: `Inner Light is Concrete Curve's most intimate issue yet. Where Groundwork looked outward at structure and Soft Edges traced the meeting of building and landscape, Issue 03 turns inward — to the rooms we live in, work in, and pass through without always seeing.

Contributors were asked to photograph and write about light as a material: how it falls, fades, reflects, and transforms. The result is a collection of studies — a ceramicist's studio at golden hour, a reading nook in Helsinki during the long dark months, a family's dining table lit by a pendant lamp that has hung there for forty years.

We designed this issue to be read in natural light, if you can. Each spread was composed with the page-turn in mind — a rhythm of bright and shadow, wide and close. An interview with a lighting designer opens the gallery section; a short fiction piece closes it with a scene set entirely after sunset.

Concrete Curve exists for readers who value visual storytelling with substance. We are a small, independent publication, and every issue is a collaboration between editors, contributors, and you — the person holding these pages, whether on screen or someday in print. Inner Light is our invitation to pause and notice how a room feels at different hours. We hope it changes the way you look at your own.`,
    pageCount: 10,
    pages: createPages("issue-03", "03", [
      "Editor's Letter",
      "Golden Hour Studio",
      "Helsinki Reading Nook",
      "Pendant Light",
      "Lighting Designer",
      "Kitchen Morning",
      "Shadow Study",
      "Window at Dusk",
      "After Sunset",
      "Colophon",
    ]),
  },
];

export function getIssueBySlug(slug: string): Issue | undefined {
  return issues.find((issue) => issue.slug === slug);
}

export function getAdjacentIssues(slug: string): {
  prev: Issue | null;
  next: Issue | null;
} {
  const index = issues.findIndex((issue) => issue.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? issues[index - 1] : null,
    next: index < issues.length - 1 ? issues[index + 1] : null,
  };
}

export const latestIssue = issues[issues.length - 1];

export const magazineAbout = `Concrete Curve is an independent magazine devoted to design, culture, photography, and visual storytelling. We publish three curated issues each year, each one a carefully assembled gallery of images and words meant to be read slowly.

Our editorial vision is simple: look closer. We believe the built environment — its materials, light, and lived details — holds stories worth telling. We create work for designers, photographers, architects, and curious readers who find meaning in the spaces between grand statements and everyday life.

We publish digitally, with each issue offering a full-screen gallery experience so you can engage with every page as it was intended. Future issues will explore sound and space, material histories, and the people who shape our surroundings. Concrete Curve is independent, reader-supported, and always growing.`;
