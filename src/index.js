import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import App from './App';


class App extends React.Component {
     render() {
       return(
         <div>
           <Header username="Marina"/>
           <Greeting />
         </div>
       )
     }
}

class Header extends React.Component{
    render() {
        return(
            <header>
                <h1>Welcome, {this.props.username}! How are you today?</h1>
            </header>
        )
    }
}

class Greeting extends Component{
    render() {
        let data = new Date();
        let hours = data.getHours();
        let timeOfDay;

        if(hours < 12) {
          timeOfDay = 'morning';
        }else if(hours >= 12 && hours < 17) {
          timeOfDay = 'afternoon';
        }else {
            timeOfDay = 'night';
        }

        return(
             <h1>Good {timeOfDay}, to you! </h1>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

 