// this autoFocus method after going to contact form is not working - check saved tabs

import * as React from 'react';
import emailjs from "@emailjs/browser";
import Button from "@mui/material/Button";

export const ContactUs = (props) => {
  const form = React.useRef();

  const [isFocused, setFocus] = React.useState(false);
  const [sendSuccess, checkSend] = React.useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const sendAck = document.querySelector(".send-ack");
    const nameInput = document.querySelector(".name-input");
    const mailInput = document.querySelector(".email-input");
    const messageInput = document.querySelector(".contact-textarea");

    if (nameInput.value.length === 0 || mailInput.value.length === 0 || messageInput.value.length === 0) {
      sendAck.innerHTML = "Please provide all relevant information (only company name is optional)";
      checkInputs();
    } else {
      emailjs.sendForm('service_ncuky5g', 'template_g0zsw77', form.current, 'utBqg64yKxtbRlhgU')
        .then((result) => {
          console.log(result.text);
          sendAck.innerHTML = "Message sent succesfully";
          checkInputs();
        }, (error) => {
          sendAck.innerHTML = error.text;
          checkInputs();
        });
    }
  }

  function checkInputs() {
    checkSend(true);
    setTimeout(() => {
      checkSend(false);
    }, 5000)
  }

  // console.log("jest " + props.focus);

  return (
    <div className='form-field'>
      <form ref={form} onSubmit={sendEmail}>
        {props.focus ? <input type="text" name="user_name" placeholder='Your name' className='name-input' autoFocus/> : <input type="text" name="user_name" placeholder='Your name' className='name-input' />}
        <input type="email" name="user_email" placeholder='Your e-mail address' className='email-input' />
        <input type="text" name="user_company" placeholder='Your company' />

        <div className={isFocused ? "message-field outlined" : "message-field"}>

          <textarea
            onFocus={() => {
              setFocus(true);
            }}
            onBlur={() => {
              setFocus(false);
            }}
            className="contact-textarea"
            id="messageText"
            name="message"
            rows="5"
            cols="60"
            placeholder='Please write your text here...'
          />

          <Button
            className="submit-button"
            variant="outlined"
            type='submit'
            value="Send"
          // disabled
          >
            Submit
          </Button>

          <Button
            className="clear-button"
            variant="outlined"
            onClick={() => {
              document.getElementById("messageText").value = "";
            }}
          >
            Clear
          </Button>

        </div>

      </form>
      <p className={sendSuccess ? "send-ack colorful bolder" : "send-ack display-none"}></p>
    </div>

  );
};
