import React, { useState } from 'react';
import useGlobalState from '../../globalState';
import './dataForm.css'



function DataForm() {
    let [state, setState] = useGlobalState();
    const [inputValue, setInputValue] = useState('');
    return (
        <div className="data-form">

            <input type='text' value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
            <button
                className="submit-btn"
                type='submit'
                onClick={() => {
                    let items = state.items;
                    items.push(inputValue);
                    setState({ items: items });
                    setInputValue('');
                }} > Add Item </button>
            <button
                className="submit-btn_color"
                type='submit'
                onClick={() => {
                    let colors = state.colors;
                    colors.push(inputValue);
                    setState({ colors });
                    setInputValue('');
                }} > Add Color </button>
        </div>
    )
}
export default DataForm;