import React from 'react'
import {Component} from 'react'
import Claschild from './Claschild.js'
class Clasparent extends Component{
    render(){
        let x=10;
        let name="aruna";
        let obj1={a:10,b:98};
        let arr=[10,20,30,40]
        let product = [{ img: "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/7/n/p/s-met66-metafab-original-imagsruzwbthpvwx.jpeg?q=70", name: "Kurti", price: 678, color: "blue" },
    { img: "https://rukminim2.flixcart.com/image/612/612/l4ln8nk0/sari/p/2/u/free-2535s934-samah-unstitched-original-imagfgq7pc2mc4vz.jpeg?q=70", name: "saree", price: 794, color: "pink" },
    { img: "https://rukminim2.flixcart.com/image/612/612/krntoy80/lehenga-choli/z/n/8/free-3-4-sleeve-future-wine-goroly-original-imag5ezdwczgyb5m.jpeg?q=70", name: "Lehenga", price: 500, color: "black" },
    { img: "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-dress/8/r/0/8-9-years-0044-ak-kashmir-garments-original-imaghy3drwuj8emd.jpeg?q=70", name: "frok", price: 890, color: "white" },
    { img: "https://rukminim2.flixcart.com/image/612/612/xif0q/top/s/f/s/s-sgf1026-top-shree-ganesh-fashion-original-imagmcj8szt3h2af.jpeg?q=70", name: "top", price: 400, color: "red" },
    { img: "https://rukminim2.flixcart.com/image/612/612/kf0087k0/legging/y/t/b/xl-lns-black-red-pink-leggingz-original-imafvjkvywfvprzf.jpeg?q=70", name: "leggings", price: 320, color: "orange" },
    { img: "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/q/r/y/l-r37-label-d11-original-imagu33qmnxncf9x.jpeg?q=70", name: "palazzo", price: 259, color: "green" },
    { img: "https://rukminim2.flixcart.com/image/612/612/xif0q/fabric/7/f/q/yes-3-m-unstitched-2-m-2-5-m-dmopem370740-soch-original-imagsz7zhzf9zphg.jpeg?q=70", name: "Chudithar", price: 467, color: "yellow" }]
        return(
            <div>
                <h1 style={{textAlign:"center"}}><u>Class Component</u></h1>
                <Claschild n={x} name={name} ob={obj1} a={arr} pro={product}/>
            </div>
        )
    

}
}
export default Clasparent;