
//1. Описати всю сім'ю сімпсонів (5 персонажів)

//2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі
//https://rickandmortyapi.com/
//    https://rickandmortyapi.com/api/character
//        Створити 6 персонажів

import React from 'react';
import Simpson from "./components/Simpson";

const App = () => {
    return (
        <div>
            <Simpson name={'Bart'} surname={"Simpson"} age={10}
                     photo={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'}/>

            <Simpson name={'Homer'} surname={"Simpson"} age={38}
                     photo={'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}/>
            <Simpson name={'Marge'} surname={"Simpson"} age={38}
                     photo={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}/>
            <Simpson name={'Lisa'} surname={"Simpson"} age={9}
                     photo={'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'}/>
            <Simpson name={'Bart'} surname={"Simpson"} age={1}
                     photo={'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'}/>
        </div>
    );
};

export default App;