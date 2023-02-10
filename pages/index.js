import Head from "next/head";

import Hero from "@/components/Hero/Hero";
import Slider from "@/components/Slider/Slider";
import Instagram from "@/components/Instagram/Instagram";

import { SliderData } from "@/components/Slider/SliderData";

const HomePage = () => {
  return ( 
    <div>
      <Head><title>فوتوشات</title></Head>
      <Hero 
        heading='فوتوشات'
        message= 'من لحظه ها را عکاسی میکنم و آن ها را زنده نگه میدارم'
      />
      <Slider slides={SliderData} />
      <Instagram />
    </div>
   );
}
 
export default HomePage;