import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <p>{this.props.startYear}  - {this.props.endYear}</p>
        </Cell>
        <Cell col={8}>
          <h4 style={{marginTop:'0px'}}>{this.props.schoolName}</h4>
          <p>{this.props.schoolDescription}</p>
          <p>{this.props.board}</p>
          <p>{this.props.percentage}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Education;
