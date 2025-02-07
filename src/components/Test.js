// import React, { useRef, useState } from 'react';
// import { get, ref } from 'firebase/database';
// import { database } from '../firebaseConfig';
// import emailjs from 'emailjs-com';
// // import emailjs from 'emailjs/browser';

// function Test() {
//     const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Your EmailJS service ID, template ID, and public key
//     const serviceId = "service_k3u61fo"; // Replace with your service ID
//     const templateId = "template_odigmf5"; // Replace with your template ID
//     const publicKey = "DW_1F7xvjXyz9h32f"; // Replace with your public key

//     // Create an object that contains dynamic template params
//     const templateParams = {
//       from_name: name,
//       from_email: email,
//       to_name: "Web Wizard", // Or your desired recipient name
//       message: message,
//     };

//     // Send the email using EmailJS
//     emailjs.send(serviceId, templateId, templateParams, publicKey)
//       .then((response) => {
//         console.log('Email sent successfully!', response);
//         setName(''); // Clear the form fields after successful submission
//         setEmail('');
//         setMessage('');
//       })
//       .catch((error) => {
//         console.error('Error sending email:', error);
//       });
//   };

//     return (
//         <div>
//             <form onSubmit={handleSubmit} className="emailForm">
//       <input
//         type="text"
//         placeholder="Your Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <input
//         type="email"
//         placeholder="Your Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <textarea
//         cols="30"
//         rows="10"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//       >
//       </textarea>
//       <button type="submit">Send Email</button>
//     </form>
//         </div>
//     );
// }

// export default Test;



import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Test() {
    emailjs.init("DW_1F7xvjXyz9h32f"); // Initialize EmailJS with your public key

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceId = "service_k3u61fo";
        const templateId = "template_3eg3ghf";
        const publicKey = "DW_1F7xvjXyz9h32f";

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: "Web Wizard",
            message: message,
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response);
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="emailForm">
                <input type="text" name="from_name" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" name="from_email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <textarea name="message" cols="30" rows="10" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                <button type="submit">Send Email</button>
            </form>
        </div>
    );
}

export default Test;