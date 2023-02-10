const ContactForm = () => {
  return ( 
    <div id='contactus' className="max-w-[1240px] m-auto p-4 h-screen pt-40">
      <h1 className="text-2xl font-bold text-center p-4">با هم شروع کنیم</h1>
      <form className="max-w-[600px] m-auto ">
        <div className="grid grid-cols-2 gap-2">
          <input className="border shadow-lg p-3" type="text" placeholder="نام" />
          <input className="border shadow-lg p-3" type="email" placeholder="ایمیل" />
        </div>
        <input className="border shadow-lg p-3 w-full my-2" type="text" placeholder="موضوع" />
        <textarea className="border shadow-lg p-3 w-full" cols="30" rows="10" placeholder="پیام"></textarea>
        <button className="border shadow-lg p-3 w-full my-2">ارسال</button>
      </form>
    </div>
   );
}
 
export default ContactForm;