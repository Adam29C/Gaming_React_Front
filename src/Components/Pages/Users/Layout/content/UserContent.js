import React from 'react'

const UserContent = ({title,children}) => {
  return (
    <main _ngcontent-fig-c57="" id="main" className="main">
    <router-outlet _ngcontent-fig-c57="" />
    <app-my-profile _nghost-aja-c61="" className="ng-star-inserted">
      <section _ngcontent-aja-c61="" className="section profile">
        <div _ngcontent-aja-c61="" className="row">
          <div _ngcontent-aja-c61="" className="col-lg-12">
            <h2 _ngcontent-aja-c61="" className="userscreen-title">
              {title}
            </h2>
          </div>

          {children}
          
          </div>
        </section>
      </app-my-profile>
    </main>
  )
}

export default UserContent