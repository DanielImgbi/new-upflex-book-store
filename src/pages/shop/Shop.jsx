import { useState, useReducer } from 'react';
import './Shop.css';
import { datas } from '../../assets/data/data';
import Card from '../../components/Card/Card';
import Pagination from '../../components/pagination/Pagination';


const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { startIndex: state.startIndex + 5, endIndex: state.endIndex + 5 };
        case 'DECREMENT':
            return { startIndex: state.startIndex - 5, endIndex: state.endIndex - 5 };
        default:
            return state;
    }
}

const Shop = () => {
    const [data] = useState(datas);
    const [state, dispatch] = useReducer(reducer, { startIndex: 0, endIndex:5 });
    
    return (
        <div className='shop'>
            <div className="shop-items">
                {
                    data.slice(state.startIndex, state.endIndex).map((item, index) =>(
                        <div key={index} className='shop-item-div'>
                            <Card item={item} index={index}/>
                        </div>
                    ))
                }                
            </div>
           
            <Pagination state={state} dispatch={ dispatch} datas={datas} />
        </div>
    )
}

export default Shop