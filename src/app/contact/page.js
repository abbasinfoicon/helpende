import React from 'react'
import Banner from '../components/Banner'
import Link from 'next/link'

const Contact = () => {
  return (
    <>
      <Banner title="Vergelijk jezelf nooit met anderen! Niemand kan beter jou zijn dan jij." img="bol_groot.png" />

      <section className="content-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2>Contact</h2> <br />
              <p>Mariska Visscher | Praktijk adres:
                Rossweg 20a <br />
                7245 NK Laren<br />
                E: mariska@helpende-handen.net <br />
                T: 06 1484 8884<br />
                Rekeningnr: NL71INGB 0005021402</p>
              <p>De consulten vinden plaats in mijn praktijk in Laren (Gld.). In overleg is dit ook mogelijk op locatie.
                Wil je meer weten of een afspraak maken? Neem gerust contact op via onderstaand formulier:</p>

              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d39152.1720017381!2d6.378898!3d52.170498!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c78d3b1bdfe595%3A0x521bd321a0ab2da4!2sHelpende%20Handen!5e0!3m2!1sen!2sus!4v1708603499495!5m2!1sen!2sus" width="100%" height="400" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

              <form action="" className="mt-4">
                <div className="row">
                  <div className="col-12">
                    <label htmlFor="" className="form-label">Aanhef</label>
                    <div>
                      <input type="radio" name="" id="" /> <span>De heer</span>
                      <input type="radio" name="" id="" /> <span>Mevrouw</span>
                    </div>
                  </div>

                  <div className="col-md-6 mt-3">
                    <label htmlFor="" className="form-label">Voornaam <span>*</span></label>
                    <div>
                      <input type="text" name="" id="" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6 mt-3">
                    <label htmlFor="" className="form-label">Achternaam <span>*</span></label>
                    <div>
                      <input type="text" name="" id="" className="form-control" />
                    </div>
                  </div>

                  <div className="col-md-6 mt-3">
                    <label htmlFor="" className="form-label">Telefoonnummer <span>*</span></label>
                    <div>
                      <input type="number" name="" id="" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6 mt-3">
                    <label htmlFor="" className="form-label">Emailadres <span>*</span></label>
                    <div>
                      <input type="email" name="" id="" className="form-control" />
                    </div>
                  </div>

                  <div className="col-md-12 mt-3">
                    <label htmlFor="" className="form-label">Bericht of vraag <span>*</span></label>
                    <div>
                      <textarea name="" id="" cols="30" rows="3" className="form-control"></textarea>
                    </div>
                  </div>
                  <p className="mt-5">Type hier onder het woord "AKKOORD" om het formulier te versturen (in hoofdletters!)
                    Anti spam beveiliging</p>

                  <div className="col-md-12">
                    <label htmlFor="" className="form-label"></label>
                    <div>
                      <input type="text" name="" id="" className="form-control d-inline-block" style={{ width: '80%' }} /> <span>* zijn verplicht</span>
                      <br />
                      <br />
                      <div className="text-end">
                        <Link href="/" className="VERZENDEN">VERZENDEN</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="col-lg-4 mt-4 mt-lg-0 mb-5 mb-lg-0">
              <div className="right-img">
                <img src="./assets/img/pages/_5732_1459499778.jpg" width="318" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact