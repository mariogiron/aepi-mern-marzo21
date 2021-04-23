import Otro from "./Otro";

export default function Info(props) {
    console.log('INFO', props);

    function handleClick() {
        props.history.push('/about');
    }

    return (
        <>
            <h2>Componente Info</h2>
            <Otro />
            <button onClick={handleClick}>PULSA!!</button>
        </>);
}