import React, { useState, useEffect } from 'react';

const useFlip = (initialState = true) => {
    const [state, setState] = useState(initialState);

    const flipCard = () => {
      setState(!state);
    };

    return [state, flipCard];
};

export default useFlip;