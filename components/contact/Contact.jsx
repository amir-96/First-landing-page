import Hero from "../Hero/Hero";
import ContactForm from "./ContactForm";

const Contact = () => {
  return ( 
    <div>
      <Hero
        heading='تماس با من'
        message='از طریق فرم زیر برای سفارش کار با من در ارتباط باشید'
      />
      <ContactForm />
    </div>
   );
}
 
export default Contact;