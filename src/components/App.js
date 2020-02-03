import React, { Component } from 'react';

import Landing from './Landing';
import SkillSet from './SkillSet';
import Resume from './Resume';
class App extends Component {
    render() {
        return (
            <div className="ui fluid container">
                <Landing />
                <SkillSet />
                <Resume />
            </div>
        )
    }
}
export default App;