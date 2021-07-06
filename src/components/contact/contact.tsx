import React, { useState } from 'react';
import Hr from '../layout/hr/hr';
import './contact.css';
import emailjs, { init } from 'emailjs-com';
import emailkey from '../../emailkey';
import Loader from '../layout/loader/loader';
init(emailkey.USER_ID);


const Contact: React.FC = () => {

    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState(false);

    function sendEmail(e: any) {
        e.preventDefault();
        setIsButtonClicked(true);

        emailjs.sendForm('service_sintal', emailkey.TEMPLATE_ID, e.target, emailkey.USER_ID)
            .then((result: any) => {
                setIsSubmitted(true);
                setErrors(false);
            }, (error: any) => {
                setIsButtonClicked(false);
                setIsSubmitted(false);
                setErrors(true);
                console.log(error.text);
            });
    }

    return (
        <div className="contact">
            <div className="form">
                <form onSubmit={sendEmail}>
                    <h1>לשירותך</h1>
                    <p className='contant-info'>
                        נייד: 054-771-5657 | אימייל: sassoontal@gmail.com
                    </p>
                    <Hr />
                    {!isSubmitted && !isButtonClicked &&
                        <div className="form-inputs">
                            <p className='form-info'>ספרו לי על האירוע שלכם כדי שנוכל להתחיל את התהליך</p>
                            {errors &&
                                <p className='error-message'>הטופס לא נשלח בהצלחה, אנא נסה שוב</p>
                            }
                            <label htmlFor="name">שם*</label>
                            <input type="text" name="customer_name" required />
                            <label htmlFor="email">אימייל*</label>
                            <input type="email" name="customer_email" required />
                            <label htmlFor="number">מספר טלפון*</label>
                            <input type="number" name="customer_phone" required />
                            <label htmlFor="order_details">פירוט הזמנה*</label>
                            <textarea name="order_details" required ></textarea>
                            <p className='required-hint'>*כל השדות חובה</p>
                            <button>שלח</button>
                        </div>
                    }
                    {!isSubmitted && isButtonClicked &&
                        <div className='form-load'>
                            <Loader />
                        </div>
                    }
                    {isSubmitted &&
                        <p className='submitted-form'>הבקשה נשלחה בהצלחה!</p>
                    }
                </form>
            </div>
        </div>
    );
}

export default Contact;