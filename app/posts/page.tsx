import { prisma } from "@/prisma/prismaClient";
import PostCard from "./PostCard";
import { MotionWrapper } from "../components/motionWrapper/MotionWrapper";
import "./Posts.css";
import MotionTitle from "./MotionTitle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Αρθρα & Νέα",
  description:
    "Καλωσορίσατε στο Atlas Chania - Το κορυφαίο γυμναστήριο στην Χανιά, Κρήτη. Ανακαλύψτε τη δύναμη του αρσενικού πατριωτισμού μέσα από την άρση βαρών. Ζήστε μοναδικές εμπειρίες στο weightlifting και clean & jerk. Διαμορφώστε ισχυρό και επιτυχημένο σώμα με το προηγμένο CrossFit πρόγραμμα. Είμαστε υπερήφανοι στην υποστήριξη της εθνικής ομάδας και των αθλητών μας.",
  keywords:
    "Atlas Chania, γυμναστήριο, Χανιά, Κρήτη, άρση βαρών, weightlifting, clean & jerk, CrossFit, εθνική ομάδα, αθλητές, powerlifting, μηχανήματα, Γιαννης Νταγκουνακης",
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
    <MotionWrapper>
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
    </MotionWrapper>
  );
};
export default Posts;
