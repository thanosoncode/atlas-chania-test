import TextShadow from '../../../components/textShadow/TextShadow';
import johnAtlas from '../../../../public/john-atlas.jpg';
import './Trainers.css';
import SignleTrainer from './SingleTrainer';
import MotionItemWrapper from '@/app/components/motionWrapper/MotionItemWrapper';

const Trainers = () => {
  return (
    <div className='relative  pb-12  px-4'>
      <div className='hidden lg:flex w-full h-full justify-center  '>
        <TextShadow title='Νταγκουνακης' top='top-4' size={140} />
      </div>
      <div className='hidden md:flex lg:hidden w-full h-full justify-center  '>
        <TextShadow title='Νταγκουνακης' top='top-12' size={110} />
      </div>
      <div className='pt-12 sm:pb-10 md:pt-28'>
        <h4 className='uppercase text-4xl sm:text-6xl md:text-7xl  font-extrabold flex flex-col gap-2 justify-center items-center text-center'>
          Head coach
        </h4>
        <div className=' w-full xl:w-[1200px] mx-auto pt-4 sm:pt-8 '>
          <MotionItemWrapper>
            <SignleTrainer
              title='Γιαννης νταγκουνακης'
              subtitle='"ασπαστος"'
              href='/ntagkounakis'
              image={johnAtlas}
            />
          </MotionItemWrapper>
        </div>
      </div>
    </div>
  );
};
export default Trainers;
