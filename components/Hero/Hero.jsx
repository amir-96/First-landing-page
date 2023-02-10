import Link from "next/link";

const Hero = ({ heading, message }) => {
  return ( 
    <div id='home' className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img">
      {/* overlay */}
      <div className="absolute h-full w-full top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]"/>
      <div className="p-10 text-white z-[2] mt-[-10rem]">
        <h2 className="text-5xl font-bold">{heading}</h2>
        <p className="py-5 text-xl">{message}</p>
        <Link href='/#gallery' scroll={false}>
          <p className="px-8 py-2 border w-fit">گالری</p>
        </Link>
      </div>
    </div>
   );
}
 
export default Hero;