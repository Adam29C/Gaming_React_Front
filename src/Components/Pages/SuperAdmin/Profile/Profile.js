import React from 'react'
import MainProfile from './MainProfile'
import ChangePassword from './ChangePassword'
const Profile = () => {
  return (
<div className="flapt-page-content">
            <div className="main-panel">
                <div class="content-wrapper">
                    <div class="container-fluid">
                        <div class="row">
                            <MainProfile/>
                            <ChangePassword />
                        </div>
                    </div>
                </div>
            </div>
            </div>
  
  )
}

export default Profile