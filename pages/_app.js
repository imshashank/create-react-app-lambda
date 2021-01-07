import '../styles/globals.css'
import '../static/css/style.css'
import '../static/css/aos.css'
import '../static/css/bootstrap.min.css'
import '../static/css/bootstrap-datepicker.css'
import '../static/css/jquery.fancybox.min.css'
import '../static/css/jquery-ui.css'
import '../static/css/owl.carousel.min.css'
import '../static/css/owl.theme.default.min.css'
import '../configureAmplify'
import Head from "next/head";
import React from "react";


function MyApp({Component, pageProps}) {
    return (
        <div>
            <Head>
                <script src="/static/js/jquery-3.3.1.min.js"/>
            </Head>
            <div className="site-wrap">
                <div className="site-mobile-menu site-navbar-target">
                    <div className="site-mobile-menu-header">
                        <div className="site-mobile-menu-close mt-3">
                            <span className="icon-close2 js-menu-toggle"/>
                        </div>
                    </div>
                    <div className="site-mobile-menu-body"/>
                </div>
                <Component {...pageProps} />
                <div className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="copyright">
                                    <p>
                                        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                        Copyright © All rights reserved | This template is made with <i
                                        className="icon-heart text-danger" aria-hidden="true"/> by <a
                                        href="https://colorlib.com" target="_blank">Colorlib</a>
                                        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const navStyle = {padding: 20, borderBottom: '1px solid #ddd'}
const bodyStyle = {minHeight: 'calc(100vh - 190px)', padding: '20px 40px'}
const linkStyle = {marginRight: 20, cursor: 'pointer'}

export default MyApp