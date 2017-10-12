import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Hello from './components/Hello';
import AdminContent from './components/AdminContent'

class App extends Component {
    constructor() {
        super();
        this.state = {
            name: 'React'
        };
    }

    render() {
        return (
            <div>
                <Hello name={this.state.name} />
                <p>
                    Start editing to see some magic happen :)
                </p>
                <AdminContent />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));