import Card from "./Card"
import './App.css'

function App() {
  
  const userData={
    name:"amit",
    age:21,
  }

  return (
    <>
        <p>hello</p>
        <Card userName="chaudhary" userData={userData} btnTxt="Ping me"/>
        <Card userName="Kumar" ></Card>
    </>
  )
}

export default App
