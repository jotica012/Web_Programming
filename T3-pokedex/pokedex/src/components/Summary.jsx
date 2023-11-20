import { useEffect, useState } from "react"
import { getTypeItems } from "../utils/dynamicColors";
import { TypeChip } from "./TypeChip";

export const Summary = ({poke, onClick, bg1, bg2}) => {
  const [sprite, setSprite] = useState();

  useEffect(() => {
    if(poke){
      setSprite(poke.sprites.other["official-artwork"].front_default);
    }
  }, [poke])
  
  return(
    <div 
      className={poke ? "w-[90%] h-[60%] rounded-3xl flex justify-center" : "hidden" }
      style={
        {background: `linear-gradient(160deg, #${bg1} 40%, #${bg2} 60%)`}
      }
      onClick={onClick}
    > 
      <div className="w-1/2 flex items-center">
        <img src={sprite} className=""/>
      </div>
      <div className="w-1/2 flex flex-col ">
        <p className="text-[8vw] font-extrabold text-[#ffffff5c] ">
          {poke?.order > 0 && poke?.order < 10 && `#00${poke?.order}`}
          {poke?.order >= 10 && poke?.order < 100 && `#0${poke?.order}`}
          {poke?.order >= 100 && `#${poke?.order}`}
        </p>
        <p className="text-white text-[2.3vw] font-bold max-w-full capitalize">{poke?.name}</p>
        <div className="flex flex-col gap-4 w-fit pt-10">
          <TypeChip type={poke?.types[0]?.type.name} />
          {poke?.types[1] && <TypeChip type={poke?.types[1]?.type.name} />}
        </div>
      </div>
    </div>
  )
}