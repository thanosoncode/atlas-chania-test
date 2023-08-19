import { prisma } from "@/prisma/prismaClient";

export default async function () {
  const allPosts = await prisma.post.findMany();

  const posts = allPosts.map((post) => ({
    url: `https://atlas-chania.vercel.app/${post.id}`,
    lastModified: new Date().toISOString(),
  }));

  const routes = [
    "",
    "about",
    "john-atlas",
    "crossfit",
    "powerlifting",
    "opengym",
    "weightlifting",
    "pricing",
    "trainers",
    "contact",
  ].map((route) => ({
    url: `https://atlas-chania.vercel.app/${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...posts];
}
