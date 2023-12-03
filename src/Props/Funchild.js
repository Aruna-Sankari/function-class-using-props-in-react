import React from 'react'
import './Card.css'
const Child = (props) => {
  console.log(props);
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Name:{props.n}</h2>
      <h3 style={{ textAlign: "center" }}>Age:{props.ag}</h3>
      <h4 style={{ textAlign: "center" }}>No 1:{props.o.a}</h4>
      <h5 style={{ textAlign: "center" }}>No 2:{props.a[2]}</h5>
      <div className="row">

        {
          props.pro.map((value, i) => {
            return <div key={i}>
              <div className="col">
                <div className="card">
                  <img src={value.img} alt="" />
                  <div className="con">
                    <h2>Name:{value.name}</h2>
                    <h5>Price:Rs.{value.price}</h5>
                  </div>
                  <br></br>
                  <div className="btn">
                    <button className="btn1">ADD TO CART</button>
                  </div>

                </div>
              </div>
            </div>

          })
        }


      </div>

    </div>
  )
}
export default Child;