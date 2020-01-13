import React from 'react';

import williams from '../img/williams.png';
import '../css/profileDetails.css';

class ProfileDetails extends React.Component {
    render() {
        return (
            <div className="ws-bg">
                <div className="ui container">
                    <div className="ui grid">
                        <div className="five wide column profile-top">
                            <img className="ui fluid image" src={williams} />
                        </div>
                        <div className="eleven wide column profile-top">
                            <h3 className="ui block header summary header">Professional Summary</h3>
                            <div className="ui raised segment box-dark">
                                <a className="ui red ribbon label header" style={{ fontSize: 'small' }}>Overview</a>
                                <p className="paragraph"><br />6+ year experienced and meticulous Software Engineer with the dexterity for conceptualizing
                                 and  delivering elegant, durable and user-friendly solutions efficaciously and effectively. Possesses a track record of
                                  proferring and developing a fully functional Civil Servant Management System for the Anambra State Government .
                                  Armed with the knowledge and skills to make computers do awesome things</p>
                            </div>
                            <a href="https://drive.google.com/file/d/1YaSaNy0VxU5-WDYStned4TXKfDbXGqpd/view?usp=sharing"><button className="ui fluid linkedin button">View Resume</button></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileDetails;