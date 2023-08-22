const Events = () => {

    const handleMyEvent = (e) => {

        console.log(e);
        console.log("Clicou em mim!");
    }

    const RenderSomething = (x) => {
        if(x) {
            return <h1>Isso foi verdadeiro</h1>
        } else {
            return <h1>Isso não passsou pelo IF</h1>
        }
    };

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou!")}>Clique aqui também!</button>
            </div>
            <div>
                <button onClick={() => {
                    if(true) {
                        console.log("Isso não deveria existir =)")
                    }
                }}
                >
                    Clica aqui, por favor.
                </button>
            </div>
            {RenderSomething(true)}
            {RenderSomething(false)}
        </div>
    );
};

export default Events;