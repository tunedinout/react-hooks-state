import { useState, useEffect } from 'react';


function setState(newState) {
    this.state = { ...this.state, ...newState };
    let thisState = this.state;
    this.listeners.forEach((listener) => {
        listener(thisState);
    })
}

function useCustom() {

    const newListener = useState()[1];
    useEffect(() => {
        this.listeners.push(newListener);
    })

    return [this.state, this.setState];
}

function useStateHook(initialState) {
    // console.log(initialState);
    const state = { ...initialState }
    const store = { state: state, listeners: [] };
    
    store.setState = setState.bind(store);
    
    return useCustom.bind(store);
}


export default useStateHook;