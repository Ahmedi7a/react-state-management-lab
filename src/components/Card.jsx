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
        <button onClick={()=>props.handleAddFighter(props.zombieFighter)}>Add</button>
        </li>
        </>
    )
}

export default Card