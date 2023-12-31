import { prisma } from '@/prisma/prismaClient';
import React from 'react';
import { redirect } from 'next/navigation';
import Link from 'next/link';

const Confirm = async ({ params: { id } }: { params: { id: string } }) => {
  const validEmail = await prisma.emailToVerify.findFirst({
    where: { uuid: id },
  });

  if (!validEmail) {
    redirect('/');
  }

  const existingSubscriber = await prisma.subscriber.findUnique({
    where: {
      email: validEmail.email,
    },
  });

  if (existingSubscriber) {
    redirect('/');
  }

  const subscriber = await prisma.subscriber.create({
    data: { email: validEmail.email },
  });

  return (
    <div className='mt-40  mb-64 flex items-center flex-col gap-12'>
      <h1>Καλωσήρθες {subscriber.email}!</h1>
      <p>Εγγράφηκες με επιτυχία στο Atlas Chania Newsletter!</p>
      <Link
        href='/'
        className='border border-black p-3 hover:bg-black hover:text-white duration-200'
      >
        Go to home page
      </Link>
    </div>
  );
};

export default Confirm;
