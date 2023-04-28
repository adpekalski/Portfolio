import * as React from 'react';
import { ContactUs } from './Contact_Form';
import { Email, PhoneAndroid, GitHub, ContentCopy, OpenInBrowser } from '@mui/icons-material';

export default function ContactSection(props) {
    const ifContact = props.isContact === 4 ? true : false;
    // console.log(ifContact);
    const [phoneCardClicked, phoneCardWasClicked] = React.useState(false);
    const phoneClickedOrNot = phoneCardClicked ? "copied-info bolder colorful" : "copied-info hidden";
    const [emailCardClicked, emailCardWasClicked] = React.useState(false);
    const emailClickedOrNot = emailCardClicked ? "copied-info bolder colorful" : "copied-info hidden";
    const [githubCardClicked, githubCardWasClicked] = React.useState(false);
    const githubClickedOrNot = githubCardClicked ? "copied-info bolder colorful" : "copied-info hidden";
    return (
        <div className="contact">

            <div className="page-title-box">
                <h1 className="page-title">Contact me</h1>
            </div>

            <div className="contact-icons">

                <div className='contact-card' onClick={() => {
                    navigator.clipboard.writeText("+48695811075");
                    phoneCardWasClicked(true);
                    setTimeout(() => {
                        phoneCardWasClicked(false);
                    }, 1500)

                }}>
                    <div className='contact-icon-field'>
                        <PhoneAndroid
                            className='single-contact-icon colorful'
                            sx={{ fontSize: 50 }}

                        />
                    </div>

                    <p className='card-text'>
                        +48 695 811 075
                        <ContentCopy
                            className='copy-icon colorful'
                            sx={{ fontSize: 16 }}
                        />
                    </p>
                    <p className={phoneClickedOrNot}>Copied</p>
                </div>

                <div className='contact-card' onClick={() => {
                    navigator.clipboard.writeText("adpekalski@gmail.com");
                    emailCardWasClicked(true);
                    setTimeout(() => {
                        emailCardWasClicked(false);
                    }, 1500)

                }}>
                    <div className='contact-icon-field'>
                        <Email
                            className='single-contact-icon colorful'
                            sx={{ fontSize: 50 }}
                        />
                    </div>

                    <p className='card-text'>
                        adpekalski@gmail.com
                        <ContentCopy
                            className='copy-icon colorful'
                            sx={{ fontSize: 16 }}
                        />
                    </p>

                    <p className={emailClickedOrNot}>Copied</p>
                </div>

                <div className='contact-card' onClick={() => {
                    githubCardWasClicked(true);
                    setTimeout(() => {
                        githubCardWasClicked(false);
                        // window.open("https://github.com/adpekalski");
                    }, 1500)
                    // window.location="https://github.com/adpekalski";
                    window.open("https://github.com/adpekalski");


                }}>
                    <div className='contact-icon-field'>
                        <GitHub
                            className='single-contact-icon colorful'
                            sx={{ fontSize: 50 }}

                        />
                    </div>
                    <p className="card-text">
                        Github Profile
                        <OpenInBrowser
                            className='copy-icon colorful'
                            sx={{ fontSize: 16 }}
                        />
                    </p>
                    <p className={githubClickedOrNot}>Redirecting</p>
                </div>
            </div>

            <p className='contact-text-field'>
                Write to me if you want to
                <span className='hire-me decorative colorful bolder'> hire me!</span>
            </p>
            <ContactUs 
                focus={ifContact}
            />

        </div>
    )
}