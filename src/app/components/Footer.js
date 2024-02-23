import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                        <div className="f-detials first-f-c">
                            Mariska Visscher <br />
                            Rossweg 20a <br />
                            7245 NK Laren GLD
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="f-detials">
                            Contact: <br />
                            Tel. 06 14 84 88 84 <br />
                            <Link className="text-white" href="mailto:info@helpende-handen.net">info@helpende-handen.net</Link>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="f-detials">
                            KVK: 08211015 <br />
                            BTW: NL136875531 <br />
                            Bank: NL71INGB0005021402
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="copyright">
                            <p className="mb-0">© 2024 HELPENDE HANDEN | ONTWERP OVII | WEBSITE BY SITEWORK</p>
                        </div>
                    </div>
                    <div className="col-lg-6 text-start text-lg-center">
                        <div className="copyright">
                            <p className="mb-0"><Link href="/">
                                <img style={{ width: '14px', filter: 'invert(1)' }} className="me-2" src="./assets/img/facebook-f.svg" alt="" />
                            </Link>Helpende-Handen</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer