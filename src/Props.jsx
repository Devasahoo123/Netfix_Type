import React from 'react'
import Sdata from './Sdata'
import Cards from './Cards'

function nCards(val){
    return (
        <Cards
            imgsrc={val.imgsrc}
            title={val.title}
            sname={val.sname}
            link={val.link}
        />
    )
}

function Props() {
  return (
    <>
        <h1 className='heading_style'>top 6 netfix moviese in 2023</h1>
        {Sdata.map(nCards)}
        
     </>
  )
}

export default Props
