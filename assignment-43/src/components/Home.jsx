import React from 'react'
import './Home.css'
import ImgSecure from '../components/shield.png'
import ImgUI from '../components/ui.png'
import ImgLike from '../components/thumb-up.png'
import ImgBrain from '../components/brain-organ.png'

const Home = () => {
  return (
    <div>
      <p className='title text-primary'>Quick Note📓</p>
      <p className='subtitle text-secondary'>
        A simple note-taking application that allows you to add, view, and delete notes.
      </p>
      <div>
        <h2>Why should use Quick Note?</h2>
        <div className='feature'>
          <img src={ImgSecure} alt="Secure" className='img-icon' />
          <p>
            Securely store your notes in the cloud, ensuring they are always accessible from any device.
          </p>
        </div>
        <div className='feature'>
          <img src={ImgUI} alt="User Interface" className='img-icon' />
          <p>
            User-friendly interface that makes it easy to add, view, and delete notes.
          </p>
        </div>
        <div className='feature'>
          <img src={ImgLike} alt="Secure" className='img-icon' />
          <p>
            Simple and intuitive design that allows you to focus on your notes without distractions.
          </p>
        </div>
        <div className='feature'>
          <img src={ImgBrain} alt="Secure" className='img-icon' />
          <p>
            Securely store your notes in the cloud, ensuring they are always accessible from any device.
          </p>
        </div>
      </div>
      <div className='btn-container'>
        <button className='btn btn-primary'>Add Note</button>
        <button className='btn btn-secondary'>View Notes</button>
      </div>
    </div>
  )
}

export default Home