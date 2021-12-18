import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faClock,
    faMailBulk,
    faSearchLocation,
}

    from "@fortawesome/free-solid-svg-icons";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faLinkedin,
    faPinterest,
} from "@fortawesome/free-brands-svg-icons";


import "./Contact.css";
const Contact = () => {

    const mailIcon = <FontAwesomeIcon icon={faMailBulk} />;
    const locationIcon = <FontAwesomeIcon icon={faSearchLocation} />;
    const clockIcon = <FontAwesomeIcon icon={faClock} />;
    const youtubeIcon = <FontAwesomeIcon icon={faYoutube} />;
    const facebookIcon = <FontAwesomeIcon icon={faFacebook} />;
    const twitterIcon = <FontAwesomeIcon icon={faTwitter} />;
    const linkedinIcon = <FontAwesomeIcon icon={faLinkedin} />;
    const pinteresIcon = <FontAwesomeIcon icon={faPinterest} />;

    return (
        <div>
            <>
                <div className="">
                    <div className="text-white contact-banner text-center">
                        <div className="">
                            <h1 className=" display-3 fw-bold">Contact Us Now</h1>
                            <h3 className="fw-bold text-gray-500">Stay Connected With Us !</h3>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className=" row  align-items-center  py-4">
                        <div className="row col-lg-4 col-md-4 col-sm-12  justify-content-center text-center mx-auto">
                            <h1 className="display-2 icon-color">{mailIcon}</h1>
                            <p className="fs-5 fw-bold text-color-h5">clothzilla@gmail.com</p>
                        </div>
                        <div className="row col-lg-4 col-md-4 col-sm-12 justify-content-center text-center mx-auto">
                            <h1 className="display-2 icon-color1">{locationIcon}</h1>
                            <p className="fs-5 fw-bold text-color-h5">L.A California 34. 10, P.O. Box 283 Newyork</p>
                        </div>
                        <div className="row col-lg-4 col-md-4 col-sm-12 justify-content-center text-center mx-auto">
                            <h1 className="display-2 icon-color3">{clockIcon}</h1>
                            <p className="fs-5 fw-bold text-color-h5">
                                <span className="text-success">Week Days: </span>10:00 - 22:00
                            </p>
                            <p className="fs-5 fw-bold text-color-h5">
                                <span className="text-success">Sunday: </span>Close
                            </p>
                        </div>
                    </div>
                </div>
                <div className=" p-2">
                    <h1 className="text-design fw-bold text-center py-5">Our Social Platforms</h1>
                    <div
                        className=" col-lg-6 d-flex justify-content-evenly
                mx-auto p-2"
                    >
                        <span>
                            <h1 className="youtube-color">{youtubeIcon}</h1>
                        </span>
                        <span>
                            <h1 className="facebook-color">{facebookIcon}</h1>
                        </span>
                        <span>
                            <h1 className="twitter-color">{twitterIcon}</h1>
                        </span>
                        <span>
                            <h1 className="linkedin-color">{linkedinIcon}</h1>
                        </span>
                        <span>
                            <h1 className="pinteres-color">{pinteresIcon}</h1>
                        </span>
                    </div>
                </div>
                <div className=" p-2 text-left">
                    <div className="mb-3 col-xl-8 col-lg-8 col-md-6 col-12 mx-auto">
                        <label htmlFor="exampleFormControlInput1" className="form-label fw-bold">
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-control border border-dark"
                            id="exampleFormControlInput1"
                            placeholder="Your name here"
                        />
                    </div>
                    <div className="mb-3 col-xl-8 col-lg-8 col-md-6 col-12 mx-auto">
                        <label htmlFor="exampleFormControlInput1" className="form-label fw-bold">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control border border-dark"
                            id="exampleFormControlInput1"
                            placeholder="name@example.com"
                        />
                    </div>
                    <div className="mb-3 col-xl-8 col-lg-8 col-md-6 col-12 mx-auto">
                        <label
                            htmlFor="exampleFormControlTextarea1"
                            className="form-label fw-bold"
                        >
                            Message
                        </label>
                        <textarea
                            className="form-control border border-dark"
                            id="exampleFormControlTextarea1"
                            rows="3"
                        ></textarea>
                    </div>
                    <div className="mb-3 col-xl-8 col-lg-8 col-md-6 col-12 mx-auto">
                        <button className="btn btn-success fw-bold">Submit</button>
                    </div>
                </div>
            </>
        </div>
    );
};

export default Contact;