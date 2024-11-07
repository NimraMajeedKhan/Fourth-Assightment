 interface Tprops{
    name:string;
    age:number;
    rollno:number;
    class:string;
}

function Card(props : Tprops){
    return(
        <div className=" bg-yellow-300 w-52 border-2 border-black rounded ml-11 mt-5 ">
            <h1 className="font-bold">Student ID Card</h1>
        <h1>Name: {props.name}</h1>
        <h1>Age: {props.age}</h1>
        <h1>Roll No: {props.rollno}</h1>
        <h1>Class: {props.class}</h1>
       

        </div>
    )
}
export default Card