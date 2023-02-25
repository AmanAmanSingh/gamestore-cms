import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cartContext } from '../cartcontext';
import "./checkout.css";

const PUBLISH_KEY = "pk_test_51Mc0q1SGzd5rsePVWcorUeFOvNTHX14MegFZJZQ2WaDu92eFBRTmyOph30op1Kfqzpegu20jRv4tKB9OH8T44HV600zMXm7bCi";

const CheckOut = () => {
    const emptyContext = useContext(cartContext);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        cardNumber: '',
        cvv: '',
    });
    const navigate = useNavigate()

    const { name, email, cardNumber, cvv } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        emptyContext.setCartItem([]);

        navigate("/success");
    };

    const isFormValid = () => {
        return name && email && cardNumber && cvv;
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-con">
                <div>
                    <label htmlFor="name" className='label'>Name</label>
                    <input type="text" name="name" id="name" value={name} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="email" className='label'>Email</label>
                    <input type="email" name="email" id="email" value={email} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="cardNumber" className='label'>Card Number</label>
                    <input type="text" name="cardNumber" id="cardNumber" value={cardNumber} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="cvv" className='label'>CVV</label>
                    <input type="text" name="cvv" id='cvv' value={cvv} onChange={handleChange} />
                </div>

                <div>
                    <button type="submit" disabled={!isFormValid()} >Confirm</button>
                </div>
            </div>
        </form>
    );
};


export default CheckOut;