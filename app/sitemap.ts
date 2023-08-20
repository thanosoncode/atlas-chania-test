import { prisma } from "@/prisma/prismaClient";

export default async function () {
  const allPosts = await prisma.post.findMany();

  const posts = allPosts.map((post) => ({
    url: `https://atlaschania.gr/${post.id}`,
    lastModified: new Date().toISOString(),
  }));

  const routes = [
    "",
    "about",
    "ntagkounakis",
    "crossfit",
    "powerlifting",
    "opengym",
    "weightlifting",
    "pricing",
    "trainers",
    "contact",
  ].map((route) => ({
    url: `https://atlaschania.gr/${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...posts];
}
