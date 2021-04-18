import { useEffect, useState } from 'react';

function Scroll() {

    const [currentScroll, setCurrentScroll] = useState(window.scrollY);

    useEffect(() => {
        function onScroll() {
            console.log('onScroll');
            setCurrentScroll(window.scrollY);
        }
        window.addEventListener('scroll', onScroll);

        return function cleanUp() {
            window.removeEventListener('scroll', onScroll);
        }
    });

    return (
        <div className="scroll">
            Scroll: {currentScroll}
        </div>
    );

}

export default Scroll;