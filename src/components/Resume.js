import React from 'react';
import linkedin from '../img/projects/linkedin.png'

class Resume extends React.Component {
    render() {
        return (
            <div className="segment">
                <h1>Here's what i've been up to lately</h1>
                <div className='segment'>
                    <a href="https://www.linkedin.com/in/vvilliam5/detail/recent-activity/shares/" target="_blank"><button class="unit3" type="button"><img src={linkedin} class="skillset-img" /></button></a>
                </div>
            </div>
        )
    }
}

export default Resume;