import '../App.css'


function Card(props){
    return (
        <>
        <li>
        <img src={props.img} alt="" />
        <h3>{props.name}</h3>
        <p>PRICE: ${props.price}</p>
        <p>STRENGTH: {props.strength}</p>
        <p>AGILITY: {props.agility}</p>
        </li>
        <button onClick={()=>props.handleAddFighter(props.zombieFighter)}>Add</button>
        </>
    )
}

export default Card