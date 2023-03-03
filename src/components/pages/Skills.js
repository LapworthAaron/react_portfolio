import React from "react";

function Skills() {
  return (
    <div class="accordion" id="accordionExample">
                    <div class="collapse-card">
                        <div class="card-header" id="headingOne">
                            <h2 class="mb-0">
                                <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Front End Web Dev Bootcamp
                                </button>
                            </h2>
                        </div>
                        <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div class="collapse-card-body">
                                <h4>Front End Web Dev Bootcamp</h4>
                                <h5>Edx.org (Trilogy Education Services)</h5>
                                <p>
                                    Studied: HTML, CSS, JavaScript, Git, Github, React.js, ES6, Node.js, moment.js, Bootstrap, APIs, jQuery, AJAX, UX, JSON, Test-driven development, OOP, Behaviour-driven development and Deployment
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="collapse-card">
                      <div class="card-header" id="headingTwo">
                        <h2 class="mb-0">
                          <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                            Skills
                          </button>
                        </h2>
                      </div>
                      <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div class="collapse-card-body">
                            <div class="container skills_container">
                                <div class="row">
                                    <ul class="skills_list col-lg-4">
                                        <li><span class="badge badge-primary">Experienced</span>SQL</li>
                                        <li><span class="badge badge-primary">Experienced</span>Bigquery</li>
                                        <li><span class="badge badge-warning">Rusty</span>SAS</li>
                                        <li><span class="badge badge-warning">Rusty</span>Python</li>
                                        <li><span class="badge badge-warning">Rusty</span>PySpark</li>
                                        <li><span class="badge badge-primary">Experienced</span>Excel</li>
                                        <li><span class="badge badge-primary">Experienced</span>Tableau</li>
                                        <li><span class="badge badge-primary">Experienced</span>People Management</li>
                                        <li><span class="badge badge-primary">Experienced</span>Presenting</li>
                                    </ul>
                                    <ul class="skills_list col-lg-4">
                                        <li><span class="badge badge-success">New</span>HTML</li>
                                        <li><span class="badge badge-success">New</span>CSS</li>
                                        <li><span class="badge badge-success">New</span>Bootstrap</li>
                                        <li><span class="badge badge-success">New</span>Javascript</li>
                                        <li><span class="badge badge-success">New</span>Node.js</li>
                                        <li><span class="badge badge-danger">Not learnt yet</span>React</li>
                                        <li><span class="badge badge-primary">Experienced</span>Git/Github</li>
                                        <li><span class="badge badge-success">New</span>JQuery</li>
                                        <li><span class="badge badge-success">New</span>ES6</li>
                                    </ul>
                                    <ul class="skills_list col-lg-4">
                                        <li><span class="badge badge-success">New</span>moment.js</li>
                                        <li><span class="badge badge-success">New</span>AJAX</li>
                                        <li><span class="badge badge-success">New</span>UX</li>
                                        <li><span class="badge badge-success">Experienced</span>JSON</li>
                                        <li><span class="badge badge-success">New</span>Test-driven development</li>
                                        <li><span class="badge badge-success">New</span>OOP</li>
                                        <li><span class="badge badge-success">New</span>Behaviour-driven development</li>
                                        <li><span class="badge badge-danger">Not learnt yet</span>Deployment</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>

                    <div class="collapse-card">
                      <div class="card-header" id="headingThree">
                        <h2 class="mb-0">
                          <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Education
                          </button>
                        </h2>
                      </div>
                      <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                        <div class="collapse-card-body">
                            <h4>Bsc(Hons): Computer and Video Games: 2:1</h4>
                            <h5>2003 - 2006: The University of Salford, Greater Manchester</h5>
                            <p>Skills attained: C++, 3D and Directx9 programming, proficiency in 3DS Max (3D modelling), Design Development including Design Documents, Marketing, Sound and Music and Project Management. Dissertation subject: MMORPG’s and Virtual Communities</p>
                            <h4>HND: Computing (Merit)</h4>
                            <h5>2001 - 2003: Truro College, Cornwall</h5>
                            <p>
                                Skills attained: Java programming, UNIX, Prolog logic programming, Pascal and Delphi programming, Advanced Database skills, HTML coding and Project Management
                            </p>
                        </div>
                        
                      </div>
                    </div>

                    <div class="collapse-card">
                      <div class="card-header" id="headingFour">
                        <h2 class="mb-0">
                          <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Work History
                          </button>
                        </h2>
                      </div>
                      <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                        <div class="collapse-card-body">
                            <h4>RVU (Uswitch)</h4>
                            <h5>February 2020 – October 2022</h5>
                            <p>
                                Covering Accounts and CRM, building up new reports to understand value of email capture, unsubscriptions from emails and monthly reporting<br/>
                                Data discovery on unused and not understood data in the organisation <br/>
                                Insight projects to under/over performance and opportunity gaps in email programmes<br/>
                                Regular presentation of insight work to all levels of the company(inc. CEO)<br/>
                                Analysis of email and on-site A/B tests<br/>
                                Manage a team of 2 analysts
                            </p>
                            <h4>Starcount – Senior Insight Analyst</h4>
                            <h5>November 2017 – February 2020</h5>
                            <p>
                                Working closely with M&S on their CRM program for Sparks, helping manage  stakeholder relationships and schedule work<br/>
                                Mentoring junior members in analysis and insight delivery, QA work before delivery<br/>
                                Built an offer engine that takes a feed of available offers and allocates the offers in a  personalised manner to ~3.5m customers, driving £19m incremental revenue a year<br/>
                                Used “Rolling Ball” methodology to build basket missions for M&S Food, used in building offers, a customer segmentation and substitutability of products<br/>
                                Calendar Events analysis to identify important products for each calendar event and  identify customers shopping these events
                            </p>
                            <h4>The AA – Customer Insight and Analytics Manager</h4>
                            <h5>July 2017 – October 2017</h5>
                            <p>
                                Working closely with senior management in Group Marketing and Commercial to action understanding of under performing areas<br/>
                                Optimising and evaluating CRM activities
                            </p>
                            <h4>dunnhumby – Senior Insight Analyst – Screwfix</h4>
                            <h5>August 2016 – April 2017</h5>
                            <p>
                                Sole implant in Screwfix offices for fixed term, to establish a new engagement.<br/>
                                Driving relationships, managing stakeholders and understanding opportunities, leading to a longer-term contract<br/>
                                Re-scoped, redesigned and built their full suite of reporting in Tableau and Amazon Redshift, then automated in Redpoint Data Manager<br/>
                                Evaluating their Communications process from beginning to end, recommending improvements and implementing an automated Comms evaluation report<br/>
                                Creation of technical documentation and user guides for all work completed
                            </p>
                            <h4>dunnhumby – Senior Insight Analyst - Online</h4>
                            <h5>Oct 2015 – July 2017</h5>
                            <p>
                                Working as a “power of two” on the online business with a client lead<br/>
                                Developing a strong client engagement with the Tesco team and senior management<br/>
                                Delivering projects identifying ~£15m worth of profit savings to the business<br/>
                                Helped the Online team at Tesco gather understanding of how valuable each area of the Online business is to Tesco, working in Sales, Profit and Customer benefit<br/>
                                Subject Matter Expert for Delivery Saver at Tesco and dunnhumby, helping with the  development of the new version and later demonstrating that it was unprofitable and recommending ending Delivery Saver
                            </p>
                            <h4>dunnhumby – Senior Insight Analyst - Stores</h4>
                            <h5>June 2015 – Oct 2015</h5>
                            <p>
                                Working with the Tesco Store steam to help understand the competitor impact to individual Tesco stores, culminating in embedding our analysis in the first version of a  Competitor handbook for store managers<br/>
                                Delivering an assessment of the decline of Extra stores to the board of Tesco
                            </p>
                            <h4>dunnhumby – Senior Insight Analyst - Telecoms</h4>
                            <h5>June 2013 – June 2015</h5>
                            <p>
                                Working with Tesco Telecoms to understand their customers and performance<br/>
                                Leading the client engagement and producing all analysis for Tesco Telecoms across, Tesco Mobile, Broadband, ICC and In-store retail<br/>
                                Working with data that is based on a yearly/2 yearly subscription basis, including on- demand retail
                            </p>
                        </div>
                      </div>
                    </div>

    </div>
  );
}

export default Skills;