import Link from 'next/link';
import AccordionItem from './accordionItem/AccordionItem';
import { questionsItems } from '@/app/utils/constants';

const Questions = () => {
  return (
    <div className='bg-neutral-900 pb-20 sm:pt-0 pt-12'>
      <div className='w-full xl:w-[1200px] mx-auto relative pb-16 sm:pb-80 lg:pb-[400px] px-4'>
        <div className='text-4xl lg:text-7xl hidden sm:flex whitespace-nowrap font-extrabold uppercase text-white absolute z-20 top-[140px]  lg:top-[190px]  justify-between items-center w-full flex-col'>
          <span> FREQUENTLY ASKED</span>
          <span>QUESTIONS</span>
        </div>
        <h4 className='block sm:hidden text-4xl font-extrabold uppercase text-white text-center'>
          FREQUENTLY ASKED QUESTIONS
        </h4>
        <div
          className={`hidden lg:block uppercase text-white font-extrabold absolute left-1/2 -translate-x-1/2 `}
          style={{
            fontSize: 200,
            color: '#171717',
            textShadow:
              '-1px -1px 0 #d4d4d4, 1px -1px 0 #d4d4d4, -1px 1px 0 #d4d4d4, 1px 1px 0 #d4d4d4',
          }}
        >
          QnAs
        </div>
        <div
          className={`hidden sm:block lg:hidden uppercase text-white font-extrabold absolute left-1/2 -translate-x-1/2 `}
          style={{
            fontSize: 170,
            color: '#171717',
            textShadow:
              '-1px -1px 0 #d4d4d4, 1px -1px 0 #d4d4d4, -1px 1px 0 #d4d4d4, 1px 1px 0 #d4d4d4',
          }}
        >
          QnAs
        </div>
      </div>
      <div className='text-white w-full xl:w-[1200px] mx-auto pb-20  gap-6 sm:gap-8 flex flex-col px-4'>
        {questionsItems.map((q) => (
          <AccordionItem key={q.question} question={q}></AccordionItem>
        ))}
      </div>
      <div className='px-4'>
        <Link
          className='border border-white text-white  hover:bg-white hover:text-black duration-200 uppercase w-full mx-auto md:w-min md:px-16 py-5 text-center  whitespace-nowrap font-bold text-lg block'
          href='/contact'
        >
          ρωτησε μας περισσοτερα
        </Link>
      </div>
    </div>
  );
};
export default Questions;
