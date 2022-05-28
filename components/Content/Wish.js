import Image from 'next/dist/client/image';
import MaskBottom from '../../assets/mask_bottom.png'
import Bunga from "../../assets/flower.png";
import MaskTop from "../../assets/mask.png";
import Love from '../../assets/love.png'
import Thanks from '../../assets/thank-you.png'
import Card from "./Card";
import axios from "axios";
import {useEffect, useState} from "react";
import Swal from "sweetalert2";

export default function Wish({
                                 guest
                             }) {
    const [listdoa, setDoa] = useState([])
    const [valueKirim, setValue] = useState({
        "nama": "",
        "hubungan": "",
        "doa": "",
        "hadir": true
    })
    const checkData = (r) => {
        setValue({
            ...valueKirim,
            "hadir": r.target.value
        })
    }
    console.log('debug test hadir', valueKirim.hadir)

    useEffect(() => {
        getData()
    }, [])
    const getData = () => {
        axios.get(`https://apirolandkartini.herokuapp.com/api/posts`)
            .then(data => {
                setDoa(data.data)
            }).catch(err => {
            console.log('debug', err)
        })
    }
    const getValue = (e, d) => {
        setValue({
            ...valueKirim,
            [e]: d
        })
    }

    const kirimPesan = () => {
        console.log('debug test', valueKirim.hadir)
        const kirim = {
            "nama": guest,
            "hubungan": valueKirim.hubungan,
            "doa": valueKirim.doa,
            "hadir": valueKirim.hadir
        }
        axios.post(`https://apirolandkartini.herokuapp.com/api/posts`, kirim)
            .then(() => {
                Swal.fire({
                    imageUrl: `https://cdn-icons-png.flaticon.com/512/3158/3158981.png`,
                    imageWidth: 200,
                    imageHeight: 200,
                    title: 'Terimakasih atas ucapannya',
                    showConfirmButton: false,
                    timer: 2500
                })
                getData()
                setValue({
                    "nama": "",
                    "hubungan": "",
                    "doa": "",
                    "hadir": true
                })
            }).catch(err => {
            console.log('debug err', err)
            Swal.fire({
                imageUrl: `https://cdn-icons-png.flaticon.com/512/5706/5706597.png`,
                imageWidth: 200,
                imageHeight: 200,
                title: 'Silahkan coba lagi nanti yaa...',
                showConfirmButton: false,
                timer: 2500
            })
        })
    }

    const [copied, setCopied] = useState({
        roland1: false,
        rifki2: false,
        kartini1: false,
        kartini2: false,
        alamat: false
    })

    const copyText = (e) => {
        const rekeningRoland1 = '0322198491'
        const rekeningRoland2 = 1255595715
        const rekeningKartini1 = '039701031147503'
        const rekeningKartini2 = 7151916327
        const alamatRumah = "Jl. Rawasari Selatan No.30 RT.014 RW.009, Kel. Rawasari, Kec. Cempaka Putih, Jakarta Pusat, 10570"

        if (e === 'roland1') {
            navigator.clipboard.writeText(rekeningRoland1)
            setCopied({
                ...copied,
                roland1: true
            })
        }   else if (e === 'roland2') {
            navigator.clipboard.writeText(rekeningRoland2)
            setCopied({
                ...copied,
                roland2: true
            })
        }   else if (e === "kartini1") {
            navigator.clipboard.writeText(rekeningKartini1)
            setCopied({
                ...copied,
                kartini1: true
            })
        }   else if (e === "kartini2") {
            navigator.clipboard.writeText(rekeningKartini2)
            setCopied({
                ...copied,
                kartini2: true
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
                <div className={"flex justify-center items-center content-center md:-mt-10 mb-10"}>
                    <Image src={Bunga}/>
                </div>

                <div className={"flex justify-center items-center content-center"}>
                    <h1 className={"md:text-5xl text-center  text-4xl md:mb-0 font-medium text-black leading-relaxed font-curs"}>
                        Kirim Hadiah</h1>
                </div>

                <div className={"container flex flex-wrap mx-auto pt-5 justify-center"}>
                    <br/>

                    <div className="shadow-lg text-center md:w-5/12 md:ml-20 mb-6 px-3 py-10">
                        <p className={"text-base"}>BCA a/n Roland Romudo Nainggolan</p>
                        <p className={"font-bold text-lg"}>0322198491</p>
                        
                        <button
                            className="bg-color-pallete-200 hover:bg-color-pallete-300 text-white font-bold py-2 px-4 rounded mb-2 md:mb-0"
                            onClick={() => {
                                copyText('roland1')
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
                        <br/>
                        <br/>

                        <p className={"text-base"}>BNI a/n Roland Romudo Nainggolan</p>
                        <p className={"font-bold text-lg"}>1255595715</p>
                        
                        <button
                            className="bg-color-pallete-200 hover:bg-color-pallete-300 text-white font-bold py-2 px-4 rounded mb-2 md:mb-0"
                            onClick={() => {
                                copyText('roland2')
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
                    </div>

                    <div className="shadow-lg text-center md:w-5/12 md:ml-20 mb-6 px-3 py-10">
                        <p className={"text-base"}>BRI a/n Kartini Lidyawati</p>
                        <p className={"font-bold text-lg"}>039701031147503</p>
                        
                        <button
                            className="bg-color-pallete-200 hover:bg-color-pallete-300 text-white font-bold py-2 px-4 rounded mb-2 md:mb-0"
                            onClick={() => {
                                copyText('kartini1')
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
                        <br/>
                        <br/>

                        <p className={"text-base"}>BSI a/n Kartini Lidyawati</p>
                        <p className={"font-bold text-lg"}>7151916327</p>
                        
                        <button
                            className="bg-color-pallete-200 hover:bg-color-pallete-300 text-white font-bold py-2 px-4 rounded mb-2 md:mb-0"
                            onClick={() => {
                                copyText('kartini2')
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
                    </div>
                </div>

                <div className={"container flex flex-wrap mx-auto pt-5 justify-center"}>
                    <br/>

                    <div className="shadow-lg text-center md:w-3/12 md:ml-20 mb-6 px-3 py-10">
                        <p className={"font-bold text-lg"}>Kirim Kado</p>
                        <br/>
                        <p className={"text-base"}>Jl. Rawasari Selatan No.30 RT.014 RW.009, Kel. Rawasari, Kec. Cempaka Putih, Jakarta Pusat, 10570</p>
                        
                        <br/>
                        <button
                            className="bg-color-pallete-200 hover:bg-color-pallete-300 text-white font-bold py-2 px-4 rounded mb-2 md:mb-0"
                            onClick={() => {
                                copyText('alamat')
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
                        <br/>
                        <br/>
                    </div>
                </div>

                
                            


                <div className={"flex justify-center items-center content-center"}>
                    <h1 className={"md:text-5xl text-center  text-4xl md:mb-0 font-medium text-black leading-relaxed font-curs"}>&nbsp;Kirimkan
                        Ucapan & Doa untuk kami&nbsp;</h1>
                </div>
                <div className={"flex justify-center items-center content-center"}>

                    <div className="shadow-lg mx-auto md:w-8/12 lg:w-6/12 w-11/12 mb-6 px-3 py-10">
                        <label className="block text-gray-700 md:text-lg font-bold mb-2" htmlFor="username">
                            Nama
                        </label>
                        <input type="text"
                               placeholder="Nama.."
                               value={guest}
                            // onChange={(e) => getValue('nama', e.target.value)}
                               className={"text-2xl appearance-none font-mono border-none bg-transparent " +
                               "justify-center leading-tight focus:outline-none text-black capitalize mb-2"}/>
                        <label className="block text-gray-700 md:text-lg font-bold mb-2" htmlFor="username">
                            Hubungan
                        </label>
                        <input type="text"
                               placeholder="Teman/Sahabat/Keluarga.."
                               value={valueKirim.hubungan}
                               onChange={(e) => getValue('hubungan', e.target.value)}
                               className={" text-sm w-full appearance-none border-none bg-transparent" +
                               "justify-center leading-tight focus:outline-none text-black capitalize mb-10"}/>
                        <label className="block text-gray-700 md:text-lg font-bold mb-2" htmlFor="username">
                            Ucapan & Doa
                        </label>
                        <textarea type="text"
                                  placeholder="Ucapan & Doa..."
                                  value={valueKirim.doa}
                                  onChange={(e) => getValue('doa', e.target.value)}
                                  className={"text-sm h-[200px] w-full appearance-none border-none bg-transparent" +
                                  "justify-center leading-tight focus:outline-none text-black capitalize"}/>
                        <div>
                            <label className="block text-gray-700 md:text-lg font-bold mb-2" htmlFor="username">
                                Apakah anda berkenan hadir?
                            </label>
                            <label className="inline-flex items-center mr-4">
                                <input
                                    type="radio"
                                    className="form-radio"
                                    name="radio"
                                    value={true}
                                    onClick={(e) => {
                                        checkData(e)
                                    }}
                                />
                                <span className="ml-2">Hadir</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input type="radio" className="form-radio" name="radio" value={false}
                                       onClick={(e) => {
                                           checkData(e)
                                       }}
                                />
                                <span className="ml-2">Tidak Hadir</span>
                            </label>
                        </div>
                        <br/>
                        <button
                            className="bg-color-pallete-200 hover:bg-color-pallete-300 text-white font-bold py-2 px-4 rounded"
                            onClick={kirimPesan}
                        >
                            <p className={"flex"}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
                                     fill="currentColor">
                                    <path
                                        d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"/>
                                    <path
                                        d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"/>
                                </svg>
                                &nbsp;
                                Kirim Pesan
                            </p>
                        </button>
                    </div>
                </div>
                <div className={"flex justify-center items-center content-center"}>
                    <h1 className={"md:text-6xl text-center my-5 text-5xl font-medium text-black leading-relaxed font-curs"}>&nbsp;Doa
                        dari kalian <Image src={Love} width={50} height={50}/>&nbsp;</h1>
                </div>
                <div className={"flex flex-wrap justify-center mb-16 md:mb-0 overflow-auto md:h-128 h-96"}>
                    {listdoa.map((item, index) => (
                        <>
                            <div className={"lg:w-3/12 w-full lg:ml-10 ml-5 mb-10 mx-5 ml-4 "}>
                                <Card
                                    key={index}
                                    name={item.nama}
                                    desc={item.doa}
                                    work={item.hubungan}
                                />
                            </div>
                        </>
                    ))}
                </div>

                <div className={"-mb-2"}>
                    <Image src={MaskTop}/>
                </div>
            </div>
        </>
    )
}
