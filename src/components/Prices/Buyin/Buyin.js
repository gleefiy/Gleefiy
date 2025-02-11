import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { database } from '../../../firebaseConfig'; // Import your Firebase database instance
import { push, ref, query, orderByChild, equalTo, get } from 'firebase/database';
import {useLocation} from 'react-router-dom';

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

    const price=location.state.price;
    const service_name=location.state.service_name;
    console.log(service_name);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/posting_data`);
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
                setError("Failed to load payment data."); 
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    },[]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        var options = {
            key: data.key, // key_secret removed
            amount: 100,
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
                            const customersRef = ref(database, 'customers');
                            // const nameQuery = query(customersRef, orderByChild('payment_id'), equalTo(response.razorpay_payment_id));
                            // const snapshot = await get(nameQuery);

                            // if (snapshot.exists()) {
                            //     alert('A customer with this name already exists.');
                            //     return; // Stop submission
                            // }
                            // Push the new customer data to the database, generating a unique key
                            await push(customersRef, newCustomer);
                
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

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="emailForm">
                <input type="text" name="from_name" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" name="from_email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" name="from_contact" placeholder="Your Contact" value={contact} onChange={(e) => setContact(e.target.value)} />
                <input type="text" name="from_company" placeholder="Your Company" value={company} onChange={(e) => setCompany(e.target.value)} />
                <button type="submit">
                    Send Email
                </button>
            </form>

            {paymentStatus === "success" && <div className="alert alert-success">Payment Successful!</div>}
            {paymentStatus === "failed" && <div className="alert alert-danger">Payment Failed. Please try again.</div>}
            {paymentStatus === "error" && <div className="alert alert-danger">An error occurred.</div>}
        </div>
    );
};

export default Buyin;