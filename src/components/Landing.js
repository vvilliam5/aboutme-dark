import React from 'react';
import '../css/main.css';

class Landing extends React.Component {
    render() {
        return (
            <div className="segment landing-container">
                <h1>Hi There!</h1>
                <h6>I'm Williams, a Software Engineer and a huge liverpool fan. #YNWA</h6>
                <h6>With over <span className="emphasis">6 years</span> of experience in Software Engineering, I have had the opportunity to work across all phases of the Software Development
                    Lifecycle.</h6>
                <h6><span className="emphasis">Design - Frontend - Backend - DevOps</span></h6>
                <div className="segment">
                    <a href="https://www.behance.net/realwilliams" target="_blank" style={{ textDecoration: 'none' }}><button class="unit button" type="button"><i class="fa fa-behance fa-lg" aria-hidden="true"></i></button></a>
                    <a href="https://www.github.com/vvilliam5" target="_blank" style={{ textDecoration: 'none' }}><button class="unit button" type="button"><i class="fa fa-github" aria-hidden="true"></i></button></a>
                    <a href="https://www.linkedin.com/in/vvilliam5" target="_blank" style={{ textDecoration: 'none' }}><button class="unit button" type="button"><i class="fa fa-linkedin" aria-hidden="true"></i></button></a>
                    <a href="https://vvilliam5-blog.netlify.com/" target="_blank" style={{ textDecoration: 'none' }}><button class="unit button" type="button"><i class="fa fa-medium" aria-hidden="true"></i></button></a>
                </div>
            </div>
        )
    }
}

export default Landing;