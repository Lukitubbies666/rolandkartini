import Image from 'next/dist/client/image'
import BungaKiri from '../../assets/leaves-left.png'
import BungaKanan from '../../assets/leaves-right.png'
import MaskTop from '../../assets/mask.png'
import MaskBottom from '../../assets/mask_bottom.png'
import Pengantin from "./Pengantin/Pengantin";
import Slideshow from './Slideshow/Slideshow'
import { SliderData } from './Slideshow/SliderData'
import Waktu from "./Waktu";

export default function Mempelai() {

    return (
        <>
            <div className={"bg-color-pallete-200 bg-cover bg-bottom"}>
                <Image alt="huedh" src={MaskBottom}/>
                <div className={"container mx-auto pt-5"}>
                    {/* <div className={"flex justify-center items-center text-center "}>
                        <p className={"text-white md:w-6/12 mb-8 md:text-2xl text-2xl mx-10"}>Kiranya Engkau sekarang berkenan memberkati keluarga hamba-Mu ini, 
                    supaya tetap ada di hadapan-Mu untuk selama-lamanya. Sebab apa yang Engkau berkati, ya TUHAN, diberkati untuk selama-lamanya.</p>
                    </div> */}
                    <p className={"text-white flex justify-center items-center text-center text-lg md:mx-40 mx-2 mb-6"}>&apos;Kiranya Engkau sekarang berkenan memberkati keluarga hamba-Mu ini, 
                    supaya tetap ada di hadapan-Mu untuk selama-lamanya. Sebab apa yang Engkau berkati, ya TUHAN, diberkati untuk selama-lamanya.&apos;</p>
                    <p className={"text-white flex justify-center items-center text-center md:mx-40 mb-8 font-bold"}>
                        (1 Tawarikh 17 : 27)
                    </p>
                    <div className={"flex justify-center items-center content-center"}>
                        <Image src={BungaKiri} width={150} height={150}/>
                        <h1 className={"md:text-6xl text-center  text-5xl md:mb-0 font-medium text-white leading-relaxed font-curs"}>Groom
                            & Bride</h1>
                        <Image src={BungaKanan} width={150} height={150}/>
                    </div>
                    <br/>
                    <div className={"text-center px-10"}>
                        <p className={"leading-relaxed  text-white"}>By the grace of God, we are pleased to announce our wedding to you 
                        our family and friends:
                        </p>
                    </div>
                    <Pengantin/>
                </div>


                <h1 className={"md:text-6xl text-center  text-5xl md:mb-0 font-medium text-white leading-relaxed font-curs"}>Our Prewedding Photos
                </h1>
                <br/>

                <Slideshow slides={SliderData}/>

                <div className={"flex md:-mb-2"}>
                    <Image src={MaskTop}/>
                </div>
            </div>
        </>
    )
}
