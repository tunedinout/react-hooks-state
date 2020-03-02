import React from 'react';
import useStateHook from './useStateHook';

const initialState = {
    colors: ['red', 'green', 'yellow'],
    items: ['Keyboard', 'Touchpad'],
};
const useGlobalState = useStateHook(initialState);
console.log(useGlobalState)
export default useGlobalState;