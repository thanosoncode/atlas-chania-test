import Hero from "./home/hero/Hero";
import AboutUs from "./home/aboutUs/AboutUs";
import Classes from "./home/classes/Classes";
import Trainers from "./home/trainers/Trainers";
import Posts from "./home/posts/Posts";
import FollowUsOnIstagram from "./home/followUsOnInstagram/FollowUsOnIstagram";
import Questions from "./contact/questions/Questions";
import { MotionWrapper } from "./components/motionWrapper/MotionWrapper";

const HomePage = () => {
  return (
    <div className="relative">
      <MotionWrapper>
        <Hero />
        <AboutUs />
        <Classes />
        <Trainers />
        <Posts />
        <Questions />
        <FollowUsOnIstagram />
      </MotionWrapper>
    </div>
  );
};
export default HomePage;
