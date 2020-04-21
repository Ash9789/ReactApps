import React, {Component} from 'react';
import './Header.css';


 
class Header extends Component{


    constructor()
        {
            super()
            this.state={
                title: 'My React App',
                keywords:'Search For Language Description'
            }
        }


        inputChange(event){
            console.log(event.target.value)
            this.setState({keywords: event.target.value})
            this.props.newsSearch(event.target.value)
        }
    render()
    {
           return (
            <header>
                <div className="logo , centr"
                    onClick={()=>console.log("Clicked")}>
                        {this.state.title}
                 </div>
                <div  className="centr">
                    <input type="text" onChange={this.inputChange.bind(this)}/>
                    
                    </div>

                <p className="centr">{this.state.keywords}</p>
                <hr/>

                
            </header>
        )
    }
}


export default Header;

