import React from 'react';
import  ReactDOM  from 'react-dom';

class App extends React.Component{
 constructor(props){
     super(props);
     this.state={latitude:null, errorMessage:''}
     window.navigator.geolocation.getCurrentPosition(
        (position)=>{this.setState({latitude:position.coords.latitude})},
        (error)=>this.setState({errorMessage: error.message})
          );
 }
    render(){
        if(this.state.latitude && !this.state.errorMessage){
            return <div>{this.state.latitude}</div>
        }
        if(!this.state.latitude && this.state.errorMessage){
            return <div>{this.state.errorMessage}</div>
        }

        else{
            return <div>Loding loacation data ...</div>
        }
    }
}
ReactDOM.render(<App/>, document.querySelector('#root'));

