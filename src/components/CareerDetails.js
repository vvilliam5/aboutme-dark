import React from 'react';
import '../css/careerDetails.css';

class CareerDetails extends React.Component {
    render() {
        return (
            <div className="dark-bg">
                <div className="ui container">
                    <div className="ui grid career-content">
                        <div className="five wide column">
                            <h1 className="header"><span className="underline">Education</span></h1>
                        </div>
                        <div className="eleven wide column">
                            <h1 className="header"> Babcock University</h1>
                            <p className="paragraph" style={{ fontStyle: 'italic' }}>Bachelors of Science, Computer Science<i class="calendar alternate icon career-icon" ></i><span className="career-span">June 2017</span></p>
                            <p className="paragraph-sm">Got to learn all the basics of Computer Science, Operatings Systems, Data Structures and Algorithms,
                            Software Engineering, Web Design, Hardware Sytems, Oracle SQL, Network and telecommunications, Linux system
                            adminstration and a whole bunch of other related stuffs (a very long list). I also got my first taste of programming
                        with an introduction to Java and C++. Funny enough i even took a course in Accounting</p>
                        </div>
                    </div>
                    <div class="ui horizontal divider">.</div>
                    <div className="ui grid content">
                        <div className="five wide column">
                            <h1 className="header"><span className="underline">Career</span></h1>
                        </div>
                        <div className="eleven wide column">
                            <div>
                                <h1 className="header">Full Stack Developer,  UI /UX Designer</h1>
                                <p className="paragraph" style={{ fontStyle: 'italic' }}>Mojec International, Apapa-Oshodi Expressway, Lagos State<i class="calendar alternate icon career-icon" ></i><span className="career-span">Feb - Sept '19</span></p>
                                <div class="ui bulleted list paragraph">
                                    <div class="item">Developed and maintained resful APIs using AJAX with average response time of 550ms</div>
                                    <div class="item">Maintained and optimized an extensive code base and versioned controlled using git and github</div>
                                    <div class="item">Developed an automated Customer Complaint System using adonisjs and reactjs reducing agitated customers law suits by over 90%</div>
                                    <div class="item">Converted business requirements into pixel perfect designs using Invision, Adobe Illustrator and XD</div>
                                    <div class="item">Design the UI/UX prototypes for web and mobile applications.</div>
                                    <div class="item">Debug and optimize code base using  breakpoints in google dev tools</div>
                                    <div class="item">Wrote numerous test suites using mocha to automate the testing of various meter unit number cross referencing with the pairing number</div>
                                </div>
                            </div>
                            <div className="content-sm">
                                <h1 className="header">IT Consultant (NYSC)</h1>
                                <p className="paragraph" style={{ fontStyle: 'italic' }}>OHOS, Anambra State Secretariat, Awka, Anambra State<i class="calendar alternate icon career-icon" ></i><span className="career-span">Feb – Dec '18</span></p>
                                <div class="ui bulleted list paragraph">
                                    <div class="item">Wrote automated test scripts using mocha and chai to optimize records Retrieval system reducing the errors for Retrieval(er) to 0%</div>
                                    <div class="item">Developed a Civil Servant Management System using Bootstrap, Javascript, JQuery, vanilla PHP and MySQL</div>
                                    <div class="item">Developed an efficient Retrieval solution for their civil servant  nominal roles.</div>
                                    <div class="item">Developed a Property Management System using Bootstrap, Javascript, JQuery, vanilla PHP and MySQL.</div>
                                </div>
                            </div>
                            <div className="content-sm">
                                <h1 className="header">Web Developer/Graphics Designer</h1>
                                <p className="paragraph" style={{ fontStyle: 'italic' }}>Startboard Studio, Ajao Estate, Lagos State.<i class="calendar alternate icon career-icon" ></i><span className="career-span">Apr – Aug '17</span></p>
                                <div class="ui bulleted list paragraph">
                                    <div class="item">Mentored a team of two, using Agile Methodologies and scrums to drive home the importance of customer satisfaction</div>
                                    <div class="item">Built fully functional websites using bootstrap and laravel powering a robust CMS that gives the user full control over the UI of the website</div>
                                    <div class="item">Developed a customized CMSs using adonisjs and nodejs to reduce load times and optimize for Search engine optimization</div>
                                    <div class="item">Prompt delivery of mock ups and wireframes for website design using inVision </div>
                                    <div class="item">Enforced Company values of delivering and exceeding customers expectations regarding every deliverables</div>
                                </div>
                            </div>
                            <div className="content-sm">
                                <h1 className="header">Front End Developer (Internship)</h1>
                                <p className="paragraph" style={{ fontStyle: 'italic' }}>Exolve Technologies, Yaba, Lagos State.<i class="calendar alternate icon career-icon" ></i><span className="career-span">Sept – Dec '16</span></p>
                                <div class="ui bulleted list paragraph">
                                    <div class="item">Projected and Illustrated beautiful User Interfaces for website using Adobe Illustrstor</div>
                                    <div class="item">Prompt delivery of mock ups and wireframes for website design using inVision</div>
                                    <div class="item">Prototyped and develop fully functional website using bootstrap and CMS</div>
                                    <div class="item">Designed pixel perfect print graphics for using Adobe Illustrator</div>
                                    <div class="item">Designed and prototyped character models using Adobe Character Animator</div>
                                </div>
                            </div>
                            <div className="content-sm">
                                <h1 className="header">Programmer (Internship)</h1>
                                <p className="paragraph" style={{ fontStyle: 'italic' }}>TNS RMS, Ojodu-Berger, Lagos State<i class="calendar alternate icon career-icon" ></i><span className="career-span">Apr – June '13</span></p>
                                <div class="ui bulleted list paragraph">
                                    <div class="item"> Debugged logic and runtime errors using Netbeans to ensuring error free code base</div>
                                    <div class="item">Designed questionnaire/survey forms to automate otherwise tedious repititive interactions with customer, drastically freeing up available man ppower</div>
                                    <div class="item">Pair programmed with other developers in ensuring they follow all recommended coding standards</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CareerDetails;