import Link from "next/link"
import { useState, useEffect } from "react"
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [color, setColer] = useState('transparent')
  const [textColor, setTextColer] = useState('white')

  const handleNav = () => {
    setNav(!nav)
  }

  useEffect(() => {
    const changeColor = () => {
      if(window.scrollY >= 90) {
        setColer('#ffffff')
        setTextColer('#000000')
      } else {
        setColer('transparent')
        setTextColer('#ffffff')
      }
    }

    window.addEventListener('scroll', changeColor)
  }, [])

  return ( 
    <div style={{backgroundColor: `${color}`}} className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href='/'><h1 style={{color: `${textColor}`}} className="font-bold text-4xl">فتوشات</h1></Link>
        <ul style={{color: `${textColor}`}} className="hidden sm:flex items-center">
          <li className="p-4"><Link href='/#home' scroll={false}>خانه</Link></li>
          <li className="p-4"><Link href='/#gallery' scroll={false}>گالری</Link></li>
          <li className="p-4"><Link href='/work/#works' scroll={false}>کار های من</Link></li>
          <li className="p-4"><Link href='/contact/#contactus' scroll={false}>ارتباط با من</Link></li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="sm:hidden block z-10">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu style={{color: `${textColor}`}} size={20} />}
        </div>
        {/* Mobile Menu */}
        <div className={nav ? "sm:hidden absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300" : "sm:hidden absolute top-0 bottom-0 left-0 right-[-100%] flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"}>
          <ul>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500"><Link href='/#home' scroll={false}>خانه</Link></li>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500"><Link href='/#gallery' scroll={false}>گالری</Link></li>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500"><Link href='/work/#works' scroll={false}>کار های من</Link></li>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500"><Link href='/contact/#contactus' scroll={false}>ارتباط با من</Link></li>
          </ul>
        </div>
      </div>
    </div>
   );
}
 
export default Navbar