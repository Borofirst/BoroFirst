

import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "917060162526";

  const message = encodeURIComponent(
    "Hello BoroFirst, I would like to know more about your financial services."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with BoroFirst on WhatsApp"
             className="
                      group
                      flex
                      items-start
                      gap-4
                      rounded-3xl
                      border
                      border-gray-200
                      bg-white
                      p-5
                      shadow-sm
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-emerald-300
                      hover:shadow-xl
                    "
    >
       <div
                      className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                       bg-linear-to-r 
                       from-[#186A07]
                        to-[#0B2578]
                        text-white
                        transition-transform
                        duration-300
                        group-hover:scale-110
                      "
                    >
                       
                      <FaWhatsapp size={24} />
                    </div>
  
 
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Whatup
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                      We'll reply within 1 hours
                      </p>
                    </div>
    </a>
  );
};

export default WhatsAppButton;

