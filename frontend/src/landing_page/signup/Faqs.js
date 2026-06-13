import React from 'react';

function Faqs() {
    return (
        <div className="container mt-5 pt-4 mb-5 pb-5 px-lg-5 text-start d-flex flex-column align-items-center">
            <div className="w-100" style={{ maxWidth: "900px" }}>
                <h3 className="fs-4 mb-5" style={{ color: "#424242", fontWeight: "500" }}>FAQs</h3>
                
                <div className="accordion accordion-flush w-100" id="faqAccordion">
                    {/* Item 1 */}
                    <div className="accordion-item border-0 border-bottom mb-2">
                        <div className="bg-primary rounded mt-2 mb-1" style={{ width: "60px", height: "3px", opacity: 0.8 }}></div>
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button collapsed px-0 py-3 bg-transparent shadow-none" type="button" style={{ fontWeight: "400", fontSize: "1.05rem", color: "#424242" }}>
                                What is a Zerodha account
                            </button>
                        </h2>
                    </div>
                    
                    {/* Item 2 */}
                    <div className="accordion-item border-0 border-bottom mb-2">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed px-0 py-3 bg-transparent shadow-none" type="button" style={{ fontWeight: "400", fontSize: "1.05rem", color: "#424242" }}>
                                What documents are required to open a demat account?
                            </button>
                        </h2>
                    </div>
                    
                    {/* Item 3 */}
                    <div className="accordion-item border-0 border-bottom mb-2">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed px-0 py-3 bg-transparent shadow-none" type="button" style={{ fontWeight: "400", fontSize: "1.05rem", color: "#424242" }}>
                                Is Zerodha account opening free?
                            </button>
                        </h2>
                    </div>
                    
                    {/* Item 4 */}
                    <div className="accordion-item border-0 border-bottom mb-2">
                        <div className="bg-primary rounded mt-2 mb-1" style={{ width: "60px", height: "3px", opacity: 0.8 }}></div>
                        <h2 className="accordion-header" id="headingFour">
                            <button className="accordion-button collapsed px-0 py-3 bg-transparent shadow-none" type="button" style={{ fontWeight: "400", fontSize: "1.05rem", color: "#424242" }}>
                                Are there any AMC (Account Maintenance Charges) for a demat account?
                            </button>
                        </h2>
                    </div>
                    
                    {/* Item 5 */}
                    <div className="accordion-item border-0 border-bottom mb-2">
                        <h2 className="accordion-header" id="headingFive">
                            <button className="accordion-button collapsed px-0 py-3 bg-transparent shadow-none" type="button" style={{ fontWeight: "400", fontSize: "1.05rem", color: "#424242" }}>
                                Can I open a demat account without a bank account?
                            </button>
                        </h2>
                    </div>
                    
                    {/* Item 6 */}
                    <div className="accordion-item border-0 border-bottom mb-2">
                        <div className="bg-primary rounded mt-2 mb-1" style={{ width: "60px", height: "3px", opacity: 0.8 }}></div>
                        <h2 className="accordion-header" id="headingSix">
                            <button className="accordion-button collapsed px-0 py-3 bg-transparent shadow-none" type="button" style={{ fontWeight: "400", fontSize: "1.05rem", color: "#424242" }}>
                                What is a Basic Services Demat Account (BSDA)?
                            </button>
                        </h2>
                    </div>
                    
                    {/* Item 7 */}
                    <div className="accordion-item border-0 border-bottom mb-2">
                        <div className="bg-primary rounded mt-2 mb-1" style={{ width: "60px", height: "3px", opacity: 0.8 }}></div>
                        <h2 className="accordion-header" id="headingSeven">
                            <button className="accordion-button collapsed px-0 py-3 bg-transparent shadow-none" type="button" style={{ fontWeight: "400", fontSize: "1.05rem", color: "#424242" }}>
                                Can I open a demat and trading account using the mobile app?
                            </button>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faqs;
