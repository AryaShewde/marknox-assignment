import React from 'react'
import "./Contect.css"

const Contect = () => {
    return (
        <div>
            <div class="contact" id="contact">
                <div class="heading-contact">
                    <h1>Contact</h1>
                </div>
                <div class="main-contact">
                    <div>
                        <input type="text" placeholder="Enter your name" />
                        <input type="email" placeholder="Enter the email" />
                    </div>
                    <input type="text" placeholder="Title" />
                    <textarea id="" cols="30" rows="10" placeholder="Message"></textarea>
                    <button class="btn-contact">Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default Contect
