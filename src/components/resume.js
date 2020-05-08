import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Image from '../image.png';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={Image}
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '0.5em'}}>Akshay Chauhan</h2>
            <h4 style={{color: 'grey'}}>Full Stack Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I am Akshay Chauhan experienced web developer and have worked on different technology such HTML5,CSS3 , Boostrap4 ,Javascript,React-js,Gatsby.I have certification of .NET Technology & Cross Platform Application Development.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Borivali-East, Mumbai-400066</p>
            <h5>Phone</h5>
            <p>(+91) 1234567892</p>
            <h5>Email</h5>
            <p>akshaychauhan2111@gmail.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2018}
              endYear={2021}
              schoolName="THAKUR COLLEGE OF ENGINEERING AND TECHNOLOGY"
              schoolDescription="BACHELOR OF INFORMATION TECHNOLOGY"
              board="Mumbai University"
              percentage="C.G.P.A : 9.86"
               />

                  <Education
                    startYear={2016}
                    endYear={2018}
                    schoolName="THAKUR POLYTECHNIC"
                    schoolDescription="DIPLOMA IN INFORMATION TECHNOLOGY"
                    board="MAHARASHTRA STATE BOARD OF TECHNICAL EDUCATION"
                    percentage="Percentage : 86"
                     />

                     <Education
                       startYear={2005}
                       endYear={2015}
                       schoolName="ST. XAVIER'S HIGH SCHOOL"
                       schoolDescription="MAHARASHTRA BOARD SSC"
                       percentage="Percentage : 76"
                        />


                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Internship</h2>

            <Experience
              startMonth={"June "}
              startYear={2019}
              endMonth={"July "}
              endYear={2019}
              jobName="Tech Intern"
              companyName="TEAMUPRIGHT PVT. LTD."
              jobDescription="I designed different chat bots which provides feedback to user based on there actions. I have designed Bots for banking system which was associated with Google Assistant."
              />

              <Experience
                startMonth={"June "}
                startYear={2017}
                endMonth={"July "}
                endYear={2017}
                jobName="Training"
                companyName="DIPLOMADS PROFESSIONAL SERVICES PVT. LTD."
                jobDescription="I have created project using Asp .Net and created Cross Platform Application Development."
                />

              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Certification</h2>

              <Skills
                certiName="Career Edge - Knockdown the Lockdown : TCS"
                />
              <Skills
                certiName="Artificial Intelligence : Accenture"
                url="https://www.futurelearn.com/certificates/o54bvjv"
                />
                <Skills
                  certiName="Creating a great user experience for mobile apps : University of Leads"
                  url="https://www.futurelearn.com/certificates/o54bvjv"
                  />
                  <Skills
                    certiName=".NET Technology & Cross Platform Application Development : Diplomads Professional Services"
                    url="https://www.futurelearn.com/certificates/o54bvjv"
                    />
                <Skills
                  certiName="Basic's of Ethical Hacking : Udemy"
                  url="https://www.udemy.com/certificate/UC-FNZSAJNK/"
                  />
                  <Skills
                    certiName="Build Undetectable Malware Using C Language : Udemy"
                    url="https://www.udemy.com/certificate/UC-55889b1e-e640-41e7-a58f-6c527cbdd27a/"
                    />
                  <Skills
                    certiName="Design Beautiful Animated Websites Fast 2020 : Udemy"
                    url="https://www.udemy.com/certificate/UC-ba14fda9-b486-466e-b4d0-29e905565a08/"
                    />
                    <Skills
                      certiName="JavaScript for absolute beginners : Udemy"
                      url="https://www.udemy.com/certificate/UC-caaa03d1-5275-489c-a580-d76e81036815/"
                      />
                  <Skills
                    certiName="Build a game using Java : Eduonix"
                    url="https://www.eduonix.com/certificate/33c61b59fb"
                    />

                      <Skills
                        certiName="Ipython : Spoken Tutorial"
                        />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
