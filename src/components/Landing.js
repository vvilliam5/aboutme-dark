import React from 'react';
import '../css/main.css';

class Landing extends React.Component {
    render() {
        return (
            <div className="segment landing-container">
                <h1>Hi There!</h1>
                <h6>I'm Williams, capacity of a Full Stack Engineer, preference for Frontend ( i love building aesthetic layouts )</h6>
                <h6>I've dedicated <span className="emphasis">6 years </span>of my life to mastering the art of Web Engineering, from prototyping and design to pixel perfect User Interfaces and intuitive, satisfying User Interfaces, and i loved every minute of it! I strongly believe theres something new to learn everyday, and i always reach out for that extra piece of knowledge</h6>
                <h6>Design - <span className="emphasis">Frontend</span> - Backend - DevOps</h6>
                <div className="segment">
                    <h5>Links to my Behance, GitHub, linkedin and Blog</h5>
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