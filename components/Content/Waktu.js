import Image from 'next/dist/client/image';
import MaskBottom from '../../assets/mask_bottom.png'
import Bunga from "../../assets/flower.png";
import Ring from '../../assets/ring.png'
import Wedding from '../../assets/Resepsi.png'
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
    const showInMapClicked = () => {
        window.open("https://calendar.google.com/event?action=TEMPLATE&tmeid=M2JoczlsOWRhY2pxNTBvc3JkYm8zNTgzc2EgdG9iaW5ndHViYmllc0Bt&tmsrc=tobingtubbies%40gmail.com");
    };

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
                            Akad
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
                        
                        <p className={"font-bold"}>Gereja HKBP Kayu Putih</p>
                        <p className={"px-16"}>Jl. Pondasi No. 17, Kampung Ambon, RT.12/RW.2, Kayu Putih, 
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

                        <p className={"font-bold"}>Grand Mangaradja</p>
                        <p className={"px-16"}>Jalan Perintis Kemerdekaan 7, Kelapa Gading Timur, 
                        Kecamatan Kelapa Gading Kota Jakarta Utara</p>
                    </div>
                </div>
                <Timer/>
                <div className={"text-center mb-2"}>
                    <button
                        className="bg-color-pallete-200 hover:bg-color-pallete-300 text-white font-bold py-2 px-4 rounded mb-2 md:mb-0"
                        onClick={showInMapClicked}
                    >
                        <p className={"flex"}>

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" stroke="#808080" fillRule="evenodd"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>
                            
                            </svg>
                            &nbsp;
                            Tambahkan ke kalender
                        </p>
                    </button>
                    &nbsp;
                    <button
                        className="bg-color-pallete-200 hover:bg-color-pallete-300 text-white font-bold py-2 px-4 rounded"
                        onClick={() => {
                            setShowModal(true)
                            setCopied({
                                rifki: false,
                                rifki2: false,
                                novia: false,
                                novia2: false,
                                alamat: false
                            })
                        }}
                    >
                        <p className={"flex"}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
                                 fill="currentColor">
                                <path fillRule="evenodd"
                                      d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                                      clipRule="evenodd"/>
                                <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"/>
                            </svg>
                            &nbsp;
                            Kirim Hadiah
                        </p>
                    </button>
                </div>
                {showModal ? (
                    <animated.div style={fade}>
                        <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative w-auto my-6 mx-auto max-w-6xl">
                                {/*content*/}
                                <div
                                    className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div
                                        className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                        <h3 className="text-2xl font-semibold">
                                            Kado Pernikahan
                                        </h3>
                                        <button
                                            className="p-1 ml-auto border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={() => setShowModal(false)}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                                                 viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd"
                                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                                      clipRule="evenodd"/>
                                            </svg>
                                        </button>
                                    </div>
                                    {/*body*/}
                                    <div className="relative p-6 w-full">
                                        <div className={"text-center md:flex md:justify-center items-center"}>
                                            <div className={"mb-10 md:mb-0 md:mr-3 mr-0"}>
                                                <h3>0322198491 - <span className={"font-bold"}>BCA</span>
                                                    <br/>
                                                    Roland Romudo Nainggolan </h3>
                                                <button
                                                    className="bg-color-pallete-200 hover:bg-color-pallete-300 text-white font-bold py-2 px-4 rounded mb-2 md:mb-0"
                                                    onClick={() => {
                                                        copyText('rifki')
                                                    }}
                                                >
                                                    <p className={"flex"}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                                                             viewBox="0 0 20 20" fill="currentColor">
                                                            <path
                                                                d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z"/>
                                                            <path
                                                                d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/>
                                                        </svg>
                                                        &nbsp;
                                                        Copy Number
                                                    </p>
                                                </button>

                                                {copied.rifki ?
                                                    <>
                                                        <br/><br/>
                                                    </>
                                                    : null}
                                                    <br/><br/>
                                                    <br/><br/>

                                                <h3>1255595715 - <span className={"font-bold"}>BNI</span>
                                                    <br/>
                                                    Roland Romudo Nainggolan </h3>
                                                <button
                                                    className="bg-color-pallete-200 hover:bg-color-pallete-300 text-white font-bold py-2 px-4 rounded mb-2 md:mb-0"
                                                    onClick={() => {
                                                        copyText('rifki2')
                                                    }}
                                                >
                                                    <p className={"flex"}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                                                             viewBox="0 0 20 20" fill="currentColor">
                                                            <path
                                                                d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z"/>
                                                            <path
                                                                d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/>
                                                        </svg>
                                                        &nbsp;
                                                        Copy Number
                                                    </p>
                                                </button>

                                                {copied.rifki2 ?
                                                    <>
                                                        <br/><br/>
                                                    </>
                                                    : null}
                                            </div>

                                            <div className={"mb-10 md:mb-0 md:mr-3 mr-0"}>
                                                <h3>039701031147503 - <span className={"font-bold"}>BRI</span>
                                                    <br/>
                                                    Kartini Lidyawati </h3>
                                                <button
                                                    className="bg-color-pallete-200 hover:bg-color-pallete-300 text-white font-bold py-2 px-4 rounded mb-2 md:mb-0"
                                                    onClick={() => {
                                                        copyText('novia')
                                                    }}
                                                >
                                                    <p className={"flex"}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                                                             viewBox="0 0 20 20" fill="currentColor">
                                                            <path
                                                                d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z"/>
                                                            <path
                                                                d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/>
                                                        </svg>
                                                        &nbsp;
                                                        Copy Number
                                                    </p>
                                                </button>
                                                {copied.novia ?
                                                    <>
                                                        <br/><br/>
                                                    </>
                                                    : null}
                                                    <br/><br/>
                                                    <br/><br/>

                                                <h3>7151916327 - <span className={"font-bold"}>BSI</span>
                                                    <br/>
                                                    Kartini Lidyawati </h3>
                                                <button
                                                    className="bg-color-pallete-200 hover:bg-color-pallete-300 text-white font-bold py-2 px-4 rounded mb-2 md:mb-0"
                                                    onClick={() => {
                                                        copyText('novia2')
                                                    }}
                                                >
                                                    <p className={"flex"}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                                                             viewBox="0 0 20 20" fill="currentColor">
                                                            <path
                                                                d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z"/>
                                                            <path
                                                                d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/>
                                                        </svg>
                                                        &nbsp;
                                                        Copy Number
                                                    </p>
                                                </button>
                                                {copied.novia2 ?
                                                    <>
                                                        <br/><br/>
                                                    </>
                                                    : null}
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </animated.div>
                ) : null}
                <div className={"mx-auto justify-center flex"}>
                    <iframe
                        className={"md:w-8/12 w-11/12"}
                        src="https://maps.google.com/maps?q=grand%20mangaraja&t=&z=17&ie=UTF8&iwloc=&output=embed"
                        height="450" style={{border: 0}} allowFullScreen="" loading="lazy"></iframe>
                </div>
                <div className={"-mb-2"}>
                    <Image src={MaskTop}/>
                </div>
            </div>
        </>
    )
}
