import React, { Component } from 'react';

import Landing from './Landing';
import ProfileDetails from './ProfileDetails'
import CareerDetails from './CareerDetails';
import SkillSet from './SkillSet';
import Resume from './Resume';
import Footer from './Footer';

class App extends Component {
    render() {
        return (
            <div className="ui fluid container">
                <Landing />
                <ProfileDetails />
                <CareerDetails />
                <SkillSet />
                <Resume />
                <Footer />
            </div>
        )
    }
}
export default App;