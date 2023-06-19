import {useState} from 'react'

const ListRender = () => {
    const [list] = useState(["Cleidson", "Everaldo", "Milena", "Celia"])

    const [users] = useState([
        { id: 12345, name: "Cleidson", age: 25 },
        { id: 23456, name: "Ramos", age: 25 },
        { id: 34567, name: "Fias", age: 25 },
        { id: 45678, name: "Milena Fias", age: 25 },
    ]);

  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name} - {user.age}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ListRender