import React from 'react';
import '../css/main.css'
import mojecmeters from '../img/projects/mojecmeters.png';
import csms from '../img/projects/csms.png';
import stockings from '../img/projects/stockings.png';

class Resume extends React.Component {
    render() {
        return (
            <div className="segment">
                <h1>Some Recent Projects</h1>
                <div class="segment">
                    <a href="https://mojecmeters.com" target="_blank"><button class="unit3 button" type="button"><img src={mojecmeters} class="skillset-img" /></button></a>
                    <a href="https://ohos-csms.herokuapp.com/" target="_blank"><button class="unit3 button" type="button"><img src={csms} class="skillset-img" /></button></a>
                    <a href="https://vvilliam5.github.io/stockings/" target="_blank"><button class="unit3 button" type="button"><img src={stockings} class="skillset-img" /></button></a>
                </div>
                <div className="segment">
                    <a href="https://github.com/vvilliam5" style={{ textDecoration: 'none' }} target="_blank"><button class="portfolio button" type="button"><i class="icon ion-md-lock"></i> I want to see more</button></a>
                </div>
            </div>
        )
    }
}

export default Resume;