import React from 'react'

function More() {
  return (
    <>
      <div className="container">
        <h4 style={{color:'white'}}>More reasons to join</h4>
        <div className="row">
            <div className="col-md-3">
            <div className="card grdnt" >
            <div style={{color:'white',fontWeight:"bold",padding:'3px 8px',fontSize:'23px'}} className="card-title">Enjoy on your TV</div>
            <p style={{color:'#d7d7d7',padding:"3px"}} className="card-text">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
          </div>
            </div>
            <div className="col-md-3">
            <div className="card grdnt">
            <div style={{color:'white',fontWeight:"bold",padding:'3px 8px',fontSize:'23px'}} className="card-title">Download your shows to watch offline</div>
            <p style={{color:'#d7d7d7',padding:"3px"}} className="card-text">Save your favourites easily and always have something to watch.</p>
          </div>
            </div>
            <div className="col-md-3 ">
            <div className="card grdnt">
            <div style={{color:'white',fontWeight:"bold",padding:'3px 8px',fontSize:'23px'}} className="card-title">Watch everywhere</div>
            <p style={{color:'#d7d7d7',padding:"3px"}} className="card-text">Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.</p>
          </div>
            </div>
            <div className="col-md-3 ">
            <div className="card grdnt">
            <div style={{color:'white',fontWeight:"bold",padding:'3px 8px',fontSize:'23px'}}  className="card-title">Create profiles for kids</div>
            <p style={{color:'#d7d7d7',padding:"3px"}} className="card-text">Send kids on adventures with their favourite characters in a space made just for them — free with your membership.

</p>
          </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default More
