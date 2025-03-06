import {useEffect} from "react";

const Map = () => {
    const loadScript = (src, onLoad) => {
        const script = document.createElement("script");
        script.src = src;
        script.strategy = "beforeInteractive"
        script.async = true;
        document.head.appendChild(script);
        script.onload = onLoad;
    };

    const init = () => {
        const map = new window.ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [48.284219, 38.817179],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 12,
            //type: 'yandex#hybrid'
        });
        const placemark = new window.ymaps.Placemark([48.284219, 38.817179], {
            iconContent: 'Карьер ЛСК',
            balloonContent: 'пос. Ковыльное, ул. Пролетарская, 38'
        }, {
            preset: 'twirl#blueStretchyIcon'
        });
        map.controls
            //.add('mapTools')       // стандартные кнопки
            .add('typeSelector', {left: 5, top: 5})  // переключатель типа карты
            //.add('zoomControl')   // изменение масштаба
            //.add(new ymaps.control.ScaleLine())  // линейка масштаба
        /*.add(new ymaps.control.MiniMap({     // обзорная карта заданного типа
            type: 'yandex#publicMap'}))*/

        const polygon = new window.ymaps.Polygon([[
                [48.284445882, 38.805558086],
                [48.286112548, 38.805835864],
                [48.287501437, 38.808891420],
                [48.287501437, 38.811113642],
                [48.288612548, 38.813613642],
                [48.288334770, 38.820002531],
                [48.287779215, 38.822780309],
                [48.285001437, 38.823058087],
                [48.285556993, 38.817224753],
                [48.284168104, 38.808058086],
                [48.284445882, 38.805558086],
            ]],
            {},
            {
                fillColor: '#00ff0088',
                strokeColor: '#0000ff',
                strokeWidth: 5,
                strokeStyle: 'shortdash'
            }
        );

        map.geoObjects.add(polygon); // границы карьера

        map.geoObjects.add(placemark); // указатель на карте

        map.behaviors.enable('scrollZoom');

    };


    useEffect(() => {
        loadScript(`https://api-maps.yandex.ru/2.0-stable/?apikey=${import.meta.env.VITE_APY_KEY}&load=package.full&lang=ru-RU`, () => {
            window.ymaps.ready(init);
        });
    }, []);

    return (
        <div>
            {/*className отвечает за толщину рамки, ее цвет и закругления*/}
            <div id="map" className="map-block mx-10 border-8 border-gray-500 rounded-xl w-[600px] h-[400px]" />
        </div>
    )
}
export default Map



