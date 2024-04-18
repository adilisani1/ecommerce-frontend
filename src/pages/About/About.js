import React from 'react';
import './about.css';
import ourTeam from '../../logo/about-3.jpg'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";

const About = () => {
    return (
        <div className='about-container'>
            <div className='about-wrapper'>
                <div className='about-top'>
                    <div>
                        <h1>About Us</h1>
                        <span>Discover Our Journey</span>
                        <p>
                            Welcome to our store, we are dedicated to redefining the shopping experience by providing our customers with nothing but the best.
                            our journey began with a simple, yet profound belief that every purchase should be a seamless blend of quality, functionality, and value.
                        </p>
                    </div>
                </div>

                <div className='our-mission'>
                    <div>
                        <h1>Our Mission</h1>
                        <span>Discover Our Mission</span>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in fauc
                        </p>
                    </div>
                    <div>
                        <img src={ourTeam} alt='team' />
                    </div>
                </div>

                <div className='our-team'>
                    <div>
                        <h1>Our Team</h1>
                        <span>  Meet the Experts</span>
                    </div>
                    <div className="items ">
                        <div className="item has-thumbnail">
                            <div className="team-content">
                                <div className="image-thumbnail">
                                    <figure>
                                        <a href="#" target="_blank">
                                            <img
                                                loading="lazy"
                                                decoding="async"
                                                width={330}
                                                height={320}
                                                src="https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2021/04/team-1-330x360.jpg"
                                                className="attachment-ts_team_thumb size-ts_team_thumb wp-post-image"
                                                alt="team-1"
                                                srcSet="https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2021/04/team-1-330x360.jpg 330w, https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2021/04/team-1-275x300.jpg 275w, https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2021/04/team-1.jpg 332w"
                                                sizes="(max-width: 330px) 100vw, 330px"
                                            />{" "}
                                        </a>
                                    </figure>
                                </div>
                                <header className="team-info">
                                    <h3 className="name">
                                        <a href="#" target="_blank">
                                            John Hossain
                                        </a>
                                    </h3>
                                    <span className="member-role">CEO &amp; Founder</span>
                                    <span className="member-social">
                                        <a className="facebook" href="#" target="_blank">
                                            {/* <i className="tb-icon-brand-facebook" /> */}
                                            <p><FaFacebookF /></p>
                                        </a>
                                        <a className="twitter" href="#" target="_blank">
                                            {/* <i className="tb-icon-brand-twitter" /> */}
                                            <p><FaTwitter /></p>
                                        </a>
                                        <a className="instagram" href="#" target="_blank">
                                            {/* <i className="tb-icon-brand-instagram" /> */}
                                            <p><AiFillInstagram /></p>
                                        </a>
                                        <a className="pinterest" href="#" target="_blank">
                                            {/* <i className="tb-icon-brand-pinterest" /> */}
                                            <p><FaPinterestP /></p>
                                        </a>
                                    </span>
                                </header>
                            </div>
                        </div>
                        <div className="item has-thumbnail">
                            <div className="team-content">
                                <div className="image-thumbnail">
                                    <figure>
                                        <a href="#" target="_blank">
                                            <img
                                                loading="lazy"
                                                decoding="async"
                                                width={330}
                                                height={320}
                                                src="https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2021/04/team-2-330x360.jpg"
                                                className="attachment-ts_team_thumb size-ts_team_thumb wp-post-image"
                                                alt="team-2"
                                                srcSet="https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2021/04/team-2-330x360.jpg 330w, https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2021/04/team-2-275x300.jpg 275w, https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2021/04/team-2.jpg 332w"
                                                sizes="(max-width: 330px) 100vw, 330px"
                                            />{" "}
                                        </a>
                                    </figure>
                                </div>
                                <header className="team-info">
                                    <h3 className="name">
                                        <a href="#" target="_blank">
                                            Jane Cooper
                                        </a>
                                    </h3>
                                    <span className="member-role">Market Development</span>
                                    <span className="member-social">
                                        <a className="facebook" href="#" target="_blank">
                                            {/* <i className="tb-icon-brand-facebook" /> */}
                                            <p><FaFacebookF /></p>
                                        </a>
                                        <a className="twitter" href="#" target="_blank">
                                            {/* <i className="tb-icon-brand-twitter" /> */}
                                            <p><FaTwitter /></p>
                                        </a>
                                        <a className="instagram" href="#" target="_blank">
                                            {/* <i className="tb-icon-brand-instagram" /> */}
                                            <p><AiFillInstagram /></p>
                                        </a>
                                        <a className="pinterest" href="#" target="_blank">
                                            {/* <i className="tb-icon-brand-pinterest" /> */}
                                            <p><FaPinterestP /></p>
                                        </a>
                                    </span>
                                </header>
                            </div>
                        </div>
                        <div className="item has-thumbnail">
                            <div className="team-content">
                                <div className="image-thumbnail">
                                    <figure>
                                        <a href="#" target="_blank">
                                            <img
                                                loading="lazy"
                                                decoding="async"
                                                width={330}
                                                height={320}
                                                src="https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2021/04/team-3-330x360.jpg"
                                                className="attachment-ts_team_thumb size-ts_team_thumb wp-post-image"
                                                alt="team-3"
                                                srcSet="https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2021/04/team-3-330x360.jpg 330w, https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2021/04/team-3-275x300.jpg 275w, https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2021/04/team-3.jpg 332w"
                                                sizes="(max-width: 330px) 100vw, 330px"
                                            />{" "}
                                        </a>
                                    </figure>
                                </div>
                                <header className="team-info">
                                    <h3 className="name">
                                        <a href="#" target="_blank">
                                            Kristin Watson
                                        </a>
                                    </h3>
                                    <span className="member-role">Head Engineer</span>
                                    <span className="member-social">
                                        <a className="facebook" href="#" target="_blank">
                                            {/* <i className="tb-icon-brand-facebook" /> */}
                                            <p><FaFacebookF /></p>
                                        </a>
                                        <a className="twitter" href="#" target="_blank">
                                            {/* <i className="tb-icon-brand-twitter" /> */}
                                            <p><FaTwitter /></p>
                                        </a>
                                        <a className="instagram" href="#" target="_blank">
                                            {/* <i className="tb-icon-brand-instagram" /> */}
                                            <p><AiFillInstagram /></p>
                                        </a>
                                        <a className="pinterest" href="#" target="_blank">
                                            {/* <i className="tb-icon-brand-pinterest" /> */}
                                            <p><FaPinterestP /></p>
                                        </a>
                                    </span>
                                </header>
                            </div>
                        </div>
                        <div className="item has-thumbnail">
                            <div className="team-content">
                                <div className="image-thumbnail">
                                    <figure>
                                        <a href="#" target="_blank">
                                            <img
                                                loading="lazy"
                                                decoding="async"
                                                width={330}
                                                height={320}
                                                src="https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2021/04/team-4-330x360.jpg"
                                                className="attachment-ts_team_thumb size-ts_team_thumb wp-post-image"
                                                alt="team-4"
                                                srcSet="https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2021/04/team-4-330x360.jpg 330w, https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2021/04/team-4-275x300.jpg 275w, https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2021/04/team-4.jpg 332w"
                                                sizes="(max-width: 330px) 100vw, 330px"
                                            />{" "}
                                        </a>
                                    </figure>
                                </div>
                                <header className="team-info">
                                    <h3 className="name">
                                        <a href="#" target="_blank">
                                            Isabella
                                        </a>
                                    </h3>
                                    <span className="member-role">Marketing</span>
                                    <span className="member-social">
                                        <a className="facebook" href="#" target="_blank">
                                            {/* <i className="tb-icon-brand-facebook" /> */}
                                            <p><FaFacebookF /></p>
                                        </a>
                                        <a className="twitter" href="#" target="_blank">
                                            {/* <i className="tb-icon-brand-twitter" /> */}
                                            <p><FaTwitter /></p>
                                        </a>
                                        <a className="instagram" href="#" target="_blank">
                                            {/* <i className="tb-icon-brand-instagram" /> */}
                                            <p><AiFillInstagram /></p>
                                        </a>
                                        <a className="pinterest" href="#" target="_blank">
                                            {/* <i className="tb-icon-brand-pinterest" /> */}
                                            <p><FaPinterestP /></p>
                                        </a>
                                    </span>
                                </header>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div >
    )
}

export default About