import PropTypes, {string} from "prop-types"

Champion.propTypes = {
  name: PropTypes.string,
  func: PropTypes.string,
  img: PropTypes.string,
  onRemove: PropTypes.func
}

export function Champion({name, func, img, onRemove}){
  return(
    <div>
      <img src={img} alt="Imagem do campeão" />
    <div>
      <h2>{name}</h2>
      <p>{func}</p>
      <button onClick={onRemove}>Remover</button>
    </div>
    </div>
  )
}