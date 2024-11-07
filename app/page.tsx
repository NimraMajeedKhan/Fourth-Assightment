import Card from "./components/Card"
import style from "./page.module.css"


 export default function Home( ){
  return(
    <div>

      <Card name="Zainab" age={20} rollno={102304} class="Monday 2 to 5"  />
      <br /> 
      <Card name="Nadia" age={19} rollno={506708} class="Monday 2 to 5" />
      <br />
      <Card name="Manahil" age={18} rollno={901001} class="Monday 2 to 5"/>

    </div>
   


  )
 }
