import React from 'react';
import ParticlesBg from 'particles-bg';

// import { config } from '../helperFiles/particlesConfig';
import SocialIcons from './SocialIcons';
import '../css/landing.css';

class Landing extends React.Component {
    render() {
        return (
            <div className="landing">
                <div className="ui grid">
                    <div className="sixteen wide column">
                        <h1 className="main-header">Hi, I'm Williams</h1>
                        <p className="main-text">I am a Software Engineer based in Lagos, Nigeria, and a huge liverpool fan. #YNWA</p>
                        <p className="main-text">Whenever im not in the kitchen cooking up a new project with my special ingredient
                            <br /> - React, accompanied with the other 'orishirishis' like redux, node, express, SQL etc, i like to
                            <br /> unwind in the living room watching the Premier League</p>
                        <SocialIcons />
                    </div>
                </div>
                <ParticlesBg type="lines" bg={true} />
                {/* lines, thick, square */}
            </div>
        )
    }
}

export default Landing;