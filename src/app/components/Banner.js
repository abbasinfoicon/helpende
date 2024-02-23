import React from 'react'

const Banner = ({ title, img }) => {
    return (
        <div className="banner content">
            <div className="container">
                <div className="globe-cnt">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-sm-12">
                            <h3 className="text-white">{title}</h3>
                        </div>
                        <div className="col-lg-4 d-none d-xl-block">
                            <img src={`./assets/img/${img}`} width="218" alt={title} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner