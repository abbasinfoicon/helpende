import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="banner">
        <div className="container">
          <div className="globe-cnt">
            <div className="row align-items-center">
              <div className="col-lg-8 col-sm-12">
                <h3 className="text-white">“You cannot teach
                  <span className="ps-5 ps-10">a person anything,</span>
                  <span className="ps-4">you can only help them </span>
                  <span className="ps-5">find it within themselves”</span>
                </h3>
              </div>
              <div className="col-lg-4 d-none d-xl-block">
                <img src="./assets/img/bol_groot.png" width="318" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="behandeling">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <Link href="holischtische-massage.php" className="blok">
                <img src="./assets/img/beeldmerk.png" alt="" />
                <h2>Behandeling 1</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur mollitia el.</p>
              </Link>
            </div>
            <div className="col-lg-4">
              <Link href="retreat.php" className="blok" style={{ background: '#ffffff4d' }}>
                <img src="./assets/img/beeldmerk.png" alt="" />
                <h2>Behandeling 1</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur mollitia el.</p>
              </Link>
            </div>
            <div className="col-lg-4">
              <Link href="reviews.php" className="blok">
                <img src="./assets/img/beeldmerk.png" alt="" />
                <h2>Behandeling 1</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur mollitia el.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="overhelpende">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 text-center">
              <img src="./assets/img/bol_groot.png" width="318" alt="" />
            </div>
            <div className="col-lg-8 mt-4 mt-lg-0 mb-5 mb-lg-0">
              <h1>Over Helpende Handen</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis culpa sit eaque tenetur
                debitis repudiandae numquam illum reiciendis aspernatur quasi consequatur similique deserunt nam
                maiores fuga molestiae, nobis dolor adipisci unde laudantium? Explicabo, voluptates totam!</p>
              <Link href="over-mij.php">Lees meer <img src="./assets/img/angles-right-solid.svg" alt="" style={{ width: '14px', filter: ' opacity(0.5)' }} /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
