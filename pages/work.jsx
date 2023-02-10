import Hero from "@/components/Hero/Hero";
import Portfolio from "@/components/Portfolio/Portfolio";

const WorkPage = () => {
  return ( 
    <div>
      <Hero
        heading='کار من'
        message='آخرین کار ها و سفر های من را در این صفحه مشاهده کنید'
      />
      <Portfolio />
    </div>
   );
}
 
export default WorkPage;