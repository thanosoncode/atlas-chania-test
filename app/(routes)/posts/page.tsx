import { prisma } from "@/prisma/prismaClient";
import PostCard from "./PostCard";
import { MotionPageWrapper } from "../../components/motionWrapper/MotionPageWrapper";
import "./Posts.css";
import MotionTitle from "./MotionTitle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Αρθρα & Νέα",
  description:
    "Καλωσορίσατε στο Blog του Atlas Chania. Εδώ μπορείτε να διαβάζετε άρθρα γύρω από το crossfit, weightlifting, powerlifting, να παίρνετε συμβουλές υγείας και προγράμματα γυμναστικής και να μαθαίνετε τα τελευταία νέα του γυμναστήρίου",
  keywords:
    "Atlas Chania, γυμναστήριο, Χανιά, Κρήτη, άρση βαρών, weightlifting, clean & jerk, CrossFit, εθνική ομάδα, αθλητές, powerlifting, μηχανήματα, Γιαννης Νταγκουνακης, άρθρα fitness, συμβουλές προπονητικήες, προγράμματα γυμναστικής",
};

const Posts = async () => {
  const posts = await prisma.post.findMany();

  const sortedPosts = posts.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  if (!posts) {
    return <div>do something</div>;
  }

  return (
    <MotionPageWrapper>
      <div className="pt-24 md:pt-36 pb-20">
        <div className="xl:w-[1200px] w-full px-4 mx-auto">
          <MotionTitle />
          <div className="grid-container-articles mx-auto ">
            {sortedPosts.map((post) => (
              <PostCard
                key={post.id}
                id={post.id}
                image={post.image}
                title={post.title}
                createdAt={post.createdAt}
              />
            ))}
          </div>
        </div>
      </div>
    </MotionPageWrapper>
  );
};
export default Posts;
