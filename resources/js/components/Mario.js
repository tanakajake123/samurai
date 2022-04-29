import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Block from './Block';

function Mario() {

    const [coinCount, setCoinCount] = useState(0);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>


                        count = {coinCount}

                        <div className="row">
                           <div className="col">
                              <Block
                                 max="10"
                                 onBlockClicked={() => setCoinCount(coinCount+1)}
                                 />
                           </div>
                           <div className="col">
                              <Block
                                 max="1"
                                 onBlockClicked={() => setCoinCount(coinCount+1)}
                                 />
                           </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mario;

if (document.getElementById('mario')) {
    ReactDOM.render(<Mario />, document.getElementById('mario'));
}
