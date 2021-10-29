import React, { Component } from 'react';
import axios from 'axios';
import Nav from '../components/Nav';
import LoginBtn from '../components/LoginBtn';
//import Event from '../data/Event'


import '../assets/scss/pages/HomePage.scss';

class HomePage extends Component {
  constructor(props){
    super(props);

    this.state = {
      Event
    }
  }

  getEvent(){
    const URL = "https://graph.facebook.com/v12.0/927464600939598/events?access_token=EAADhQYz0dL4BAEiYFiZC1LoDOpSbn5aPtBCXve618xy6ZAdzcBZAVPWzqHyZBnFJOVGSFY6xcQAeWvxw3slUIZA7jbX07ETfB4UEGHiSSZACbLZBzZA8FZCfA7E2ps5m1tZBjcMwdsERjSZCJ85nJn6ub1JGA7yEeQfwZA1ayZBBA35mEReZA47Bb160h9ZAr1ZCR79ACZC35UaAYBcz1NRxsodeGhfqNuQNspTPQcFrtL1B1zBSWeztYlZAbuQ0mj";
    axios.get(URL)
        .then(response => {
          // GET latest event (id, start_time, end_time, name)
          this.setState({Event: response.data.data[0]})
        })
        .catch(error => {
          console.log(error);
          let data = {id: 0, startTime: 0, endTime: 0, name: "Hidden"}
          this.setState({Event: data})
        })    
  }

  componentDidMount(){
    this.getEvent();
  }

  render(){
    const { Event } = this.state;
    return (
      <div className="HomePage">
        <h1>HomePage</h1>
          <Nav/>
          <LoginBtn/>



          <div className="Event">
            {Event.start_time}
            {Event.end_time}
            {Event.name}
          </div>
      </div>
    );
  }
}
  
export default HomePage;