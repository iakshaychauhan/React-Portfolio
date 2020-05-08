import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 : Hotel Managment Sytsem */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://pix10.agoda.net/hotelImages/110648/-1/2835bd843f58e3c99f9404f277183338.jpg?s=1024x768) center / cover'}} >Hotel Managment System</CardTitle>
            <CardText>
            The main purpose of the project is to build an application program to reduce the manual work for managing the Payments, Booking, Rooms, Services in a hotel.
            </CardText>
            <CardActions border>
              <div>
                  <a href="https://github.com/iakshaychauhan/Hotel-Management-System" rel="noopener noreferrer" target="_blank">
                  <Button colored>Github</Button>
                  </a>
              </div>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>

          {/* Project 2 : E-Learning System */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images.assetsdelivery.com/compings_v2/sn333g/sn333g1709/sn333g170900102.jpg) center / cover'}} >E-Learning System</CardTitle>
            <CardText>
            E-learning is an education via the Internet, network, or standalone computer. E-learning is basically the network-enabled convey of skills and knowledge. E-learning refers to using electronic applications and processes to learn
            </CardText>
            <CardActions border>
            <div>
                <a href="https://github.com/iakshaychauhan/E-Learning-System" rel="noopener noreferrer" target="_blank">
                <Button colored>Github</Button>
                </a>
            </div>
            </CardActions>

          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i1.wp.com/www.buyholdlong.com/wp-content/uploads/2017/01/portfolio-logo1.jpg?ssl=1) center / cover'}} >Simple Portfolio</CardTitle>
            <CardText>
            I am Akshay Chauhan an experience web developer and have worked on different technology such HTML5,CSS3 , Boostrap4 ,Javascript.
            </CardText>
            <CardActions border>
              <div>
                  <a href="https://github.com/iakshaychauhan/Portfolio" rel="noopener noreferrer" target="_blank">
                  <Button colored>Github</Button>
                  </a>
              </div>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>

        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.eesc.europa.eu/sites/default/files/images/covid_19.jpg) center / cover'}} >Covid19-Tracker</CardTitle>
          <CardText>
          Corona Virus is, unfortunately, spreading through the entire world. We can help to spread awareness by visualizing the data. The data is fetched from the API . This project  is created using the most modern JavaScript syntax.
          </CardText>
          <CardActions border>
          <div>
              <a href="https://github.com/iakshaychauhan/Covid-Tracker" rel="noopener noreferrer" target="_blank">
              <Button colored>Github</Button>
              </a>
              <a href="https://reactcovid19tracker.netlify.app" rel="noopener noreferrer" target="_blank">
              <Button colored>Live Demo</Button>
              </a>
          </div>
          </CardActions>
        </Card>


        </div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Bootstrap</Tab>
          <Tab>React</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
          </div>
)
}
}

export default Projects;
