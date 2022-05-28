import Image from 'next/dist/client/image'
import MaskBottom from "../../assets/mask_bottom.png";
import Instagram from '../../assets/instagram.png'

export default function Footer() {
    return (
        <>
            <div className={"bg-footer bg-cover bg-no-repeat bg-center "}>
                <Image src={MaskBottom}/>
                <div className={"container mx-auto pt-5 pb-20"}>
                    <div className={"flex justify-center items-center content-center"}>
                        <p className={"text-center block md:mb-0 font-medium text-lg text-white leading-relaxed"}>With Love,</p>
                    </div>
                    <br/><br/>

                    <div className={"flex justify-center items-center"}>
                        <h1 className={"md:text-6xl text-center  text-5xl mb-0 font-medium text-white leading-relaxed font-brittany"}>&nbsp;
                        Roland Romudo Nainggolan &nbsp;</h1>
                    </div>
                    <div className={"flex justify-center items-center content-center "}>
                        <h1 className={"md:text-6xl text-center text-5xl mb-0 font-medium text-white leading-relaxed font-curs"}>
                            & </h1>
                    </div>
                    <div className={"flex justify-center items-center content-center "}>
                        <h1 className={"md:text-6xl text-center  text-5xl mb-5 font-medium text-white leading-relaxed font-brittany"}>&nbsp;
                        Kartini Lidyawati Angelia Tinambunan&nbsp; </h1>
                    </div>
                    <br/>
                </div>
            </div>
        </>
    )
}