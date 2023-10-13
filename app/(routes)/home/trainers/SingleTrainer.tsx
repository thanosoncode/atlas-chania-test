import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

interface SignleTrainerProps {
  image: StaticImageData;
  title: string;
  subtitle: string;
  href: string;
}

const SignleTrainer: React.FC<SignleTrainerProps> = ({
  image,
  title,
  subtitle,
  href,
}) => {
  return (
    <Link className=' block cursor-pointer h-full' href={href}>
      <div className='overflow-hidden w-full h-[360px]'>
        <Image
          src={image}
          alt='/'
          placeholder='blur'
          className='object-contain w-full h-full duration-200 hover:scale-105 object-center'
          sizes='(min-width: 1300px) 387px, (min-width: 780px) 30.2vw, calc(100vw - 32px)'
        />
      </div>
      <div className='flex flex-col items-center gap-0 lg:gap-2 mt-1 lg:mt-3'>
        <h4 className='uppercase  text-xl   lg:text-2xl font-bold hover:text-red-500 duration-200 text-center'>
          {title}
        </h4>
        <h4 className='uppercase  text-base md:text-lg font-bold text-gray-500 mt-0'>
          {subtitle}
        </h4>
      </div>
    </Link>
  );
};
export default SignleTrainer;
