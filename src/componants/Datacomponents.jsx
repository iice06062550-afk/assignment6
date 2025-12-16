import { useState } from "react"

function Datacomponents() {
  const [data, setData] = useState([
    { id: 1, name: "กระปุก", gender: "หญิง" },
    { id: 2, name: "ไผ่", gender: "หญิง" }
  ])

  const [show, setShow] = useState(true)

  return (
    <>
      <h1>จำนวนประชากร {data.length}</h1>
      <button onClick={() => setShow(!show)}>
        {show ? "ซ่อน" : "แสดง"}
      </button>

      {show && (
        <ul>
          {data.map(item => (
            <li key={item.id}>
              {item.id} | {item.name} | ({item.gender})
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default Datacomponents
