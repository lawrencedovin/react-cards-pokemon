import React, { useState, useEffect } from 'react';
import uuid from "uuid";
import axios from 'axios';

const useAxios = (url) => {

    const [state, setState] = useState([]);

    const addObject = async () => {
        const response = await axios.get(url);
        setState(objects => [...objects, {...response.data, id: uuid()}]);
    };

    return [state, addObject];


    // const [cards, addCard] = useAxios('https://deckofcardsapi.com/api/deck/new/draw/');
    // const [pokemon, addPokemon] = useAxios(`https://pokeapi.co/api/v2/pokemon/${name}/`);
    
//   const [pokemon, setPokemon] = useState([]);
//   const addPokemon = async name => {
//     const response = await axios.get(
//       `https://pokeapi.co/api/v2/pokemon/${name}/`
//     );
//     setPokemon(pokemon => [...pokemon, { ...response.data, id: uuid() }]);
//   };
}

export default useAxios;