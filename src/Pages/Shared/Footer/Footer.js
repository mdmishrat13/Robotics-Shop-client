import React from 'react';

const Footer = () => {
    return (
        <div className="bg-dark text-white">
            <div className="row pt-5">
                <div className="col-6">
                    <div className="text-center">
                        <h3>Follow us on</h3>
                        <a href="https://www.facebook.com">Facebook</a> <br />
                        <a href="https://www.youtube.com">Youtube</a> <br />
                        <a href="https://www.instagram.com">Instagram</a> <br />

                    </div>
                </div>
                <div className="col-6">
                    <div className="text-center">
                        <h3>
                            Call Us
                        </h3>
                        <p>Hotline: 01740261643</p>
                    </div>
                </div>
                <div className="text-center py-4">
                    <p> All right reserved 2021</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;