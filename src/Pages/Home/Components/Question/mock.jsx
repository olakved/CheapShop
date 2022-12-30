import React from "react";
import {FaWeixin,
  FaPhone,
  FaInternetExplorer,
  FaMailBulk,
} from "react-icons/fa";

export const questionData = {
  footerLine2: {
    title: "Quick Links",
    data: [
      {
        path: "/",
        title: "Home",
      },
      {
        path: "/schools",
        title: "Schools",
      },
      {
        path: "/about",
        title: "About",
      },
      {
        path: "/team",
        title: "Team",
      },
      {
        path: "/admission",
        title: "Admission",
      },
    ],
  },

  
  footerLine4: {
    title: "Contact Us",
    availableData: [
      {
        path: "https://google.com",
        title: "www.futureschool.com",
        icon: <FaInternetExplorer />,
      },
      {
        path: "https://google.com",
        title: "futureschool@gmail.com",
        icon: <FaMailBulk />,
      },
      {
        path: "https://google.com",
        title: "+2348100805056",
        icon: <FaPhone />,
      },
      {
        path: "https://google.com",
        title: "Chat with admin",
        icon: <FaWeixin />,
      },
    ],
  },
};
