import React from 'react'
import Banner from '../components/Banner'

const Tarieven = () => {
  return (
    <>
      <Banner title="Moeilijk betekent niet onmogelijk. Het betekend dat je echt je best moet doen." img="bol_groot.png" />

      <section className="content-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2>Tarieven</h2> <br />
              <p>Ik hanteer per 1 januari 2023 de volgende tarieven:</p>
              <h5>Holistische massage</h5>
              <p>Een sessie kost € 80,- en een duurt gemiddeld1,5 uur.</p>
              <h5>Betaling</h5>
              <p>Alle bedragen zijn inclusief BTW en kunnen na de sessie contant, via een betaalverzoek of factuur worden voldaan. Wanneer je een afspraak maakt ga je akkoord met de algemene voorwaarden. </p>
              <h5>Aantal sessies</h5>
              <p>Vaak voel je na 1 of 2 sessies al een grote verandering. Meestal komen mensen 3-4 keer bij mij in de praktijk voor hulp bij specifieke klacht. Mijn doel is jou inzicht te geven, zodat je zelf verder kunt.</p>
            </div>

            <div className="col-lg-4 mt-4 mt-lg-0 mb-5 mb-lg-0">
              <div className="right-img">
                <img src="./assets/img/pages/_3271_1459499849.jpg" width="318" alt="" />
                <img src="./assets/img/pages/_9063_1459499848.jpg" width="318" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Tarieven