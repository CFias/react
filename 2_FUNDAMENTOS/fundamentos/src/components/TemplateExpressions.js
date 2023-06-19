const TemplateExpressions = () => {
    const nome = "Cleidson Fias";
    const data = {
        age: 25,
        job: "Programmer",

    };

    return (
        <div>
            <h1>olá {nome}, tudo bem ?</h1>
            <p>Você atua como: {data.job}</p>
            <p>{4 + 4}</p>
            <p>{console.log("JSX React")}</p>
        </div>
    )

};

export default TemplateExpressions;