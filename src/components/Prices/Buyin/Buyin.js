import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { database } from '../../../firebaseConfig'; // Import your Firebase database instance
import { app } from '../../../firebaseConfig';
// import { push, ref, query, orderByChild, equalTo, get } from 'firebase/database';
import { getFirestore, collection, addDoc } from 'firebase/firestore'; // Import Firestore functions
// import { database } from '../../../firebaseConfig';
import {useLocation} from 'react-router-dom';
import './Buyin.css';

const Buyin = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [company, setCompany] = useState('');
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null); 
    const [paymentStatus, setPaymentStatus] = useState(null);
    const location = useLocation();
    const db = getFirestore(app);
    

    const price=location.state.price;
    const service_name=location.state.service_name;
    const key=location.state.key;
    // console.log(service_name);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get(`http://localhost:5000/posting_data`);
    //             setData(response.data);
    //         } catch (error) {
    //             console.error("Error fetching data:", error);
    //             setError("Failed to load payment data."); 
    //         } finally {
    //             setIsLoading(false);
    //         }
    //     };

    //     fetchData();
    // },[]);






    const handleSubmit = async (e) => {
        e.preventDefault();

        var options = {
            key: key, // key_secret removed
            amount:price * 100,
            currency: "INR",
            name: "Gleefiy_PROJECTS",
            description: "for testing purpose",
            handler: async function (response) {
                try {
                    console.log("Razorpay Response:", response);

                    if (response && response.razorpay_payment_id) {
                        setPaymentStatus("success");
                        console.log("Payment ID:", response.razorpay_payment_id);
                        const newCustomer = {
                            name,
                            email,
                            contact,
                            company,
                            payment_id: response.razorpay_payment_id,
                            price,
                            service_name, // This is the crucial addition
                        };
                
                        try {
                            // Get a reference to the 'customers' node in your database
                            

                            // const customersRef = ref(database, 'customers');


                            // const nameQuery = query(customersRef, orderByChild('payment_id'), equalTo(response.razorpay_payment_id));
                            // const snapshot = await get(nameQuery);

                            // if (snapshot.exists()) {
                            //     alert('A customer with this name already exists.');
                            //     return; // Stop submission
                            // }
                            // Push the new customer data to the database, generating a unique 
                            

                            // await push(customersRef, newCustomer);

                            const customersCollection = collection(db, 'customers'); // Reference to the 'customers' collection
                            await addDoc(customersCollection, newCustomer);
                
                            // Clear the form after successful submission
                            setName('');
                            setEmail('');
                            setContact('');
                            setCompany('');
                
                            alert('Data submitted successfully!'); // Or use a better notification system
                        } catch (error) {
                            console.error('Error submitting data:', error);
                            alert('Error submitting data. Please try again.'); // Improve error handling
                        }
                        // Backend verification logic should be handled on the server
                        // No fetch call here.

                    } else {
                        setPaymentStatus("failed");
                        console.error("Payment failed:", response);
                    }
                } catch (error) {
                    console.error("Error processing payment response:", error);
                    setPaymentStatus("error");
                }
            },
            prefill: {
                name: name,
                email: email,
                contact: contact,
            },
            notes: {
                address: "Razorpay Corporate office",
            },
            theme: {
                color: "#3399cc",
            },
        };
        var pay = new window.Razorpay(options);
        pay.open();
    };

    // if (isLoading) {
    //     return <p>Loading...</p>;
    // }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <section className="buyin-page"> {/* Added a wrapping section */}
            <div className="container">
                <h2 className="buyin-headline">Buy {service_name}</h2> {/* More descriptive heading */}
                <div className="buyin-content">
                    <div className="buyin-form"> {/* Form container */}
                        <h3>Enter Your Details</h3>
                        <form onSubmit={handleSubmit} className="buyin-email-form"> {/* More specific class name */}
                            <div className="form-group"> {/* Added form groups for better structure */}
                                <label htmlFor="name">Name:</label>
                                <input type="text" id="name" name="from_name" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required /> {/* Added required attribute */}
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="from_email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="contact">Contact:</label>
                                <input type="text" id="contact" name="from_contact" placeholder="Your Contact" value={contact} onChange={(e) => setContact(e.target.value)} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="company">Company:</label>
                                <input type="text" id="company" name="from_company" placeholder="Your Company" value={company} onChange={(e) => setCompany(e.target.value)} />
                            </div>
                            <button type="submit" className="buyin-submit"> {/* Styled button */}
                                Buy Now ({price} INR) {/* Display price on the button */}
                            </button>
                        </form>

                        {/* Payment Status Messages */}
                        {paymentStatus === "success" && <div className="alert alert-success">Payment Successful!</div>}
                        {paymentStatus === "failed" && <div className="alert alert-danger">Payment Failed. Please try again.</div>}
                        {paymentStatus === "error" && <div className="alert alert-danger">An error occurred.</div>}
                    </div>
                    {/* You can add a details section here if needed, similar to the Contact page */}
                     <div className="buyin-details">
                        <h3>Service Details</h3>
                        <p>Service Name: {service_name}</p>
                        <p>Price: {price} INR</p>
                        {/* Add more details as needed */}
                    </div> 
                </div>
            </div>
        </section>
    );
};

export default Buyin;