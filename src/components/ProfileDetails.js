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
                                <p className="paragraph"><br />4+ year experienced and meticulous Full Stack Web Developer with the dexterity for conceptualizing
                                 and  delivering elegant , durable user-friendly solutions efficaciously and effectively. Possesses a track record of
                                  proferring and developing a fully functional Civil Servant Management System for the Anambra State Government .
                                  Armed with an extensive understanding of how to make computer do awesome things.  I am also heavlily involved
                                   in the world of graphics design, leading and collaboarating on a number of design projects, which can be found on
                                   my behance page</p>
                            </div>
                            <button className="ui fluid linkedin button">View Resume</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileDetails;