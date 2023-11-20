import { Button, TextField } from "@mui/material";
import pokeball from "../assets/pokeball.png";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { MyContext } from "../utils/MyContext";


export const Login = () => {
  const navigate = useNavigate();
  const { pokemon, setPokemon } = useContext(MyContext);
  const [username, setUsername] = useState('')

  return(
    <body className="flex flex-col bg-[#060606]">
      <header className="flex justify-between bg-[#181818] h-[10%] items-center">
        <img src={pokeball} alt="pokeball" className="pl-14" />
        <img src="" alt="" />
      </header>
      <div className="flex h-[90%]">
        <div className=" flex flex-col gap-10 justify-center items-center w-full h-full">
          <p className="text-white text-2xl flex gap-10 items-center">Login to Pokedex<img src={pokeball} alt="pokeball" className="pl-14" /></p>
          <TextField 
            className="bg-[#4b4b4b] rounded-md w-[30%]"
            label="User"
            onChange={e => setUsername(e.target.value)}
          />
          <TextField
            className="bg-[#4b4b4b] rounded-md w-[30%]"
            type="password"
            label="Password"
          />
          <Button 
            className=" bg-[#173EA5] hover:bg-[#173EA599] w-[20%] rounded-full" 
            variant="contained"
            onClick={e => {
              navigate('/pokedex');
              setPokemon(username)
            }}
          >
            Log in
          </Button>
        </div>
      </div>
    </body>
  )
}