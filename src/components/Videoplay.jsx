import React from 'react'

const Videoplay = () => {
  return (
    <section className="videoplay">
    <div className="video">
      
    <video
      autoPlay
      loop
      muted
      className="videop"
    >
      <source src="public/video1 (2).mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    </div>
    </section>
  )
}

export default Videoplay
