import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Image from '../image.png';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Akshay Chauhan</h2>
            <img
              src={Image}
              alt="avatar"
              className="avatar-img"
              style={{height: '240px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>I am Akshay Chauhan an experience web developer and have worked on different technology such HTML5,CSS3 , Boostrap4 ,Javascript.I have certification of .NET Technology & Cross Platform Application Development</p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (+91) 123456789
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    akshaychauhan2111@gmail.com
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
