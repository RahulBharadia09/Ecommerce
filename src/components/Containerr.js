import React from 'react'

const Containerr = () => {
  return (
    <section className={props.class1}>
    <div className="container">
        {props.children}
    </div>
      
    </section>
  )
}

export default Containerr
