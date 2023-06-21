import {useState} from 'react'

const ListRender = () => {
    const [list] = useState(["Cleidson", "Everaldo", "Milena", "Celia"]);

    const [users, setUsers] = useState([
        { id: 1, name: "Cleidson", age: 25 },
        { id: 2, name: "Ramos", age: 25 },
        { id: 3, name: "Fias", age: 25 },
        { id: 4, name: "Milena Fias", age: 25 },
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 5);

        setUsers((prevUsers) => {
            console.log(prevUsers);
            return prevUsers.filter((user) => randomNumber !== user.id);
        })
    }

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
        <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender