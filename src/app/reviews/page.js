import React from 'react'
import Banner from '../components/Banner'
import Link from 'next/link'

const Review = () => {
    return (
        <>
            <Banner title="Deel je ervaring!" img="bol_groot.png" />

            <section className="content-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <h2>Metreat</h2> <br />
                            <p>Je bent niet de enige die met vragen zit. Elke week zijn er vrouwen die zichzelf een Holistische massage gunnen.</p>
                            <p>Wil je weten hoe anderen mijn massages hebben ervaren, of wil je zelf een review schrijven? Kijk dan hier verder! Je kunt direct een review schrijven door op deze link te klikken:  Schrijf een review
                                Ik ben benieuwd naar jouw ervaringen!</p>
                            <div className="google-rank">
                                <div><img src="./assets/img/google.png" width="100" alt="" /></div>
                                <div><b>Uitstekend</b></div>

                                <div><span style={{ color: '#F6BB05', fontSize: '25px' }}>★★★★★ </span><b>5.0 | 7 recensies</b></div>
                                <div>
                                    <Link href="/">Schrijf een recensie</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 mt-4 mt-lg-0 mb-5 mb-lg-0">
                            <div className="right-img">
                                <img src="./assets/img/pages/4 lichamen_4593_1698869569.jpg" width="318" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Review