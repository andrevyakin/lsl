import {useState, useEffect, useRef} from "react";
import {loadScript} from "../util/loadScript.js";
import {init} from "../util/init.js";
import logo from "../assets/checkpoint.jpg";
import {aboutCompany} from "../constants/aboutСompany.js";

const Way = () => {

    const [isLoaded, setIsLoaded] = useState(false);

    //Инициализация карты при создании окна
    useEffect(() => {
        loadScript(`https://api-maps.yandex.ru/2.0-stable/?apikey=${import.meta.env.VITE_APY_KEY}&load=package.full&lang=ru-RU`)
            .then(() => {
                window.ymaps.ready(init)
                setIsLoaded(true)
            })
            .catch(setIsLoaded(false))

    }, []);

    //привязка в div с текстом описания
    const heightDivText = useRef(null);

    //константа высоты карты
    const [heightMap, setHeightMap] = useState(null);

    //изменение высоты карты при измерении высоты текста
    const updateHeightMap = () => {
        if (heightDivText.current) setHeightMap(heightDivText.current.clientHeight);
    };

    //инициализация высоты карты при создании окна
    useEffect(() => {
        window.addEventListener("resize", updateHeightMap);
        setHeightMap(heightDivText.current.clientHeight);
        return () =>
            window.removeEventListener("resize", updateHeightMap);
    }, []);

    return (
        <div id="way">
            <div className="flex flex-wrap">
                <div className="w-1/2 p-10">
                    {isLoaded ? <div
                        className="bg-gradient-to-b from-[#00ede7] to-[#0057ff] rounded-xl p-1"
                    >
                        <div
                            id="map"
                            className="map-block"
                            /*высота карты. цифра - для ручной регулировки*/
                            style={{height: heightMap - 80}}
                        />
                    </div> : <div
                        className=" w-full justify-center items-center bg-gradient-to-b from-[#00ede7] to-[#0057ff] rounded-xl p-1 hidden lg:block"

                    >
                        <img className="h-full border-1 border-grad rounded-xl"
                             src={logo}
                             style={{height: heightMap - 80, maxHeight: 332, maxWidth: 1054}}
                             alt="Your Company"/>
                    </div>}
                </div>
                <div
                    className="w-1/2 p-10 h-fit"
                    ref={heightDivText}
                >
                    <h1 className="text-center text-[#0056fe] text-2xl font-medium tracking-wider leading-normal">О нас</h1>
                    {aboutCompany && aboutCompany.map((text, index) => (
                        <p key={index} className="text-md py-2 indent-8 text-black">
                            {text}
                        </p>
                    ))}
                </div>
            </div>

        </div>
    )
}
export default Way
