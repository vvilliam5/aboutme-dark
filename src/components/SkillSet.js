import React from 'react';

import react_avatar from '../img/libraries_logos/react-logo.png';
import redux_avatar from '../img/libraries_logos/redux-logo.png';
import nodejs_avatar from '../img/libraries_logos/nodejs-logo.png';
import chai_avatar from '../img/libraries_logos/chai-logo.png';
import mocha_avatar from '../img/libraries_logos/mocha-logo.png';
import sql_avatar from '../img/libraries_logos/sql-logo.png';
import express_avatar from '../img/libraries_logos/express_js.png';
import docker_avatar from '../img/libraries_logos/docker_logo.png';
import rest_avatar from '../img/libraries_logos/rest-logo.png';
import git_avatar from '../img/libraries_logos/git-logo.png';

import '../css/skillSet.css';

class SkillSet extends React.Component {
    render() {
        return (
            <div className="field-container">
                <h1 className="field-header">My Starting Eleven Skillset</h1>
                <div className="ui container content-sm field">
                    <div class="ui link centered cards">
                        <div class="ui one column centered grid">
                            <div class="column">
                                <div class="ui card skills-card">
                                    <div class="image">
                                        <img src={react_avatar} />
                                    </div>
                                    <div class="content content-text">
                                        <div class="header">Reactjs</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ui link centered cards">
                        <div class="ui three column centered grid">
                            <div class="column">
                                <div class="ui card skills-card">
                                    <div class="image">
                                        <img src={redux_avatar} />
                                    </div>
                                    <div class="content content-text">
                                        <div class="header">Redux</div>
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <div class="ui card skills-card">
                                    <div class="image">
                                        <img src={git_avatar} />
                                    </div>
                                    <div class="content content-text">
                                        <div class="header">Git / Github</div>
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <div class="ui card skills-card">
                                    <div class="image">
                                        <img src={rest_avatar} />
                                    </div>
                                    <div class="content content-text">
                                        <div class="header">REST API</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ui link centered cards">
                        <div class="ui two column centered grid">
                            <div class="column">
                                <div class="ui card skills-card">
                                    <div class="image">
                                        <img src={express_avatar} />
                                    </div>
                                    <div class="content content-text">
                                        <div class="header">Expressjs</div>
                                    </div>
                                </div>
                            </div>
                            <div class="column">
                                <div class="ui card skills-card">
                                    <div class="image">
                                        <img src={docker_avatar} />
                                    </div>
                                    <div class="content content-text">
                                        <div class="header">Docker</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ui link centered cards">
                        <div class="ui four column centered grid pad-bottom">
                            <div class="column">
                                <div class="ui card skills-card">
                                    <div class="image">
                                        <img src={chai_avatar} />
                                    </div>
                                    <div class="content content-text">
                                        <div class="header">Chaijs</div>
                                    </div>
                                </div>
                            </div>
                            <div class="column">
                                <div class="ui card skills-card">
                                    <div class="image">
                                        <img src={nodejs_avatar} />
                                    </div>
                                    <div class="content content-text">
                                        <div class="header">Nodejs</div>
                                    </div>
                                </div>
                            </div>
                            <div class="column">
                                <div class="ui card skills-card">
                                    <div class="image">
                                        <img src={sql_avatar} />
                                    </div>
                                    <div class="content content-text">
                                        <div class="header">SQL</div>
                                    </div>
                                </div>
                            </div>
                            <div class="column">
                                <div class="ui card skills-card card-box">
                                    <div class="image">
                                        <img src={mocha_avatar} />
                                    </div>
                                    <div class="content content-text">
                                        <div class="header">Mochajs</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SkillSet;