import "./MyForms.css"

const MyForms = () => {
  return (
    <div className="container">
      {/* 1 - criação de form */}
        <form>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeHolder="Digite seu nome aqui" />
            </div>
            {/* 2 - label envolvendo input */}
            <label>
              <span>E-mail</span>
              <input type="email" name="email" placeHolder="Digite aqui o seu e-mail" />
            </label>
            <input type="submit" value="enviar" />
        </form>
    </div>
  )
}

export default MyForms