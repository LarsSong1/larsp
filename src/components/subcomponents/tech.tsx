import webicon from '../../assets/img/iconos/desktop.svg'
import brush from '../../assets/img/iconos/brush.svg'
import phoneicon from '../../assets/img/iconos/phone.svg'
import { useState } from 'react';
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import javascript from '../../assets/img/iconos/cjs.svg'
import python from '../../assets/img/iconos/cpython.svg'
import react from '../../assets/img/iconos/creact.svg'
import tailwind from '../../assets/img/iconos/ctailwind.svg'
import types from '../../assets/img/iconos/ctypescript.svg'
import { Autoplay } from 'swiper/modules';
import django from '../../assets/img/iconos/cdjango.svg'
import htmlicon from '../../assets/img/iconos/chtml.svg'
import cssicon from '../../assets/img/iconos/ccss.svg'
import bootstrapicon from '../../assets/img/iconos/cbootstrap.svg'
import sqliteicon from '../../assets/img/iconos/csqlite.svg'


interface Tab {
    title: string;
    content: { img: string, title: string }[];
}

const techData: Tab[] = [
    {
        title: 'web',
        content: [
            {
                img: javascript,
                title: 'Javascript'
            },
            {
                img: react,
                title: 'React'
            },
            {
                img: tailwind,
                title: 'Tailwind'
            },
            {
                img: types,
                title: 'Typescript'
            },
            {
                img: django,
                title: 'Django'
            },
            {
                img: python,
                title: 'Python'
            },
            {
                img: bootstrapicon,
                title: 'Bootstrap'
            },
            {
                img: sqliteicon,
                title: 'SQLite'
            },
            {
                img: htmlicon,
                title: 'Html'
            },
            {
                img: cssicon,
                title: 'Css'
            },

        ]

    },
    {
        title: 'mobile',
        content: [
            {
                img: '',
                title: ''
            },
            {
                img: '',
                title: ''
            },

        ]
    }
]


const DummyContent = ({ data }: { data: string }) => {
    const designTechData = techData.find((tab) => tab.title === 'design')?.content || []
    console.log(typeof data)
    if (data === "web") {
        const webTechData = techData.find((tab) => tab.title === 'web')?.content || [];
        return (
            <Swiper
                loop={true}
                modules={[Autoplay]}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                slidesPerView={6}

            >
                {webTechData.map((tabContent, key) => (
                    <SwiperSlide key={key}>
                        <div className='bg-black w-[80px] h-[80px] flex flex-col justify-center items-center rounded-md mt-2'>
                            <img className='w-[35px] h-[35px]' src={tabContent.img} alt={tabContent.title} />
                            <p className='text-white text-sm font-semibold mt-2 font-["Rubik"]'>{tabContent.title}</p>
                        </div>
                    </SwiperSlide>
        ))
    }
            </Swiper >
        )
    } else if (data === "mobile") {
    const mobileTechData = techData.find((tab) => tab.title === 'mobile')?.content || []
    return (
        <Swiper>
            {mobileTechData.map((tabContent, key) => (
                <SwiperSlide key={key}>
                    <div className='bg-black w-[100px] h-[100px] flex'>
                        <img src={tabContent.img} className='object-contain' alt={tabContent.title} />
                        <p className='text-center'>{tabContent.title}</p>
                    </div>
                </SwiperSlide>

            ))}
        </Swiper>
    )
} else {
    return (

        <Swiper>
            {designTechData.map((tabContent, key) => (
                <SwiperSlide key={key}>
                    <img src={tabContent.img} alt={tabContent.title} />
                    <p>{tabContent.title}</p>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}




}

function Tech() {
    const [techno, settechno] = useState("web")

    const returnTech = (datatech: string) => {
        settechno(datatech)
    }


    return (
        <div className="p-10 pt-2 overflow-hidden border-2 border-b-[#826FA5] border-r-[#826FA5] h-1/3 ">
            <div className="flex justify-start items-center">
                <h1 className="me-5 font-['Rubik'] font-bold text-xl">Tecnologías</h1>
                <div>
                    <ul className='flex gap-5'>
                        <li className='border-2 border-black rounded-md p-2' onClick={() => returnTech("web")}>
                            <img src={webicon} className='w-[15px]' alt="web-icon" />
                        </li>
                        <li className='border-2 border-black rounded-md p-2' onClick={() => returnTech("mobile")}>
                            <img src={phoneicon} className='w-[15px]' alt="phone-icon" />
                        </li>
                        <li className='border-2 border-black rounded-md p-2' onClick={() => returnTech("design")}>
                            <img src={brush} className='w-[15px]' alt="brush-icon" />
                        </li>
                    </ul>
                </div>
            </div>
            <div className='pt-2'>
                <DummyContent data={techno} />
            </div>
        </div>
    )
}

export default Tech