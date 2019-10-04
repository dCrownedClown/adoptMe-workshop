import React from 'react';
import ReactDOM from 'react-dom';
import Pet from './Pet';

export default function App() {
    return (
        <div>
            <h1 id="something-important">Adopt Me!</h1>
            <Pet name="luna" animal="Dog" breed="Havanese" />
            <Pet name="pepper" animal="Bird" breed="Cockatiel" />
            <Pet name="doink" animal="Cat" breed="Mixed" />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));