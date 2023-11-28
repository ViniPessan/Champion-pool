import { useState } from "react"

export default function useChampCollection(){

  const [champions, setChampions] = useState(()=>{
    const storedChampions = localStorage.getItem("obc-champ-pool")
    if (!storedChampions) return []
    return JSON.parse(storedChampions)
  })
 
  
  const addChampion = ({name, func, img}) =>{
    const id = Math.floor(Math.random() * 100000000)
    const champion = {id, name, func, img}
    setChampions(state => { 
        const newState =  [...state, champion]
        localStorage.setItem("obc-champ-pool", JSON.stringify(newState))
        return newState
      })
  }
  
  const removeChampion = (id) => {
    setChampions(state => {
      const newState = state.filter(champion => champion.id !== id)
      localStorage.setItem("obc-champ-pool", JSON.stringify(newState))
      return newState
    })
  }
  
  return {champions, addChampion, removeChampion}
}