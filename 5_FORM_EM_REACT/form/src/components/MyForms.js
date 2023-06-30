import "./MyForms.css"

const MyForms = () => {
  return (
    <div className="container">
        <form>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeHolder="Digite seu nome aqui" />
            </div>
            <input type="submit" value="enviar" />
        </form>
    </div>
  )
}

export default MyForms