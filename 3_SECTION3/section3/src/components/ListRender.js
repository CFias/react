import {useState} from 'react'

const ListRender = () => {
    const [list] = useState(["Cleidson", "Everaldo", "Milena", "Celia"])

  return (
    <div>
        <ul>
            {list.map((item) => (
                <li>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default ListRender