import React from 'react';
import '../css/resume.css'

class Resume extends React.Component {
    render() {
        return (
            <div className="ui cnotainer pad-top box-dark-bg">
                <div className=" ui container sixteen column centered grid resume-bg">
                    <div className="">
                        <h1 className="header pad-top white-text">Check out some awesome projects ive work on</h1>
                        <a href="https://github.com/vvilliam5"><button class="ui inverted blue massive fluid button">Projects</button></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Resume;