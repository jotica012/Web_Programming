import { Dialog, DialogContent, DialogTitle } from "@mui/material"
import { useState } from "react"

export const DataModal = ({open, handleClose, pokemon, bg1, bg2}) => {
  const [stats, setStats] = useState([
    {name: 'hp', value: 0},
    {name: 'attack', value: 0},
    {name: 'defense', value: 0},
    {name: 'special-attack', value: 0},
    {name: 'special-defense', value: 0},
    {name: 'speed', value: 0},
  ])

  const barWidth = (value) => {
    return (value/255)*100
  }

  return(
    <Dialog 
      open={open} 
      onClose={handleClose} 
      maxWidth='xl'
    >
      <DialogContent 
        className="w-[60vw] h-[70vh] text-white p-10" 
        style={
          {background: `linear-gradient(160deg, #${bg1} 40%, #${bg2} 60%)`}
        }
      >
        <div className="h-full w-full flex flex-col">
          <div className="h-1/2 w-full flex">
            <div className="w-2/3 flex flex-col">
              <div className="text-[60px] font-extrabold">
                {pokemon?.order > 0 && pokemon?.order < 10 && `#00${pokemon?.order}`}
                {pokemon?.order >= 10 && pokemon?.order < 100 && `#0${pokemon?.order}`}
                {pokemon?.order >= 100 && `#${pokemon?.order}`}
              </div>
              <div className="text-[80px] leading-none capitalize">
                {pokemon?.name}
              </div>
              <div></div>
            </div>
            <div className="w-1/3">
              <img src={pokemon?.sprites.other["official-artwork"].front_default} />
            </div>
          </div>
          <div className="h-1/2 w-full px-[10%] flex gap-4 items-center justify-center">
            <div className="w-1/3">
              <div>HP</div>
              <div>Attack</div>
              <div>Defense</div>
              <div>Special Attack</div>
              <div>Special Defense</div>
              <div>Speed</div>
            </div>
            <div className="w-full">
              {pokemon && stats?.map((stat,i) => (
                <div key={i} className="flex w-full gap-4">
                  <div className="w-full flex">
                    <div className="bg-[#ffffffcc] h-5 rounded-l-lg" style={{width: barWidth(pokemon?.stats[i].base_stat)}}></div>
                    <div className="w-full bg-[#00000022] h-5 rounded-r-lg"></div>
                  </div>
                  {pokemon.stats[i].base_stat}
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}