import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
    constructor(props) {
        // init to access to this
        super();

        // init local state 
        this.state = {
            name: 'Robin'
        }
        // bind methods
        this.updateName = this.updateName.bind(this);
    }

    updateName() {
        setTimeout(() => {
            this.setState({
                name: 'Robin ' + Math.random()
            })
        }, 1000);
    }

    // execute only once - when the component is already mounted
    componentDidMount() {
        // update name once - not re-render
        this.updateName();
    }

    render() {
        const buttonStyle = {
            backgroundColor: 'gray',
            border: '1px solid deeppink',
            color: 'white'
        };
        // *** call this.updateName() here will
        // re-render component many times

        return (
            <div className='Home'>
                <h1> Welcome { this.state.name }! </h1>
                <p>
                    Additional info: <a href="http://youtube.com/codejobs">Codejobs</a>
                </p>

                <button style={ buttonStyle }>
                    Show info
                </button>



            </div>
        )
    }
}

export default Home; 