import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInpuValue] = useState('')
    const onInputChange = (e) => {
        setInpuValue(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault(); // previene el refresh de la pagina
        if (inputValue.trim().length <= 1) return;
        //setCategories( categories => [ inputValue, ...categories]);
        onNewCategory(inputValue.trim());
        setInpuValue('');
    };

    return (
        <form onSubmit={onSubmit}>
            <input type="text" 
             placeholder="Buscar Gifs"
             value={inputValue}
             onChange={ onInputChange }
            />
        </form>
    )   
};