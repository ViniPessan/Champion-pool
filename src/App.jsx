import { Champion } from "./components/Champion"
import ChampionForm from "./components/ChampionForm"
import useChampCollection from "./hooks/useChampCollection"

export default function App(){

  const {champions, addChampion ,removeChampion} = useChampCollection()

  return(
    <div className="app">
      <h1>Champions pool</h1>
      <ChampionForm addChampion={addChampion}/>
      <div className="champions">
        {champions.length > 0
        ?
        champions.map((champion) => (
         <Champion
         key={champion.id}
         name={champion.name}
         func={champion.func}
         img={champion.img}
          onRemove={() => removeChampion(champion.id)}
         />))
         : (
          <h2>Parece que você não tem nenhuma campeão na pool, pratique mais!</h2>
         )}
      </div>
    </div>
  )
}