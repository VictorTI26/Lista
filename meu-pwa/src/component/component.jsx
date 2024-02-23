import "./component.css"
const component = (props) => {
    return (
        <>
            <li className="item" key={props.key}>{props.item}</li>
            <p>{props.qtd}</p>
        </>
    );
}
export default component;
