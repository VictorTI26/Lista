import "./list.css"
import { useEffect, useState, useMemo } from "react"
const list = () => {
    const [arrayitems, setArrayitems] = useState([]);

    useEffect(() => {
        getList();
    }, []);

    const getList = () => {
        const items = JSON.parse(localStorage.getItem("item")) || [];
        setArrayitems(items);
    };

    return (
        <>
            <ul>
                {arrayitems.map((item, index) => (
                    <div className="component">
                        <li className="item" key={index}>{item}</li>
                        <p>2</p>
                        <button>deletar</button>
                    </div>
                ))}
            </ul>
        </>
    );
}
export default list;