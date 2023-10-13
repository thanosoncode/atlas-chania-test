import { MotionPageWrapper } from './components/motionWrapper/MotionPageWrapper';
import Home from './(routes)/home/Home';

const HomePage = () => {
  return (
    <div className='relative'>
      <MotionPageWrapper>
        <Home />
      </MotionPageWrapper>
    </div>
  );
};
export default HomePage;
