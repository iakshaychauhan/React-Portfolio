import React, { Component } from 'react';
import { Grid, Cell, } from 'react-mdl';

class Skills extends Component {
  render() {
    return(
      <Grid>
      <Cell col={12}>

        <a href={this.props.url} rel="noopener noreferrer" target="_blank">
          <h5>{this.props.certiName}</h5>
        </a>
      </Cell>
      </Grid>
    )
  }
}

export default Skills;
