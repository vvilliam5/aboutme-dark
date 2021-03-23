import React, { Component } from 'react';

import Landing from './Landing';
import SkillSet from './SkillSet';
import Resume from './Resume';
import Projects from './Projects'
class App extends Component {
    render() {
        return (
            <div className="ui fluid container">
                <Landing />
                <Projects />
                <Resume />
            </div>
        )
    }
}
export default App;