import React from 'react'
import Banner from '../components/Banner'

export const metadata = {
  title: "OverMij | Helpende",
};

const OverMij = () => {
  return (
    <>
      <Banner title="Deel je ervaring!" img="bol_groot.png" />

      <section className="content-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2>Over mij</h2> <br />
              <p>Ik ben Mariska Visscher, oprichter van praktijk ‘Helpende Handen’. Na een loopbaan van ruim 11 jaar op de centrale laboratorium administratie, kwam ik onverwacht thuis te zitten met een burn-out. Na een flinke rustperiode probeerde ik weer aan de slag te gaan. Maar dat lukte me niet. Ik kon niet meer wat ik altijd deed, of misschien wilde ik het niet meer.</p>

              <p>Dit was het moment om een zoektocht te beginnen naar mijn ware ik. Wat wil ik? Wat vind ik belangrijk? Waar krijg ik energie van en wat kost mij energie? Door vele cursussen, coaching sessies en workshops ontdekte ik veel over mezelf: Dat ik hoogsensitief ben en makkelijk contact kan maken, dat ik anderen graag help en dat ik graag met mensen in gesprek kom over hun wensen, verlangens en problemen.</p>

              <p>Om mezelf verder te onderzoeken ben ik begonnen met de opleiding tot energetische therapeut. Deze vorm van therapie is erop gericht energie vrij te laten stromen. Energie kun je niet zien, maar het is overal om ons heen. Je kunt het voelen. Daarnaast heb ik ervaren dat het lichaam een sleutel is waar veel informatie in opgeslagen is, maar waar we vaak niet naar luisteren. Massage is de oudste vorm van lichaamswerk. Om mensen nog beter te kunnen helpen ben ik ook de opleiding tot holistisch massage therapeut gaan volgen.</p>

              <p>Instrumenten die ik kan inzetten om onbalans te herstellen zijn bijvoorbeeld holistische massage, Healing/Reiki, EFT en systemisch werk (familieopstellingen). In 2015 ben ik mijn eigen praktijk ‘Helpende Handen’ begonnen in Laren (Gld.), de plek waar ik samen met mijn gezin woon. Ik wil je helpen je balans te (her)vinden en inzicht in jezelf te krijgen door samen met jou je blokkades te vinden en oude pijn en emoties te helen. Door je te laten ervaren en voelen. Je te laten herinneren aan wat je vanuit je eigen essentie al weet en zo inzicht krijgt in wie jij bent. Zodat jij verder kunt.</p>

              <p>Liefs,</p>
              <p>Mariska</p>

            </div>

            <div className="col-lg-4 mt-4 mt-lg-0 mb-5 mb-lg-0">
              <div className="right-img">
                <img src="./assets/img/pages/_415_1459499902.jpg" width="318" alt="" />
                <img src="./assets/img/pages/_8829_1459499902.jpg" width="318" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OverMij