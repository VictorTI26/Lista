import "./home.css";
import Component from "../component/component";
import { useEffect, useState } from "react";

const Home = () => {
    const [item, setItem] = useState("");
    const [quantidade, setQuantidade] = useState(0);
    const [arrayitems, setArrayitems] = useState([]);
    const [arrayQuantidades, setArrayQuantidades] = useState([]);

    useEffect(() => {
        getList();
    }, []);

    const getList = () => {
        const items = JSON.parse(localStorage.getItem("items")) || [];
        const quantidades = JSON.parse(localStorage.getItem("quantidades")) || [];
        setArrayitems(items);
        setArrayQuantidades(quantidades);
    };

    const handleChange = (event) => {
        setItem(event.target.value);
    };
    
    const handleClick = () => {
        if (item.trim() !== "") {
            const items = JSON.parse(localStorage.getItem("items")) || [];
            const updatedItems = [...items, item];

            const quantidades = JSON.parse(localStorage.getItem("quantidades")) || [];
            const updatedQuantidades = [...quantidades, quantidade];

            localStorage.setItem("items", JSON.stringify(updatedItems));
            localStorage.setItem("quantidades", JSON.stringify(updatedQuantidades));

            setArrayitems(updatedItems); 
            setArrayQuantidades(updatedQuantidades);
            
            setItem(""); 
            setQuantidade(0);
            
        }
    };

    const handleDeleteItem = (itemName) => {
        const updatedItems = arrayitems.filter(item => item !== itemName);
        const updatedQuantidades = arrayQuantidades.filter((item, index) => arrayitems[index] !== itemName);
        localStorage.setItem("items", JSON.stringify(updatedItems));
        localStorage.setItem("quantidades", JSON.stringify(updatedQuantidades));
        setArrayitems(updatedItems);
        setArrayQuantidades(updatedQuantidades);
    };

    const handleQtdChange = (event) => {
        setQuantidade(parseInt(event.target.value));
    };

    const handleMinus = () => {
        setQuantidade(quantidade - 1);
    };

    const handlePlus = () => {
        setQuantidade(quantidade + 1);
    };

    return (
        <>
            <div className="header">
                <img src="./public/512x512.png" alt="Logo" />
            </div>
            <h1 className="titulo">Bem vindo a sua lista</h1>

            <div className="center">
                <input type="text" name="add" id="add" value={item} onChange={handleChange} />
                <div onClick={handleMinus}>
                    <p className="negativo">-</p>
                </div>
                <input type="text" name="mais" id="btnAdicionar" value={quantidade} onChange={handleQtdChange}/>
                <div onClick={handlePlus}>
                    <p className="positivo">+</p>
                </div>
                <button className="button" onClick={handleClick}>Adicionar</button>
            </div>

            
                
            

            <ul className="div-component">
                {arrayitems.map((item, index) => (
                    <div className="component" key={index}>
                        <Component item={item} qtd={arrayQuantidades[index]} />
                        <button onClick={() => handleDeleteItem(item)}>Deletar</button>
                    </div>
                ))}
            </ul>
        </>
    );
};

export default Home;