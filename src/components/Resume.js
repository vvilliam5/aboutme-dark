import React from 'react';
import '../css/resume.css';
import mojecmeters from '../img/projects/mojecmeters.png';
import csms from '../img/projects/csms.png';
import stockings from '../img/projects/stockings.png';

class Resume extends React.Component {
    render() {
        return (
            <div className="ui cnotainer pad-top box-dark-bg">
                <div className=" ui container sixteen column centered grid resume-bg">
                    <div className="container">
                        <h1 className="header pad-top white-text">Check out some awesome projects i've done</h1>
                        <a href="https://mojecmeters.com" target="_blank" className="ui medium rounded image project-img">
                            <img src={mojecmeters} />
                            <span className="project-text">Customer Order Management System</span>
                        </a>
                        <a href="https://vvilliam5.github.io/csms" target="_blank" className="ui medium rounded image project-img">
                            <img src={csms} />
                            <span className="project-text">Civil Servant Management System</span>
                        </a>
                        <a href="https://vvilliam5.github.io/stockings/" target="_blank" className="ui medium rounded image project-img">
                            <img src={stockings} />
                            <span className="project-text">Stockings - Free Stock Images</span>
                        </a>
                        <a href="https://github.com/vvilliam5"><button class="ui inverted blue massive fluid button">View More</button></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Resume;