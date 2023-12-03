import React from 'react'
import {Component} from 'react'
class Claschild extends Component{
    render(){
        console.log(this.props);
        return(
            <div>
                <h1 style={{textAlign:"center"}}>No 1:{this.props.n}</h1>
                <h2 style={{textAlign:"center"}}>Name:{this.props.name}</h2>
                <h3 style={{textAlign:"center"}}>No 2:{this.props.ob.b}</h3>
                <h4 style={{textAlign:"center"}}>No 3:{this.props.a[1]}</h4>
                <div className="row">
                    {
                        this.props.pro.map((e,i)=>{
                            return <div key={i}>
                                <div className="col">
                                    <div className="card">
                                        <img src={e.img} alt="" />
                                        <div className="card-con">
                                        <h2>Name:{e.name}</h2>
                                        <h5>Price:Rs.{e.price}</h5>
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
}
export default Claschild