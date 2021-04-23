import { withRouter } from 'react-router-dom';

function Otro(props) {
    console.log('OTRO', props);
    console.log(props.match.url);
    return <h2>Otro componente</h2>
}

export default withRouter(Otro);