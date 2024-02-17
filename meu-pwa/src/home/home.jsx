import "./home.css"
import List from "../list/list";
import { useState, useEffect } from "react";
const home = ()=>{
    const [item, setItem] = useState("");
    
    const handleChange = (event) => {
        setItem(event.target.value);
    };
    
    const handleClick = () => {
        if (item.trim() !== "") {
            const items = JSON.parse(localStorage.getItem("item")) || [];
            const updatedItems = [...items, item];
            localStorage.setItem("item", JSON.stringify(updatedItems));
            setItem(""); // Limpa o input após adicionar o item
        }
    };

    return (
        <>
            <div className="header">
                <img src="./public/512x512.png" alt="Logo" />
            </div>
            <h1 className="titulo">Bem vindo a sua lista</h1>

            <div className="center">
                <input type="text" name="add" id="add" value={item} onChange={handleChange} />
                <button className="button" onClick={handleClick}>Adicionar</button>
            </div>
            <List />
        </>
    );
}
export default home;