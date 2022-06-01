import React, {useState, useEffect} from "react";
import Image from "next/dist/client/image";
import Play from "../../assets/play.png"

const useAudio = url => {
    // const [audio] = useState(new Audio(`https://www.mboxdrive.com/music.mp3`));
    const [audio] = useState(new Audio(`https://cf-media.sndcdn.com/tr0kd51NZaMD.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vdHIwa2Q1MU5aYU1ELjEyOC5tcDMqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjU0MDc3NDk3fX19XX0_&Signature=TiUkmLfFEyUCAQJKXuhGQvvXwgMxQN2D3qTOtQQWPJgPWhOUFdGF0WTsHnQcVKR3lSwMNjXSupezfh2a6B-is8tsgEuRBtqNhMxhfCZmk9ClGGmWLm4s2A~aJHnWuiwLFpyYXj-rHAiB1NijaoaeVp06bGa7dCMOfyZn~iR7c6pgg2TmkOBTzRz0abwo8LJGZ6JF9Lw9ATpraW2BxqOL~w9YPTNJFp66b3-GSEPPdZqR6sTbTtpe9V1PfFGOmoLkHQldPawlgCAKFWhOgfPIk1VDlF9OWJk1BD~gjo6oEt9wggEdatr-FJ2WyHvpSKf-Ut5FrL8UGfZa8Xwzu~2zdg__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ`));

    const [playing, setPlaying] = useState(true);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
            playing ? audio.play() : audio.pause();
        },
        [playing]
    );

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);

    return [playing, toggle];
};

const Music = ({url}) => {
    const [playing, toggle] = useAudio(url);

    return (
        // <div>
        //     <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
        // </div>
        <>
            <div className="items-end fixed z-50"
            >
                <div className="my-6 ml-2 mx-auto ">
                    {/*content*/}
                    <div className="border-0 rounded-full shadow-lg relative flex flex-col bg-white mb-2">
                        {/*header*/}
                        <div className="flex items-start justify-between p-2 ">
                            <button
                                onClick={toggle}
                                className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            >
                                {playing ?
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
                                         fill="currentColor">
                                        <path fillRule="evenodd"
                                              d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z"
                                              clipRule="evenodd"/>
                                    </svg> :
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
                                         fill="currentColor">
                                        <path fillRule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                              clipRule="evenodd"/>
                                    </svg>}

                            </button>

                        </div>
                        {/*body*/}
                    </div>
                </div>

            </div>
            {/*<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>*/}
        </>
    );
};

export default Music;