import React from 'react';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { Session } from '@/app/utils/types';
import { prisma } from '@/prisma/prismaClient';

const AdminPage = async () => {
  const session = (await getServerSession()) as Session | undefined;

  const subscribers = await prisma.subscriber.findMany();

  if (!session) {
    redirect('/');
  }

  return (
    <div className='pt-60 pb-40 sm:pb-96'>
      <div className='font-semibold text-center mb-12'>
        Newsletter Subscribers: {subscribers.length}
      </div>
      <div className='flex items-center justify-center gap-20'>
        <Link
          className='bg-transparent text-black border border-black hover:bg-black  hover:text-white duration-200  px-6 text-base  block py-5 w-min whitespace-nowrap font-bold '
          href='/admin/new-post'
        >
          New Post
        </Link>
        <Link
          className='bg-transparent text-black border border-black hover:bg-black  hover:text-white duration-200  px-6 text-base  block py-5 w-min whitespace-nowrap font-bold '
          href='/admin/new-wod'
        >
          New wod
        </Link>
      </div>
    </div>
  );
};

export default AdminPage;
