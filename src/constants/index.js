import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    carter,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Professional Musician",
      company_name: "Kevin Davy White",
      icon: starbucks,
      iconBg: "#383E56",
      date: "April 20214 - Present",
      points: [
        "Awarded Best singer and songwriter at Urban Music Award 2022.",
        "Special guest for Texas, Simply Red, Westlife summer 2022.",
        "Singer – solo and leading artist in a band.",
        "Advanced guitarist and instrumentalist",
        "Songwriter with 11 original releases.",
        "Music Production, sound engineering, mixing, social media content and website design.",
        "International tours, concerts, events, and private functions.",
      ],
    },
    {
      title: "Delivery Driver",
      company_name: "Amazon",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "April 2020 - Present",
      points: [
        "Large van deliveries across multiple regions.",
        "Delivering 280+ packages per day.",
        "Work a nine-hour route within pressured time frames.",
        "Deliver with 100% accuracy and completion.",
        "Excellent customer service with zero concessions.",
        "Adhering to all health and safety protocols.",
      ],
    },
  ]
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
  ]; 
  
  const projects = [
    {
      name: "Carter Music",
      description:
        "Carter Music & Co. is an online music shop, which offers great instruments for any budgets. So that the customers can enjoy their favourite instruments without breaking their bank account. The shop allows customer to leave a comment to any instrument.",
      tags: [
        {
        name: "Python",
        color: "blue-text-gradient",
        },
        {
          name: "Django",
          color: "green-text-gradient",
        },
        {
          name: "Stripe",
          color: "pink-text-gradient",
        },
      ],
      image: carter,
      source_code_link: "https://carter-music.onrender.com",
    },
    {
      name: "Carter Music & Co v2",
      description:
        "An E-commerce website giving the opportunity to shopper to buy headphones, speakers and instruments",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Next.js",
          color: "green-text-gradient",
        },
        {
          name: "Stripe",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://carter-music-co.vercel.app/",
    },
    {
      name: "Job IT",
      description:
        "Mobile application that enables users to search for job openings, and locate available jobs based on their current location.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
        {
          name: "React Native"
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/KevinDGnanih/jobit",
    },
    {
      name: "Kevin Davy White Website",
      description:
        "A web page presenting and giving information about the artist Kevin Davy White",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://www.kevindavywhite.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };