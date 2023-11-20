import { Card } from "../components/Card"
import pokeball from "../assets/pokeball.png";
import usericon from "../assets/user.svg";
import { useContext, useEffect, useState } from "react";
import { Summary } from "../components/Summary";
import { TextField } from "@mui/material";
import { DataModal } from "../components/DataModal";
import { getTypeItems } from "../utils/dynamicColors";
import useFetch from "../utils/useFetch";
import { MyContext } from "../utils/MyContext";

export const Pokedex = () => {
  
  // const [pokes, setPokes] = useState();
  const [pokes] = useFetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
  const [pokesBase, setPokesBase] = useState([]);
  const [scrollPositionY, setScrollPositionY] = useState(0);
  const [selectedPoke, setSelectedPoke] = useState();
  const [isSelected, setIsSelected] = useState(false);
  const [open, setOpen] = useState(false);
  const [bgColorPrimary, setBgColorPrimary] = useState();
  const [bgColorSecondary, setBgColorSecondary] = useState();

  const { pokemon, setPokemon } = useContext(MyContext);

  useEffect(() => {
    if(selectedPoke){
      let typeProps = getTypeItems(selectedPoke?.types[0]?.type.name);
      console.log(selectedPoke?.types[1]);
      if(selectedPoke?.types[1]) {
        let typePropsSecondary = getTypeItems(selectedPoke?.types[1]?.type.name);
        setBgColorSecondary(typePropsSecondary.bg);
      }else{
        setBgColorSecondary(`${typeProps.bg}44`)
      }
      setBgColorPrimary(typeProps.bg);
    }
  }, [selectedPoke])

  useEffect(() => {
    console.log(pokes);
    if(pokes){
      setPokesBase(pokes.results);
    }
  }, [pokes])

  const handleSearch = (e) => {
    let auxPkmn = [];
    console.log(parseInt(e.target.value));
    pokes.results.forEach(pkmn => {
      if(pkmn?.name?.toLowerCase().includes(e.target.value.toLowerCase())){
        auxPkmn.push(pkmn);
      }
    });
    setPokesBase(auxPkmn)
  }

  const fetchSelectedPokemon = (pkmn) => {
    fetch(pkmn.url).then(res => res.json()).then(res => setSelectedPoke(res))
  }

  return(
    <body className="flex flex-col bg-[#060606]">
      <header className="flex justify-between bg-[#181818] h-[10%] items-center">
        <img src={pokeball} alt="pokeball" className="pl-14" />
        <input
          className="border-0 bg-white rounded-full w-1/4 py-2 px-6"
          type="text"
          placeholder="🔎 Buscar Pokemon"
          onChange={handleSearch}
        />
        <p className="text-white text-center pr-14"><img src={usericon} alt=""/>{pokemon}</p>
        
      </header>
      <div className="flex h-[90%]">
        <main className="w-[60%] flex justify-center items-center">
          <Summary poke={selectedPoke} onClick={() => setOpen(true)} bg1={bgColorPrimary} bg2={bgColorSecondary}/>
        </main>
        <aside className="h-full w-[40%] overflow-y-scroll flex flex-col gap-5 items-end pr-[5%] snap-y">
          {pokes && pokesBase?.map((pkmn, i) => (
            <Card key={i} pokeUrl={pkmn.url} pos={scrollPositionY} onClick={() => fetchSelectedPokemon(pkmn)}/>
          ))}
        </aside>
      </div>
      <DataModal 
        open={open} 
        handleClose={() => {
          setOpen(false)
        }} 
        pokemon={selectedPoke}
        bg1={bgColorPrimary}
        bg2={bgColorSecondary}
      />
    </body>
  )
}