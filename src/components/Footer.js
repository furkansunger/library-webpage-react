import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="text-center text-lg-start bg-dark text-white">
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div className="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>
                <div>
                    <a href="https://twitter.com/furkan_sunger" target="_blank" className="me-4 text-reset">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/furkansunger/" target="_blank" className="me-4 text-reset">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/furkan-sunger/" target="_blank" className="me-4 text-reset">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/FurkanSunger" target="_blank" className="me-4 text-reset">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </section>
            <section className="">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fas fa-gem me-3"></i>Vibe Software
                            </h6>
                            <p>
                                Here you can use rows and columns to organize your footer content. Lorem ipsum
                                dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            <p>
                                <Link className="nav-link text-white" to="/books">Books</Link>
                            </p>
                            <p>
                                <Link className="nav-link text-white" to="/authors">Authors</Link>
                            </p>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Contact
                            </h6>
                            <p><i className="fas fa-home me-3"></i> Mersin/TURKEY</p>
                            <p>
                                <i className="fas fa-envelope me-3"></i>
                                furkan.sunger@outlook.com
                            </p>
                            <p><i className="fas fa-phone me-3"></i>+ 01 234 567 88</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="text-center p-4">
                © 2021 Copyright: <span className="fw-bold">Vibe Software</span>
            </div>
        </footer>
    )
}

export default Footer
