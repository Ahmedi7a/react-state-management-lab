import { useState } from 'react'
import './App.css'
import Card from './components/Card';

function App() {

  const [zombieFighters, setZombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://loremflickr.com/320/240?random=1',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://loremflickr.com/320/240?random=2',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://loremflickr.com/320/240?random=3',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://loremflickr.com/320/240?random=4',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://loremflickr.com/320/240?random=5',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://loremflickr.com/320/240?random=6',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://loremflickr.com/320/240?random=7',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://loremflickr.com/320/240?random=8',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://loremflickr.com/320/240?random=9',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://loremflickr.com/320/240?random=10',
    },
  ]);

  const [team, SetTeam] = useState([])
  const [money, SetMoney] = useState(100)
  const [strength, setStrength] = useState(0)
  const [agility, setAgility] = useState(0)
  const [message,setMessage]=useState('')


  function handleAddFighter(fighter) {
    if (money >= fighter.price) {
      SetTeam([...team, fighter]);
      SetMoney(money - fighter.price);
      setStrength(strength + fighter.strength)
      setAgility(agility + fighter.agility)
    } else {
      setMessage("No enough money");
    }
  }

  function handleRemoveFighter(deletedF){
    console.log(deletedF)
    const filteredFighterArr = team.filter((tem) => {
      return tem.name !== deletedF.name
    })
    SetTeam(filteredFighterArr)
    SetMoney(money + deletedF.price);
    setStrength(strength - deletedF.strength)
    setAgility(agility - deletedF.agility)

  }

  return (
    <>
      <h1>Zombie Fighters</h1>
      <h2>Money: ${money}</h2>
      <h2>Team Strength: {strength}</h2>
      <h2>Team Agility: {agility}</h2>
      {message}
      <h3>Your Team:</h3>
      {team.length===0? "Add fighters to your team":""}
      <ul>
      {team.map((t)=>(
        <div>
            <li>
        <img src={t.img} alt="" />
        <h3>{t.name}</h3>
        <p>PRICE: ${t.price}</p>
        <p>STRENGTH: {t.strength}</p>
        <p>AGILITY: {t.agility}</p>
        </li>
        <button onClick={() => handleRemoveFighter(t)}>Delete</button>    
            </div>
      ))}
      </ul>
      <hr />       <hr />
      <ul>
      {zombieFighters.map(zombieFighter => (
        <Card
          zombieFighter={zombieFighter}
          img={zombieFighter.img}
          price={zombieFighter.price}
          strength={zombieFighter.strength}
          agility={zombieFighter.agility}
          name={zombieFighter.name}
          handleAddFighter={handleAddFighter}
        />
      ))}
      </ul>

    </>
  )
}

export default App
