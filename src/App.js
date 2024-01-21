
//2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі
//https://rickandmortyapi.com/
//

import React from 'react';
import Rickandmorty from "./components/Rickandmorty";

const App = () => {
    return (
        <div>
            <Rickandmorty id={152} name={"Hammerhead Morty"} status={"unknown"} gender ={"Male"} species={"Humanoid"}
            image={"https://rickandmortyapi.com/api/character/avatar/152.jpeg"}/>
            <Rickandmorty id={410} name={"Two Brothers"} status={"Alive"} gender ={"Male"} species={"Human"}
                          image={"https://rickandmortyapi.com/api/character/avatar/410.jpeg"}/>
            <Rickandmorty id={414} name={"Trunkphobic guy"} status={"Alive"} gender ={"Male"} species={"Human"}
                          image={"https://rickandmortyapi.com/api/character/avatar/414.jpeg"}/>
            <Rickandmorty id={559} name={"Gramuflackian Anchorman"} status={"Dead"} gender ={"Male"} species={"Alien"}
                          image={"https://rickandmortyapi.com/api/character/avatar/559.jpeg"}/>
            <Rickandmorty id={632} name={"Train Cop"} status={"Dead"} gender ={"Male"} species={"Human"}
                          image={"https://rickandmortyapi.com/api/character/avatar/632.jpeg"}/>
            <Rickandmorty id={711} name={"When Wolf"} status={"Alive"} gender ={"Male"} species={"Humanoid"}
                          image={"https://rickandmortyapi.com/api/character/avatar/711.jpeg"}/>
        </div>
    );
};

export default App;