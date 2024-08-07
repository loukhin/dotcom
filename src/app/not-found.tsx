import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'lost ?',
}

export default function NotFound() {
  return (
    <div className='relative flex flex-col items-center pt-40 px-6 h-[80vh]'>
      <Image src='/404.svg' alt='404' width={671} height={183} draggable={false} />
      <h1 className='mt-10 text-3xl md:text-5xl italic text-center'>not found</h1>
      <div className='absolute bottom-0'>
        <Link href='/' className='flex items-center gap-3'>
          <Image src='/left-arrow.svg' alt='left arrow' width={36} height={36} draggable={false} />
          back home
        </Link>
      </div>
    </div>
  )
}
