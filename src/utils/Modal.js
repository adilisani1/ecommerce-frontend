import { useState } from 'react';
import { Modal, ModalBody, ModalFooter } from 'reactstrap';
import './Modal.css';

export const MyModal = ({ isOpen, setIsOpen, order, orderTotal, shippingCost, total }) => {


    const [cardNumber, setCardNumber] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [cvv, setCvv] = useState("");
    const [cardHolder, setCardHolder] = useState("");

    // const handleCardNumberChange = (event) => {
    //     setCardNumber(event.target.value);
    // };

    // const handleExpiryDateChange = (event) => {
    //     setExpiryDate(event.target.value);
    // };

    // const  = (event) => {
    //     setExpiryDate(event.target.value);
    // };

    // const handleCvvChange = (event) => {
    //     setCvv(event.target.value);
    // };

    const handleSubmit = (event) => {
        event.preventDefault();

    };

    return (
        <Modal isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} size='lg'>
            <ModalBody >
                <div className="main-modal">
                    <div className="modal-area">
                        <div className="modal-left-side">
                            <div className="order-summary-head">
                                <h1 className='text-white text-left border-bottom'>Order Summary</h1>
                                {order?.cartItems?.map((item) => {
                                    return (
                                        <div className="border-bottom mb-5">
                                            <div className="order-summary-products">
                                                <img src={item.image} alt={item.name} />
                                                <div className="product-details">
                                                    <p className="product-title text-white mb-0 pb-0">{item.name}</p>
                                                    <span className="product-cat text-white">{item.category}</span>
                                                </div>
                                            </div>
                                            <div className='product-price'>
                                                <span className="text-white">${item.price.toFixed(2)}</span>
                                            </div>
                                        </div>
                                    )
                                })}
                                <div className="subtotal-order-summary">
                                    <div className="order-total d-flex justify-content-between ">
                                        <p className="text-white">Order total</p><span className="order-t">${orderTotal.toFixed(2)}</span>
                                    </div>
                                    <div className="shipping d-flex justify-content-between">
                                        <p className="text-white">Shipping Cost</p><span className="shipping-cost">${shippingCost.toFixed(2)}</span>
                                    </div>
                                    <div className="shipping d-flex justify-content-between">
                                        <p className="text-white">Subtotal</p><span className="subtotal-t">${total.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal-right-side">
                            <div><img src="/images/credit-card.png" alt="" /></div>
                            <form>
                                <div className="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label>Card Number*</label>
                                            <input
                                                type="text"
                                                placeholder="0000 0000 0000 0000"
                                                className="form-control"
                                                name="number"
                                                id="number"
                                                value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label>Cardholder name*</label>
                                            <input type="text" placeholder="Cardholder name" className="form-control" name="name" id="name" value={cardHolder} onChange={(e) => setCardHolder(e.target.value)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Expiry date* </label>
                                            <input type="text" placeholder="YY/MM" className="form-control" name="time" id="time" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>CVV*</label>
                                            <input type="text" placeholder="000" className="form-control" name="time" id="time" value={cvv} onChange={(e) => setCvv(e.target.value)} />
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="confirm-payment-btn">Confirm Payment</button>
                            </form>
                        </div>
                    </div>
                </div>
            </ModalBody>
        </Modal >
    );
}
