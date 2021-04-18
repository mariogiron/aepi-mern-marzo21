import classes from './Test.module.css';

function Test() {

    let estilosParrafo = [classes.main, classes.border];

    return (
        <div>
            <p className={estilosParrafo.join(' ')}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, eveniet?</p>
            <button className={classes.border}>Pulsa</button>
        </div>
    );
}

export default Test;