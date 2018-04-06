import React from 'react';
import { Link } from 'react-router-dom';

class Index extends React.Component {

  constructor(props){
    super(props)
  }
  componentDidMount() {

  }

  render(){

    return (
      <section className="room-index">
        <button className="chategory">Chategory</button>
        <div className="room-link">Link to Room</div>
        <div className="room-link">Link to Room</div>
      </section>
    );
  }
}

export default Index;
