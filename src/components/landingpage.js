import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Image from '../image.png';



class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>

            <img
              src={Image}
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Full Stack Developer </h1>
            <hr/>

           <p>HTML/CSS | Bootstrap | JavaScript | React | Gatsby | Django </p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/akshaychauhan21/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/iakshaychauhan" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Youtube */}
          <a href="https://www.instagram.com/iakshaychauhan/" rel="noopener noreferrer" target="_blank">
            <i class="fa fa-instagram" aria-hidden="true"></i>
          </a>

          <a href="https://www.facebook.com/people/Akshay-Chauhan/100035188912780" rel="noopener noreferrer" target="_blank">
            <i class="fa fa-facebook-official" aria-hidden="true"></i>
          </a>



        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
