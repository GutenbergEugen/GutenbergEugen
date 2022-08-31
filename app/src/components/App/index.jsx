import { useState } from "react"
import s from './style.module.sass';
import '../../style.sass';
import Form from '../Form'; 
import CardsContainer from '../CardsConteiner';
import { persons } from "../../data/person";


function App() {
  const [cards, setCards] = useState(persons);

  const addCard = (name, avatar) => setCards([
    ...cards, 
    {
      id: Date.now(),
      name,
      avatar,
      status: true
    }
  ]);

  const del = (id) => {setCards(cards.filter((elem) => elem.id !== id))};

  const doubleclick = (id) =>
		setCards(
			cards.map((card) => {
				card.id === id
					? (card.status = !card.status)
					: (card.status = card.status);
				return card;
			})
		);

  return (
    <div>
       <Form add={addCard}/> 
       <CardsContainer cards={cards} del={del} doubleclick={doubleclick}/>
       
    </div>
  );
}

export default App;