import Image from 'next/dist/client/image';
import MaskBottom from '../../assets/mask_bottom.png'
import Bunga from "../../assets/flower.png";
import Ring from '../../assets/ring.png'
import Wedding from '../../assets/weddingpng.png'
import Timer from "../Timer";
import MaskTop from "../../assets/mask.png";
import {useState} from "react";
import {useSpring, animated} from "react-spring";
import Instagram from "../../assets/instagram.png";
import Location from "../../assets/location.png"

export default function Waktu() {
    const [showModal, setShowModal] = useState(false);
    const [copied, setCopied] = useState({
        rifki: false,
        rifki2: false,
        novia: false,
        novia2: false,
        alamat: false
    })
    const fade = useSpring({
        opacity: showModal ? 1 : 0,

    })
    
    const copyText = (e) => {
        const rekeningRifki = '0322198491'
        const rekeningRifki2 = 1255595715
        const rekeningNovia = '039701031147503'
        const rekeningNovia2 = 7151916327

        const alamatRumah = "Jl. Caman Raya Gg. H. Moh. Ali (Belakang Kopi bob) No.1 RT 07/03, Jatibening."

        if (e === 'rifki') {
            navigator.clipboard.writeText(rekeningRifki)
            setCopied({
                ...copied,
                rifki: true
            })
        }   else if (e === 'rifki2') {
            navigator.clipboard.writeText(rekeningRifki2)
            setCopied({
                ...copied,
                rifki2: true
            })
        }   else if (e === "novia") {
            navigator.clipboard.writeText(rekeningNovia)
            setCopied({
                ...copied,
                novia: true
            })
        }   else if (e === "novia2") {
            navigator.clipboard.writeText(rekeningNovia2)
            setCopied({
                ...copied,
                novia2: true
            }) 
        }   else {
            navigator.clipboard.writeText(alamatRumah)
            setCopied({
                ...copied,
                alamat: true
            })
        }
    }
    return (
        <>
            <div className={"bg-color-white bg-cover bg-bottom"}>
                <Image src={MaskBottom}/>
                <div className={"flex justify-center items-center content-center md:-mt-10"}>
                    <Image src={Bunga}/>
                </div>
                <div className={"container flex flex-wrap mx-auto pt-5"}>
                    <br/>
                    <div className="shadow-lg text-center md:w-5/12 md:ml-20 mb-6 px-3 py-10">

                        <Image src={Ring} width={100} height={100}/>
                        <h1 className={"md:text-6xl capitalize text-5xl md:mb-0 font-medium leading-relaxed font-curs"}>
                            Pemberkatan
                            Nikah</h1>
                        <p className={"font-bold"}>Sabtu, 4 Juni 2022</p>
                        <p className={"font-bold"}>08:30 s.d 10:00 WIB</p>
                        {/* <p className={"font-bold"}>(Khusus Keluarga)</p> */}
                        <a href="https://www.google.com/maps/place/Gereja+HKBP+Kayu+Putih/@-6.1848568,106.8845568,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x771b10d9289cd413!8m2!3d-6.1849021!4d106.8844946" target={"_blank"} rel="noreferrer">
                            <button
                                className="hover:bg-color-pallete-600 text-black font-bold py-2 px-4 rounded"
                            >
                                <p className={"flex"}>
                                    <Image src={Location} width={20} height={30}/>
                                    &nbsp;
                                    
                                </p>
                            </button>
                        </a>
                        <p>(Klik logo untuk terhubung ke lokasi)</p>
                        <br/>
                        
                        <p className={"font-bold font-sans"}>Gereja HKBP Kayu Putih</p>
                        <p className={"px-16 font-sans"}>Jl. Pondasi No. 17, Kampung Ambon, RT.12/RW.2, Kayu Putih, 
                        Kec. Pulo Gadung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 
                        13210, Indonesia</p>
                    </div>
                    <div className={"md:w-1/12"}>
                    </div>
                    <div className="shadow-lg text-center md:w-5/12 md:-ml-12 px-3 mb-6 py-10">
                        <Image src={Wedding} width={83} height={100}/>
                        <h1 className={"md:text-6xl capitalize text-5xl md:mb-0 font-medium leading-relaxed font-curs"}>Resepsi</h1>
                        <p className={"font-bold"}>Sabtu, 4 Juni 2022</p>
                        <p className={"font-bold"}>11:00 WIB s.d Selesai</p>
                        <a href="https://www.google.com/maps/place/Grand+Mangaradja/@-6.178421,106.8996276,17z/data=!3m1!4b1!4m5!3m4!1s0x2e69f4d73f534995:0x3cde116b78b02223!8m2!3d-6.1784263!4d106.9018163" target={"_blank"} rel="noreferrer">
                            <button
                                className="hover:bg-color-pallete-600 text-black font-bold py-2 px-4 rounded"
                            >
                                <p className={"flex"}>
                                    <Image src={Location} width={20} height={30}/>
                                    &nbsp;
                                </p>
                            </button>
                        </a>
                        <p>(Klik logo untuk terhubung ke lokasi)</p>
                        <br/>

                        <p className={"font-bold font-sans"}>Grand Mangaradja</p>
                        <p className={"px-16 font-sans"}>Jalan Perintis Kemerdekaan 7, Kelapa Gading Timur, 
                        Kecamatan Kelapa Gading Kota Jakarta Utara</p>
                    </div>
                </div>

                <div className={"mx-auto justify-center flex"}>
                    <iframe
                        className={"md:w-6/12 w-9/12"}
                        src="https://maps.google.com/maps?q=grand%20mangaraja&t=&z=17&ie=UTF8&iwloc=&output=embed"
                        height="450" style={{border: 0}} allowFullScreen="" loading="lazy"></iframe>
                </div>
                <br/>
                <br/>

                <Timer/>
            
                <div className={"-mb-2"}>
                    <Image src={MaskTop}/>
                </div>
            </div>
        </>
    )
}
