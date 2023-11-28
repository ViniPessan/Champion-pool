import { useState } from "react"
import PropTypes from "prop-types"
import TextInput from "./TextInput"

ChampionForm.propTypes = {
  addChampion: PropTypes.func
}

export default function ChampionForm({addChampion}){
  const [name, setName] = useState("")
  const [func, setFunc] = useState("")
  const [img, setImg] = useState("")
  
  const handleSubmit = (ev) => {
    ev.preventDefault()
    addChampion({ name, func, img})
    setName("")
    setFunc("")
    setImg("")
  }

  return (
    <form onSubmit={handleSubmit}>
        <TextInput id="name" label="Campeão:" value={name} setValue={setName}/>
        <TextInput id="func" label="Função:" value={func} setValue={setFunc}/>        
        <TextInput id="img" label="Imagem do campeão(URL):" value={img} setValue={setImg}/>        
        <button type="submit">Adicionar a pool</button>
      </form>
  )
}