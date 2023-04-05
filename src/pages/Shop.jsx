import { useState, useReducer } from 'react';
import { BsArrowRight, BsArrowLeft, BsStar } from 'react-icons/bs';
import '../style/Shop.css';
import {datas} from '../assets/data/data'


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
    const [state, dispatch] = useReducer(reducer, { startIndex: 0, endIndex: 5});
    
    console.log(state);
    // console.log(datas);
 

    return (
        <div className='shop'>
            <div className="shelf-img">
                <img src="../library.jpg" alt="shelf" />
            </div>

            <div className="shop-items">
                {
                    data.slice(state.startIndex, state.endIndex).map((item, index) =>(
                        <div className="shop-item" key={index} >
                            <img src='../readers.jpg' alt="book" />
                            <div className="book-title"> { item.title}{ index}</div>
                            <div className="stars">
                                <BsStar className='star-icon'/>
                                <BsStar className='star-icon'/>
                                <BsStar className='star-icon' />
                                <BsStar className='star-icon'/>
                                <BsStar className='star-icon'/>
                            </div>
                        </div>
                    ))
                }

                
            </div>
            <div className="pagination">
                {state.startIndex >= 1 ? <BsArrowLeft className='arrows' onClick={() => dispatch({type:'DECREMENT'})}/>:''}
                {state.endIndex >= datas.length ? '' : <BsArrowRight className='arrows' onClick={() => dispatch({ type: 'INCREMENT' })} />}
            </div>
        </div>
    )
}

export default Shop