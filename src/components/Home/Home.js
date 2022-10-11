import React from "react";
import './Home.css';

const Home = () => {
    return (
        <>
            <div className="bodyclasshome">
                <div className="btcontainerep">
                    <div className="profile_mainep">
                        <div id='company-headerhome'>
                            <h2>BROADRIDGE</h2>
                        </div>

                        <div className="containerhome">

                            <div className="innerdivhome">
                                <p>We provide advanced technology and operations, communications, data and analytics solutions for the financial services industry and businesses.</p>
                            </div>
                            <div class="row">
                                <div class="col-md-6 how-img">
                                    <img src="https://www.broadridge.com/_assets/images/all-new-generic-images/forms/img_form_leadgen_desktop@2x.jpg" class="rounded-circle img-fluid" alt="" />
                                </div>
                                <div class="col-md-4">

                                    <h4 class="subheading">Delivering real business value for over five decades</h4>
                                    <p class="text-muted">
                                        Broadridge, a global Fintech leader with
                                        $5 billion in revenues, provides the critical infrastructure that powers investing, corporate governance and communications to enable better financial lives. We deliver technology-driven solutions that drive digital transformation for our clients and help them get ahead of today’s challenges to capitalise on what’s next.
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div class="footer">
                <p>© 2022 Broadridge Financial Solutions, Inc.  All Rights Reserved.</p>
            </div>
        </>
    );
}
export default Home;