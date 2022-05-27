import Image from 'next/dist/client/image'
import Instagram from '../../../assets/instagram.png'

export default function Pengantin() {
    return (
        <>
            <div className={"container mx-auto hidden md:block"}>
                <div className={"flex flex-wrap text-center mt-10 pb-10"}>
                    <div className={'md:w-6/12 w-full'}>
                        <div className={"flex items-center justify-center"}>
                            <img
                                className={"rounded-full bg-auto h-[200px] w-[200px]"}
                                src={"https://i.imgur.com/OqMh5hN.png"}
                                alt=""/>
                        </div>
                        <h1 className={"md:text-4xl text-3xl font-medium text-white leading-relaxed mt-5 font-brittany"}>-
                            Roland
                            -</h1>
                        <h1 className={"md:text-2xl text-xl font-medium text-white leading-relaxed mt-5"}>
                            Roland Romudo Nainggolan Parhusip, S.H.</h1>

                            <a href="https://www.instagram.com/rolandngl7/" target={"_blank"} rel="noreferrer">
                            <button
                                className="hover:bg-color-pallete-600 text-black italic hover:not-italic py-2 px-4 rounded"
                            >
                                <p className={"flex"}>
                                    <Image src={Instagram} width={25} height={25}/>
                                    &nbsp;
                                    @rolandngl7
                                </p>
                            </button>
                            </a>

                        <br/>
                        <p className={"text-white"}>
                            Putra dari <br/><span className={"font-bold"}> Bapak S.M. Nainggolan dan Ibu M. Siagian

                    </span>
                        </p>
                    </div>
                    <div className={'md:w-6/12 w-full '}>
                        <div className={"flex items-center justify-center"}>
                            <img
                                className={"rounded-full  w-[200px] h-[200px]"}
                                src="https://i.imgur.com/MS43Ppx.png"
                                alt=""/>
                        </div>

                        <h1 className={"md:text-4xl text-3xl font-medium text-white leading-relaxed mt-5 font-brittany"}>-
                            Kartini
                            -</h1>
                        <h1 className={"md:text-2xl text-xl font-medium text-white leading-relaxed mt-5"}>
                            Kartini Lidyawati Angelia Tinambunan, S.I.Kom.</h1>

                            <a href="https://www.instagram.com/ketawaketini/" target={"_blank"} rel="noreferrer">
                            <button
                                className="hover:bg-color-pallete-600 text-black italic hover:not-italic py-2 px-4 rounded"
                            >
                                <p className={"flex"}>
                                    <Image src={Instagram} width={25} height={25}/>
                                    &nbsp;
                                    @ketawaketini
                                </p>
                            </button>
                            </a>

                        <br/>
                        <p className={"text-white md:mb-0"}>
                            Putri dari <br/> <span className={"font-bold"}>Bapak J. Tinambunan dan Ibu S.N. Marbun</span>
                        </p>
                    </div>


                </div>
            </div>
            {/*Mobile*/}
            <div className={"container mx-auto md:hidden"}>
                <div className={"flex flex-wrap text-center mt-10 pb-10"}>
                    <div className={'md:w-6/12 w-full'}>
                        <h1 className={"md:text-5xl text-4xl font-medium text-white leading-relaxed mt-5 font-brittany "}>-
                            Roland
                            -</h1>
                        <h1 className={"md:text-3xl text-2xl font-medium text-white leading-relaxed"}>
                            Roland Romudo Nainggolan Parhusip, S.H.</h1>

                            <a href="https://www.instagram.com/rolandngl7/" target={"_blank"} rel="noreferrer">
                            <button
                                className="hover:bg-color-pallete-600 text-black italic hover:not-italic py-2 px-4 rounded"
                            >
                                <p className={"flex"}>
                                    <Image src={Instagram} width={25} height={25}/>
                                    &nbsp;
                                    @rolandngl7
                                </p>
                            </button>
                            </a>

                            <br/>
                        <p className={"text-white mb-5"}>
                            Putra dari <br/><span className={"font-bold"}> Bapak S.M. Nainggolan dan Ibu M. Siagian
                        </span>
                        </p>

                    </div>
                    <div className={"flex items-center w-full justify-center"}>
                        <img
                            className={"rounded-full mr-10 w-[150px] h-[150px]"}
                            src="https://i.imgur.com/OqMh5hN.png"
                            alt=""/>
                        <img
                            className={"rounded-full bg-auto h-[150px] w-[150px]"}
                            src="https://i.imgur.com/MS43Ppx.png"
                            alt=""/>
                    </div>
                    <div className={'md:w-6/12 w-full '}>
                        <h1 className={"md:text-5xl text-4xl font-medium text-white leading-relaxed mt-5 font-brittany"}>-
                            Kartini
                            -</h1>
                        <h1 className={"md:text-3xl text-2xl font-medium text-white leading-relaxed"}>
                            Kartini Lidyawati Angelia Tinambunan, S.I.Kom.</h1>

                            <a href="https://www.instagram.com/ketawaketini/" target={"_blank"} rel="noreferrer">
                            <button
                                className="hover:bg-color-pallete-600 text-black italic hover:not-italic py-2 px-4 rounded"
                            >
                                <p className={"flex"}>
                                    <Image src={Instagram} width={25} height={25}/>
                                    &nbsp;
                                    @ketawaketini
                                </p>
                            </button>
                            </a>

                        <br/>
                        <p className={"text-white mb-5 md:mb-0"}>
                            Putri dari <br/> <span className={"font-bold"}>Bapak J. Tinambunan dan Ibu S.N. Marbun</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
