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
import aws_avatar from '../img/libraries_logos/aws.png';
import nginx_avatar from '../img/libraries_logos/nginx.png';
import '../css/main.css';

class SkillSet extends React.Component {
    render() {
        return (
            <div className="segment">
                <h1>Favorite Stacks</h1>
                <div class="segment">
                    <button class="unit2 button" type="button"><img src={redux_avatar} class="skillset-img" title="redux" /></button>
                    <button class="unit2 button" type="button"><img src={react_avatar} class="skillset-img" /></button>
                    <button class="unit2 button" type="button"><img src={aws_avatar} class="skillset-img" title="git/github" /></button>
                </div>
                <div class="segment">
                    <button class="unit2 button" type="button"><img src={rest_avatar} class="skillset-img" /></button>
                    <button class="unit2 button" type="button"><img src={express_avatar} class="skillset-img" /></button>
                    <button class="unit2 button" type="button"><img src={docker_avatar} class="skillset-img" title="docker" /></button>
                </div>
                <div class="segment">
                    <button class="unit2 button" type="button"><img src={nginx_avatar} class="skillset-img" /></button>
                    <button class="unit2 button" type="button"><img src={nodejs_avatar} class="skillset-img" /></button>
                    <button class="unit2 button" type="button"><img src={sql_avatar} class="skillset-img" title="sql/nosql" /></button>
                    <button class="unit2 button" type="button"><img src={mocha_avatar} class="skillset-img" /></button>
                </div>
            </div>
        )
    }
}

export default SkillSet;