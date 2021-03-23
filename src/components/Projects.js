import React from 'react';
import prospa from '../img/projects/prospa.png'
import zetta from '../img/projects/zetta.png'
import rates from '../img/projects/rates.png'
import hank_admin from '../img/projects/hank_admin.png'
import bitcoin from '../img/projects/bitcoin.png'
import unsplash from '../img/projects/unsplash.png'
import giftcard from '../img/projects/giftcard.png'
import a2c from '../img/projects/a2c.png'

class Projects extends React.Component {
    render() {
        return (
            <div className="segment">
                <h1>Some projects i've built recently</h1>
                <div className='segment'>
                    <a href="https://prospa-server.herokuapp.com/" target="_blank"><button class="unit3" type="button"><img src={prospa} class="skillset-img" /></button></a>
                    <a href="https://zetta-hotel.herokuapp.com/" target="_blank"><button class="unit3" type="button"><img src={zetta} class="skillset-img" /></button></a>
                    <a href="https://mypatricia.co/rates" target="_blank"><button class="unit3" type="button"><img src={rates} class="skillset-img" /></button></a>
                    <a href="https://hank-admin-app.patriciadev.com/" target="_blank"><button class="unit3" type="button"><img src={hank_admin} class="skillset-img" /></button></a>
                    <a href="https://mypatricia.co/bitcoin" target="_blank"><button class="unit3" type="button"><img src={bitcoin} class="skillset-img" /></button></a>
                    <a href="https://cowrywise-unsplash-clone.herokuapp.com/" target="_blank"><button class="unit3" type="button"><img src={unsplash} class="skillset-img" /></button></a>
                    <a href="https://mypatricia.co/giftcard" target="_blank"><button class="unit3" type="button"><img src={giftcard} class="skillset-img" /></button></a>
                    <a href="https://mypatricia.co/airtime-to-cash" target="_blank"><button class="unit3" type="button"><img src={a2c} class="skillset-img" /></button></a>
                </div>
            </div>
        )
    }
}

export default Projects;