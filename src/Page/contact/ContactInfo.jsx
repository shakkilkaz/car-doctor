import { IoCalendarNumber } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";

const ContactInfo = () => {
    return (
       <div className=" grid grid-cols-1 lg:grid-cols-3 w-[70%] mx-auto gap-16 my-10 border-4 py-10 bg-slate-900 text-2xl text-white px-10 ">
         <div className="flex items-center space-x-5">
            <IoCalendarNumber className="text-4xl text-red-500"></IoCalendarNumber>         
           <div>
            <h5>We are open monday-friday</h5>
            <p>10:00 am - 9:00 pm</p>
           </div>
           </div>
         <div className="flex items-center space-x-5">
            <FaPhoneAlt  className="text-4xl text-red-500"></FaPhoneAlt>         
           <div>
            <h5>Have a question?</h5>
            <p>+2546 251 2658</p>
           </div>
           </div>
         <div className="flex items-center space-x-5">
            <FaMapLocationDot  className="text-4xl text-red-500"></FaMapLocationDot>         
           <div>
            <h5>Need a repair? our address</h5>
            <p>Liza Street, New York</p>
           </div>
           </div>
       </div>
    );
};

export default ContactInfo;