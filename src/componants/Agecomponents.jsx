import { useState } from "react"

function Agecomponents() {
  const name = "Natkamon"
  const [age, setAge] = useState(20)

  return (
    <>
      <h1>Say Hello!! = {name}</h1>
      <h3>อายุ = {age}</h3>
      <button onClick={() => setAge(age + 1)}>เพิ่ม</button>
      <button onClick={() => setAge(age - 1)}>ลด</button>
    </>
  )
}

export default Agecomponents
