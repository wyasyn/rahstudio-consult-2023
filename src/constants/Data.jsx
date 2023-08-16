import { FaUmbrella, FaStar, FaUsers, FaRegHandshake, } from 'react-icons/fa'
import { images } from './images'
import { TfiHummer } from 'react-icons/tfi'
import { BiBuildings } from 'react-icons/bi'
import { LuSofa } from 'react-icons/lu'
import { MdChecklist } from 'react-icons/md'
import { FcFlowChart } from 'react-icons/fc'
import { BsPinMapFill, BsPuzzle, BsTools } from 'react-icons/bs'



export const QualitiesData = [
    {
        icon: <FaStar />,
        title: "Quality Driven",
        description: " Elevate your standards with our unwavering commitment to quality 🌟 "
    },
    {
        icon: <FaUmbrella />,
        title: "Customer Focused",
        description: " We pride ourselves on putting YOU, our valued customer, at the heart of everything we do 🌟 "
    },
    {
        icon: <FaUsers />,
        title: "Global Sourcing",
        description: " Unlock the World's Resources with Our Global Sourcing Solutions 🔑 "
    },
]

export const ServicesData = [
    {
        image:images.a1,
        icon:<BiBuildings />,
        title:"Architectural Design",
        description:"Creating sketches, drawings, and 3D models to illustrate design ideas and concepts"
    },
    {
        image:images.i7,
        icon:<LuSofa />,
        title:"Interior Design",
        description:"Creating interior layouts that enhance functionality and aesthetics."
    },
    {
        image:images.c3,
        icon:<FaRegHandshake />,
        title:"Consultation & Advisory",
        description:"Assisting clients in making informed decisions about design options and project feasibility."
    },
    {
        image:images.i8,
        icon:<TfiHummer />,
        title:"Construction & Documentation",
        description:"Creating documents that contractors and builders can use for construction purposes."
    },
    {
        image:images.a4,
        icon:<BsPuzzle />,
        title:"Space Planning",
        description:"Arranging rooms, circulation paths, and functional areas to ensure efficient flow and functionality."
    },
    {
        image:images.c5,
        icon:<BsPinMapFill />,
        title:"Site Analysis & Selection",
        description:"Recommending suitable locations based on the project's goals and requirements."
    },
    {
        image:images.a11,
        icon:<BsTools />,
        title:"Renovation & Adaptive Reuse",
        description:"Developing strategies to update and improve the functionality of older buildings."
    },
    {
        image:images.header,
        icon:<MdChecklist />,
        title:"Project Management",
        description:"Monitoring the project's progress, budget, and timeline."
    },
    {
        image:images.i9,
        icon:<FcFlowChart />,
        title:"Visualization & Communication",
        description:"Using digital tools and software to create visualizations, animations, and presentations"
    },
]

export const Project1 = [
    {image: images.a1,},
    {image: images.a2,},
    {image: images.a3,},
    {image: images.a4,},
    {image: images.a5,},
    {image: images.a6,},
    {image: images.a7,},
    {image: images.a8,},
    {image: images.a9,},
]
export const Project3 = [
    {image: images.c1,},
    {image: images.c2,},
    {image: images.c3,},
    {image: images.c4,},
    {image: images.c5,},
    {image: images.c6,},
    {image: images.c7,},
    {image: images.c8,},
    {image: images.c9,},
]
export const Project2 = [
    {image: images.i1,},
    {image: images.i2,},
    {image: images.i3,},
    {image: images.i4,},
    {image: images.i5,},
    {image: images.i6,},
    {image: images.i7,},
    {image: images.i8,},
    {image: images.i9,},
]

export const Reviews = [
    {
        name: "Yasin Walum",
        title: "CEO, P CODE",
        image: images.profile1,
        review: "Working with RahStudio was an absolute delight! Their team brought our vision to life with incredible attention to detail and innovative design solutions. From concept to completion, their dedication was evident in every aspect. Highly recommend them for any project"
    },
    {
        name: "Iddi namadadi",
        title: "Web Developer",
        image: images.profile2,
        review: "A seamless collaboration with RahStudio transformed our space into a true masterpiece. Their expertise in combining aesthetics, functionality, and sustainability is truly commendable. The final result exceeded our expectations, and we couldn't be happier with the end product."
    },
    {
        name: "Afua Namataka",
        title: "Engineer",
        image: images.profile3,
        review: "Choosing RahStudio was the best decision we made for our project. Their team's creativity and professionalism stood out throughout the entire process. They listened to our ideas, provided insightful suggestions, and executed flawlessly. The result? An architectural gem that's the talk of the town!"
    },
    {
        name: "Hadija Nandudu",
        title: "Accountant",
        image: images.profile4,
        review: "The team at RahStudio understood our unique requirements and translated them into an exceptional design that perfectly captures our brand identity. Their ability to balance modern aesthetics with practical functionality is exceptional. We're incredibly proud of the space they've created for us."
    },
    {
        name: "Fazila Galenda",
        title: "CAO",
        image: images.profile5,
        review: "Collaborating with RahStudio was an inspiring journey from start to finish. Their architects' visionary thinking and unwavering commitment to quality resulted in a space that not only reflects our values but has also become a landmark in the community. A truly remarkable experience!"
    },
]

export const BlogArticles = [
    {
        image: images.a11,
        description: "The concrete buildings og Britalism are beautiful",
        link: 'https://ywalum.com/'
    },
    {
        image: images.c11,
        description: "What style is that house guiders to designs",
        link: 'https://ywalum.com/'
    },
    {
        image: images.i11,
        description: "Why Japan is crazy about housing",
        link: 'https://ywalum.com/'
    }
]