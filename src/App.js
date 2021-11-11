import React from 'react';
import axios from 'axios';
import FacebookLogin from 'react-facebook-login';
import { Event } from './data/Event';
import LoginIntroduction from './components/LoginIntroduction'
import UserInfo from './components/UserInfo';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      accessToken: "",
      loggedIn: false,
      loadedEvent: false,
      name: "",
      picUrl: "",
      event: new Event()
    };
  }

  responseFacebook = response => {
    try{
      this.setState({  
        accessToken: response.accessToken, 
        name: response.name,
        picUrl: response.picture.data.url,
        loggedIn: true
       });
    } catch(error){
      console.log(error);
      this.setState({
        loggedIn: false
      });
    }
  }

  getEvent(){
    const URL = "https://graph.facebook.com/v12.0/927464600939598/events?access_token=" + this.state.accessToken;
    axios.get(URL)
        .then(response => {
          // GET latest event (id, start_time, end_time, name)
          let tmp = response.data.data[0];
          console.log(tmp);
          let data = {id: tmp.id, startTime: tmp.start_time, endTime: tmp.end_time, name: tmp.name}
          this.setState({event: data})

        })
        .catch(error => {
          console.log(error);
          let data = {id: 0, startTime: 0, endTime: 0, name: "N/A"}
          this.setState({event: data})
        })    
  }

  componentDidUpdate(){
    if(this.state.loggedIn && !this.state.loadedEvent){
      this.getEvent();
      this.setState({ loadedEvent: true });
    }
  }

  render(){
    return (
      <div>
        {!this.state.loggedIn &&
          <div className="login-container">
            <LoginIntroduction/>

            <FacebookLogin
              appId="280084060693285" //test ID 280084060693285 app ID 247671653954750
              autoLoad={false}
              fields="name,email,picture"
              callback={this.responseFacebook} />
          </div>
        }
        
        {this.state.loggedIn && 
          <div>
            <UserInfo 
              name={this.state.name}
              picUrl={this.state.picUrl}/>
            
            <div>{this.state.event.name}</div>
            <div>{this.state.event.startTime}</div>
            <div>{ this.state.event.endTime}</div>
          </div>
        }
      </div>
    );
  }
}

export default App;
