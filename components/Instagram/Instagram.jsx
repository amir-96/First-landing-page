import Instagramimg from './Instagramimg'
import IgImg1 from './../../public/images/instagram/ig-img-1.jpeg'
import IgImg2 from './../../public/images/instagram/ig-img-2.jpeg'
import IgImg3 from './../../public/images/instagram/ig-img-3.jpeg'
import IgImg4 from './../../public/images/instagram/ig-img-4.jpeg'
import IgImg5 from './../../public/images/instagram/ig-img-5.jpeg'
import IgImg6 from './../../public/images/instagram/ig-img-6.jpeg'

const Instagram = () => {
  return ( 
    <div className='max-w-[1240px] mx-auto text-center py-24'>
      <p className='text-2xl font-bold'>من را در اینستاگرام دنبال کنید</p>
      <p className='pb-4'>@amir_hosseini96</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
        <Instagramimg socialImg={IgImg1} />
        <Instagramimg socialImg={IgImg2} />
        <Instagramimg socialImg={IgImg3} />
        <Instagramimg socialImg={IgImg4} />
        <Instagramimg socialImg={IgImg5} />
        <Instagramimg socialImg={IgImg6} />
      </div>
    </div>
   );
}
 
export default Instagram;