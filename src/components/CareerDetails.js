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
                                    <div class="item">Design products for mobile & web platforms</div>
                                    <div class="item">Convert business requirements into pixel perfect designs</div>
                                    <div class="item">Design the UI/UX prototypes for web and mobile applications.</div>
                                    <div class="item">Design graphics requirements eg banners, posters etc</div>
                                    <div class="item">Debug web applications</div>
                                    <div class="item">Develop web application fromscratch</div>
                                </div>
                            </div>
                            <div className="content-sm">
                                <h1 className="header">IT Consultant (NYSC)</h1>
                                <p className="paragraph" style={{ fontStyle: 'italic' }}>OHOS, Anambra State Secretariat, Awka, Anambra State<i class="calendar alternate icon career-icon" ></i><span className="career-span">Feb – Dec '18</span></p>
                                <div class="ui bulleted list paragraph">
                                    <div class="item">I worked with the Director, PSO of the Head of Service in providing a lasting management solution .</div>
                                    <div class="item">I created a Civil Servant Management System using Bootstrap, Javascript, JQuery, vanilla PHP and MySQL</div>
                                    <div class="item">I created an efficient Retrieval solution for their civil servant  nominal roles.</div>
                                    <div class="item">I created a Property Management System as a side project using Bootstrap, Javascript, JQuery, vanilla PHP and MySQL.</div>
                                </div>
                            </div>
                            <div className="content-sm">
                                <h1 className="header">Web Developer/Graphics Designer</h1>
                                <p className="paragraph" style={{ fontStyle: 'italic' }}>Startboard Studio, Ajao Estate, Lagos State.<i class="calendar alternate icon career-icon" ></i><span className="career-span">Apr – Aug '17</span></p>
                                <div class="ui bulleted list paragraph">
                                    <div class="item">Lead a team of two to conceptualized the quickest but most effective SDLC</div>
                                    <div class="item">Built fully functional websites which exceeded customers expectation. Using CMS and bootstrap</div>
                                    <div class="item">Created  a customized CMSs for customers who required a more personal touch</div>
                                    <div class="item">Created graphics for website Using adobe illustrator </div>
                                    <div class="item">Ensure creativity in every project since it was one of the core values of the company</div>
                                </div>
                            </div>
                            <div className="content-sm">
                                <h1 className="header">Front End Developer (Internship)</h1>
                                <p className="paragraph" style={{ fontStyle: 'italic' }}>Exolve Technologies, Yaba, Lagos State.<i class="calendar alternate icon career-icon" ></i><span className="career-span">Sept – Dec '16</span></p>
                                <div class="ui bulleted list paragraph">
                                    <div class="item">Designed User Interfaces for website using Adobe Illustrstor</div>
                                    <div class="item">Designed mock ups and wireframes for website</div>
                                    <div class="item">Designed and develop fully functional website using CMS and bootstrap</div>
                                    <div class="item">Designed graphics for projects. Using Adobe Illustrator</div>
                                    <div class="item">Got a brief introduction to 2D Animation Creation</div>
                                </div>
                            </div>
                            <div className="content-sm">
                                <h1 className="header">Programmer (Internship)</h1>
                                <p className="paragraph" style={{ fontStyle: 'italic' }}>TNS RMS, Ojodu-Berger, Lagos State<i class="calendar alternate icon career-icon" ></i><span className="career-span">Apr – June '13</span></p>
                                <div class="ui bulleted list paragraph">
                                    <div class="item">I debugged codes for syntax and logical errors ensuring smooth daily operations.</div>
                                    <div class="item">I filled in questionnaire/survey forms accurately increasing the efficiency and reliability of the organization</div>
                                    <div class="item">I assist the programming team in writing quality and optimal codes making sure we are always on point.</div>
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