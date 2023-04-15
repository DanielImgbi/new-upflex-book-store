import { useState, useReducer } from 'react';
import './Shop.css';
import { datas } from '../../assets/data/data';
import { Link } from "react-router-dom";
import Card from '../../components/Card/Card';
import Pagination from '../../components/pagination/Pagination';


const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { startIndex: state.startIndex + 48, endIndex: state.endIndex + 48 };
        case 'DECREMENT':
            return { startIndex: state.startIndex - 48, endIndex: state.endIndex - 48 };
        default:
            return state;
    }
}

const Shop = () => {
    const [data] = useState(datas);
    const [state, dispatch] = useReducer(reducer, { startIndex: 0, endIndex: 48 });
    
    return (
        <div className='shop'>
            <div className="shelf-img">
                <img src="../img/library.jpg" alt="shelf" />
            </div>

            <div className="shop-items">
                {
                    data.slice(state.startIndex, state.endIndex).map((item, index) =>(
                        <Link to={`/basket/${item.id}`} key={index} className='shop-item-link'>
                            <Card item={item} index={index}/>
                        </Link>
                    ))
                }                
            </div>
           
            <Pagination state={state} dispatch={ dispatch} datas={datas} />
        </div>
    )
}

export default Shop