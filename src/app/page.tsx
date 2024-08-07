import Link from 'next/link'

export default function Home() {
  return (
    <div className='relative flex flex-col justify-center items-center px-6 h-[100vh]'>
      <div className='grid grid-cols-3 grid-rows-3 w-[222px] h-[222px] text-transparent group'>
        <Link
          href='https://github.com/loukhin'
          className='w-[74px] h-[74px] duration-200 transition leading-none text-2xl hover:text-[hsl(0,100%,90%)] bg-[hsla(0,100%,65%,0.35)] group-hover:bg-[hsla(0,100%,65%,0.35)] hover:!bg-[hsl(0,100%,65%)]'
        >
          github
        </Link>
        <Link
          href='https://linkedin.com/in/supakit-k/'
          className='w-[74px] h-[74px] duration-200 transition leading-none text-2xl hover:text-[hsl(216,91%,90%)] bg-[hsl(216,91%,65%)] group-hover:bg-[hsla(216,91%,65%,0.35)] hover:!bg-[hsl(216,91%,65%)]'
        >
          linked
          <br />
          in
        </Link>
        <div className='w-[74px] h-[74px] duration-200 transition leading-none bg-[hsla(29,100%,65%,0.35)] group-hover:bg-[hsla(29,100%,65%,0.35)] hover:!bg-[hsl(29,100%,65%)]'></div>
        <div className='w-[74px] h-[74px] duration-200 transition leading-none bg-[hsla(191,75%,65%,0.35)] group-hover:bg-[hsla(191,75%,65%,0.35)] hover:!bg-[hsl(191,75%,65%)]'></div>
        <div className='w-[74px] h-[74px] duration-200 transition leading-none bg-[hsl(122,46%,65%)] group-hover:bg-[hsla(122,46%,65%,0.35)] hover:!bg-[hsl(122,46%,65%)]'></div>
        <div className='w-[74px] h-[74px] duration-200 transition leading-none bg-[hsla(299,56%,65%,0.35)] group-hover:bg-[hsla(299,56%,65%,0.35)] hover:!bg-[hsl(299,56%,65%)]'></div>
        <div className='w-[74px] h-[74px] duration-200 transition leading-none bg-[hsla(267,58%,65%,0.35)] group-hover:bg-[hsla(267,58%,65%,0.35)] hover:!bg-[hsl(267,58%,65%)]'></div>
        <div className='w-[74px] h-[74px] duration-200 transition leading-none bg-[hsl(40,100%,65%)] group-hover:bg-[hsla(40,100%,65%,0.35)] hover:!bg-[hsl(40,100%,65%)]'></div>
        <div className='w-[74px] h-[74px] duration-200 transition leading-none bg-[hsl(29,100%,65%)] group-hover:bg-[hsla(29,100%,65%,0.35)] hover:!bg-[hsl(29,100%,65%)]'></div>
      </div>
      <div className='mt-10'>sometimes i think, and then i forget</div>
    </div>
  )
}
