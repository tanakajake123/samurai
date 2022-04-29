import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Sample from './Sample';

function Example() {
    const name = "Yamada";
    const year = 2022;
    const element = <h1>Hello, {name}! ({year})</h1>;

    const [count, setCount] = useState(0);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        { element }

                        count = {count}

                        <Sample
                            title="test2"
                            btn="success"
                            count={count}
                            setCount={(c) => setCount(c)}
                        />
                        <Sample
                            title="test3"
                            btn="secondary"
                            count={count}
                            setCount={(c) => setCount(c)}
                        />

                        <div className="card-body">I'm an example component!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
