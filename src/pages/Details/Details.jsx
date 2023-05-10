import './Details.css'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const Details = () => {
  const { id } = useParams();
  
  useEffect(
    () => {
      async () => {
        
      } 
    }, [])

  return (

    <div className="details">
      <h1>Details of item { id}</h1>
    </div>
  )
}

export default Details