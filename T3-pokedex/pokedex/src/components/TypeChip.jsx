import { useEffect } from "react"
import { useState } from "react"
import { bugTypeIcon, darkTypeIcon, dragonTypeIcon, electricTypeIcon, fairyTypeIcon, fightTypeIcon, fireTypeIcon, flyingTypeIcon, ghostTypeIcon, grassTypeIcon, groundTypeIcon, iceTypeIcon, normalTypeIcon, poisonTypeIcon, psychicTypeIcon, rockTypeIcon, steelTypeIcon, waterTypeIcon } from "../assets/typeIcons"
import { getTypeItems } from "../utils/dynamicColors"

export const TypeChip = ({type}) => {

  const [img, setImg] = useState()
  const [bg, setBg] = useState('91C12F')
  

  useEffect(()=>{
    if(type){
      let typeProps = getTypeItems(type);
      setImg(typeProps.img);
      setBg(typeProps.bg);
    }
  },[type])
  
  return(
    <div className={`rounded-full px-2 py-1 font-medium flex items-center gap-2 border-solid border-2 border-white`} style={{backgroundColor: `#${bg}`}}>
      <img src={img} alt="-" className="bg-white rounded-full p-1 w-7"/>
      {type}
    </div>
  )
}