import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './component/Header'
import NewsList from './component/LanguageList';
import JSON from './lang.json';



class App extends Component {
    constructor() {
        super()
        this.state = {
            news: JSON
        }
    }
    render() {
        console.log(this.state.news)
        return (
            <React.Fragment>
                <Header />
                <div className="world">
                    <p>Hello World!</p>
                </div>


                <NewsList langdata={this.state.news}> </NewsList>

            </React.Fragment>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'))