import React from 'react'
import './index.css'
function Cards(props) {
  return (

    <>
      <div className="cards">
        <div className='card'>
            <img src={props.imgsrc} alt="myPic" className='card_img'/>
            <div className='card_info'>
                <br />
                <span className='card_title'>{props.title}</span>
                <br />
                <h3 className='card_title'>{props.sname}</h3>
                <br />
                <a href={props.link} target='_blank'>
                    
                        <button className='btn' >Watch Now</button>
                    
                </a>
            </div>
        </div>

    </div>
    </>
  )
}

export default Cards
