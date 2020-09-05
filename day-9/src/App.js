import React from "react";
import data from "../data.js";
import Counter from "./components/counter/Counter";
import RocketFreshIcon from "./components/RocketIcon/RocketFreshIcon";
import RocketWowIcon from "./components/RocketIcon/RocketWowIcon";

console.log(data);
export default function App() {
  const showItems = (product, i) => {
    return (
      <tr key={product.id}>
        <td>{i+1}</td>
        <td>
          <input type={"checkbox"}/>
        </td>
        <td>
          <img src={product.img} alt={product.name} />
        </td>
        <td>
          {product.name}
          <hr />
          {!product.inventory &&
          <span style={{"color" : "red"}}>품절</span>}
          {product.inventory > 0 && product.inventory < 5 &&
          <span style={{"color" : "red"}}>{`품절임박 ${product.inventory}개 잔여`}</span>}
        </td>
        <td>
          {Intl.NumberFormat().format(product.price)}
        </td>
        <td>
          {!product.inventory && (
            <select disabled={true}>
              <option>1</option>
            </select>
          )}
          {product.inventory > 0 && (
            <select>
              {[...Array(10).keys()].map(num => (num+1 <= product.inventory) ? <option>{num+1}</option> : <option disabled={true}>{num+1}</option>)}
            </select>
          )}

        </td>
        <td>
          {Intl.NumberFormat().format(product.price * product.count)}
        </td>
        <td>
          {type(product)}
        </td>
      </tr>
    )
  }
  const type = ({type}) => {
    switch (type) {
      case "ROCKET_FRESH" : return <RocketFreshIcon />
      case "ROCKET_WOW" : return <RocketWowIcon />
      default : return ""
    }
  }
  return (
    <div>
      <table>
        <tbody>
        <tr><td colSpan={7}><h3>로켓프레시 상품</h3></td></tr>
        {data.products.filter(product => product.type === "ROCKET_FRESH").map(showItems)}
        <tr><td colSpan={7}><h3>로켓배송 상품(로켓와우 포함)</h3></td></tr>
        {data.products.filter(product => product.type === "ROCKET_WOW").map(showItems)}
        <tr><td colSpan={7}><h3>판매자배송 상품</h3></td></tr>
        {data.products.filter(product => product.type === "PARTNER").map(showItems)}
        </tbody>
      </table>
      {/*<ul>
        {data.products.map((product) => {
          return(
            <li key={product.id}>{product.name}</li>
          )
        })}
      </ul>*/}
    </div>
  )
}