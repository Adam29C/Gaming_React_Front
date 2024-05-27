import React from 'react'

const GameContent = ({title,children}) => {
  return (
    <main _ngcontent-nsr-c57="" id="main" className="main">
      <router-outlet _ngcontent-nsr-c57="" />
      <app-dashboard _nghost-nsr-c73="">
        <section _ngcontent-nsr-c73="" className="section listing_page">
          <div _ngcontent-nsr-c73="" className="row">
           
            <div _ngcontent-nsr-c73="" className="col-lg-12 listing_page_12">
              <div
                _ngcontent-nsr-c73=""
                className="middle-page-content home-page"
              >
                <div _ngcontent-nsr-c73="" className="game-slider mb-2">
                  <div _ngcontent-nsr-c73="" className="coupon-card">


                  <div _ngcontent-nsr-c73="" className="card">
                      <div _ngcontent-nsr-c73="">
                        <div _ngcontent-nsr-c73="">
                          <app-sport-list
                            _ngcontent-nsr-c73=""
                            _nghost-nsr-c70=""
                          >
                            <div _ngcontent-nsr-c70="">
                              <div
                                _ngcontent-nsr-c70=""
                                className="card-body card-content p-0"
                              >
                                <div
                                  _ngcontent-nsr-c70=""
                                  className="bet-table-header"
                                >
                                  <div
                                    _ngcontent-nsr-c70=""
                                    className="row align-items-center"
                                  >
                                    <div
                                      _ngcontent-nsr-c70=""
                                      className="col-md-6"
                                    >
                                      <span
                                        _ngcontent-nsr-c70=""
                                        className="list-sport-title"
                                      >
                                        <img
                                          _ngcontent-nsr-c70=""
                                          className="img-fluid game-icon-img"
                                          src="/assets/images/events/menu-4.png"
                                        />
                                        {title}
                                      </span>
                                      <ul
                                        _ngcontent-nsr-c70=""
                                        className="ks-cboxtags"
                                      >
                                        <li _ngcontent-nsr-c70="">
                                          <input
                                            _ngcontent-nsr-c70=""
                                            type="checkbox"
                                            defaultValue="Order one"
                                            id="checkboxOne4-home"
                                            className="ng-untouched ng-pristine ng-valid"
                                          />
                                          <label
                                            _ngcontent-nsr-c70=""
                                            htmlFor="checkboxOne4-home"
                                          >
                                            LIVE
                                          </label>
                                        </li>
                                        <li _ngcontent-nsr-c70="">
                                          <input
                                            _ngcontent-nsr-c70=""
                                            type="checkbox"
                                            defaultValue="Order Two"
                                            id="checkboxTwo4--home"
                                            className="ng-untouched ng-pristine ng-valid"
                                          />
                                          <label
                                            _ngcontent-nsr-c70=""
                                            htmlFor="checkboxTwo4--home"
                                          >
                                            VIRTUAL
                                          </label>
                                        </li>
                                      </ul>
                                    </div>

                                    <div
                                      _ngcontent-nsr-c70=""
                                      className="col-md-2 text-center d-none d-md-block"
                                    >
                                      <small _ngcontent-nsr-c70="">1</small>
                                    </div>
                                    <div
                                      _ngcontent-nsr-c70=""
                                      className="col-md-2 text-center d-none d-md-block"
                                    >
                                      <small _ngcontent-nsr-c70="">X</small>
                                    </div>
                                    <div
                                      _ngcontent-nsr-c70=""
                                      className="col-md-2 text-center d-none d-md-block"
                                    >
                                      <small _ngcontent-nsr-c70="">2</small>
                                    </div>
                                  </div>
                                </div>
                                <div _ngcontent-jgm-c70="" className="bet-table-body"> {children}</div>
                           
                              </div>
                            </div>
                          </app-sport-list>
                        </div>
                      </div>
                    
                 
                    
                   
                    </div>
                    
                
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </app-dashboard>
    </main>
  )
}

export default GameContent