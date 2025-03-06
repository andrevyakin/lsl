import Map from "./Map.jsx";

const History = () => {

    return (
        <div id="history">
            <div className="grid grid-flow-col grid-rows-3 gap-4">
                <div className="row-span-3 pt-4">
                    <Map/>
                </div>
                <h1 className="col-span-2 pt-4">Lorem ipsum dolor sit amet.</h1>

                <p className="col-span-2 row-span-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
                    cum deserunt dolorem eaque esse eum incidunt mollitia nisi. Architecto eaque facilis iste,
                    laboriosam
                    numquam quibusdam soluta temporibus? Accusamus ad commodi distinctio ducimus fugit illum in ipsam
                    iusto
                    maxime minus molestiae nisi numquam perspiciatis porro, qui rem repellat repudiandae ullam vero?</p>
            </div>
        </div>
    )
}
export default History
