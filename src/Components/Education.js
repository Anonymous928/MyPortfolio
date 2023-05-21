import React from 'react'
import './Education.css'
const iitk=require('./iitk.jpg')

export default function Education() {
  return (
    <div className='container-education' id='education'>
      <div className='photo'>
        <img src={iitk} alt='IIT Kanpur Image' id='iitk'/>
      </div>
      <div className="content">
        <h1 id="content-heading">Education</h1>
        {/* <p id="content-description">
            <ul>
                <li id='item1'>
                    I did my schooling in Kanpur.
                </li>
                <li>
                    I am currently in my second semester of studying Electrical Engineering at IIT Kanpur.
                </li>
                <li>
                    My areas of interests are Maths and Physics. I like to study them.
                </li>
            </ul>
        </p> */}
        <ul id='content-description'>
        <li id='item1'>
                    I did my schooling in Kanpur.
                </li>
                <li>
                    I am currently in my second semester of studying Electrical Engineering at IIT Kanpur.
                </li>
                <li>
                    My areas of interests are Maths and Physics. I like to study them.
                </li>
        </ul>
      </div>
    </div>
  )
}
