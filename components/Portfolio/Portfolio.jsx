import Image from "next/image";

const Portfolio = () => {
  return ( 
    <div id='works' className='max-w-[1240px] h-screen mx-auto py-20 text-center'>
      <h1 className='font-bold text-2xl p-4'>نمونه کار های من</h1>
      <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
        <div className='after:w-full h-full col-span-2 md:col-span-3 row-span-2'>
          <Image
            src='/images/portfolio/portfolio1.avif'
            alt='/'
            layout='responsive'
            width='677'
            height='451'
          />
        </div>
        <div className='relative w-full md:h-full aspect-[4/2] md:aspect-auto'>
          <Image
            className="object-cover"
            src='/images/portfolio/portfolio2.avif'
            alt='/'
            fill
          />
        </div>
        <div className='relative w-full md:h-full aspect-[4/2] md:aspect-auto'>
          <Image
            src='/images/portfolio/portfolio3.avif'
            alt='/'
            fill
          />
        </div>
        <div className='relative w-full md:h-full aspect-[4/2] md:aspect-auto'>
          <Image
            src='/images/portfolio/portfolio4.avif'
            alt='/'
            fill
          />
        </div>
        <div className='relative w-full md:h-full aspect-[4/2] md:aspect-auto'>
          <Image
            src='/images/portfolio/portfolio5.avif'
            alt='/'
            fill
          />
        </div>
      </div>
    </div>
   );
}
 
export default Portfolio;