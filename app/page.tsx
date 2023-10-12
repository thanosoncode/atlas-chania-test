import Hero from "./(routes)/home/hero/Hero";
import AboutUs from "./(routes)/home/aboutUs/AboutUs";
import Sports from "./(routes)/home/sports/Sports";
import Trainers from "./(routes)/home/trainers/Trainers";
import Posts from "./(routes)/home/posts/Posts";
import FollowUsOnIstagram from "./(routes)/home/followUsOnInstagram/FollowUsOnIstagram";
import Questions from "./(routes)/home/questions/Questions";
import { MotionPageWrapper } from "./components/motionWrapper/MotionPageWrapper";
import Newsletter from "./(routes)/home/newsletter/Newsletter";

const HomePage = () => {
  return (
    <div className="relative">
      <MotionPageWrapper>
        <Hero />
        <AboutUs />
        <Sports />
        <Trainers />
        <Posts />
        <Questions />
        <FollowUsOnIstagram />
      </MotionPageWrapper>
    </div>
  );
};
export default HomePage;
