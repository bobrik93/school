import React from 'react';
import './App.css';

/*   function App() {
    return (
        <div className="App">
            <div>
                <h3>What to learn</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    <li><input type="checkbox" checked={true}/> <span>HTML&CSS</span></li>
                    <li><input type="checkbox" checked={true}/> <span>JS</span></li>
                    <li><input type="checkbox" checked={false}/> <span>React</span></li>
                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
        </div>
    );
}       */

function App() {
    return (
        <div>
        <Star />
        <AccordionTitle />
        <AccordionBody />
        </div>
    );

}

function Star() {
    console.log( "Star rendering")
    return (
        <div>
        <div>star</div>
        <div>star</div>
        <div>star</div>
        </div>
    )
}

function AccordionTitle() {
    console.log( "AccardionTitle rendering")
    return <div>
        <h3>меню</h3>
    </div>
}

function AccordionBody() {
    console.log( "AccardionBody rendering")
    return <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
}

export default App;
