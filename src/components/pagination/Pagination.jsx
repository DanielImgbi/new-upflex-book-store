import React from 'react';
import './Pagination.css'
import { BsArrowRight, BsArrowLeft} from 'react-icons/bs';

const Pagination = ({state, dispatch, datas}) => {
  return (
    <div className="pagination">
        {state.startIndex >= 1 ? <BsArrowLeft className='arrows' onClick={() => dispatch({type:'DECREMENT'})}/>:''}
        {state.endIndex >= datas.length ? '' : <BsArrowRight className='arrows' onClick={() => dispatch({ type: 'INCREMENT' })} />}
    </div>
  )
}

export default Pagination