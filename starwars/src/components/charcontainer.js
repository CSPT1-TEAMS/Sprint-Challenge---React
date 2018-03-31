import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
CardTitle, CardSubtitle, Button} from 'reactstrap';
import PropTypes from "prop-types";
const Charcontainer = (props) => {





  return ( <div>
  <Card className="card">
    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
    <CardBody>
      <CardTitle>{props.character.name}</CardTitle>
      <CardSubtitle>{props.character.birth_year}</CardSubtitle>
      <CardText>
        
          <div className="charInfo" > Height: {props.character.height}</div >
          <div className="charInfo" > Mass: {props.character.mass}</div >
          <div className="charInfo" > Hair Color: {props.character.hair_color}</div >
          <div className="charInfo" >Skin Color: {props.character.skin_color}</div >
          <div className="charInfo" >Eye Color: {props.character.eye_color}</div >
        
      </CardText>
      
    </CardBody>
  </Card>
</div>

  )
Charcontainer.PropTypes = {
  name: PropTypes.string,
  mass: PropTypes.number
}


  
  // state = {
  //   charData: []
  // };


  // componentDidMount() {
  //   this.setState({ postData: dummyData });
  // }
  // render() {
  //   const { postData } = this.state;
    
  // }
}

export default Charcontainer;