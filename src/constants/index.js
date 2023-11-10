// This is all the data for the website
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
    breathe
  } from "../assets";
  
  // This is the data for header section
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
  

  // This is the data for header section
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
  
  // This is the data for skills section
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
  
  // This is the data for experiences section
  const experiences = [
    {
      title: "Professional Musician",
      company_name: "Kevin Davy White",
      icon: starbucks,
      iconBg: "#383E56",
      date: "April 2014 - Present",
      points: [
        "Problem-Solving: I am able to break down complex problems into smaller, more manageable tasks.",
        "Attention to detail: I am able to notice small changes to ensure that my code is accurate and error-free.",
        "Creativity: I am a creative thinker who is able to come up with new ideas and solutions to problems.",
        "Collaboration: I always work with a team effectively to achieve a common goal.",
        "Communication: I am a very good communicator who is able to explain complex ideas in a simple way.",
        "Music Production, sound engineering, mixing, social media content and website design.",
        "Finalist in X-Factor UK 2017 and placed 3rd overall.",
      ],
    },
    {
      title: "Delivery Driver",
      company_name: "Amazon",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "April 2020 - Present",
      points: [
        "Customer service: Interacting with customers on a daily basis and providing excellent customer service.",
        "Time management: I am able to manage my time effectively in order to meet deadlines and deliver packages on time.",
        "Organization: I am organized in order to keep track of packages, paperwork and customer information.",
        "Deliver with 100% accuracy and completion.",
        "Work a nine-hour route within pressured time constraints.",
        "Deliver with 100% accuracy and completion.",
      ],
    },
  ]
  
  // This is the data for testimonials section
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
  

  // This is the data for projects section
  const projects = [
    {
      name: "Breathe",
      description:
        "Breathe is an app that allows customers to book their best private vacation spot anywhere in the world.",
      tags: [
        {
        name: "React",
        color: "blue-text-gradient",
        },
        {
          name: "Tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "Prisma",
          color: "pink-text-gradient",
        },
        {
          name: "MongoDB",
          color: "blue-text-gradient",
        },
        {
          name: "Next.js 13",
          color: "white-text-gradient",
        },
      ],
      image: breathe,
      source_code_link: "https://breathe-lyart.vercel.app/",
    },
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

  ];
  
  // This is the data for contact section
  export { services, technologies, experiences, testimonials, projects };