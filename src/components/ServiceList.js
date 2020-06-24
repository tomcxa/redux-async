import React, { useEffect } from 'react'
import {
  useHistory,
} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import { removeService, fetchServices } from '../actions/actionCreators';
import Loader from './Loader'

function ServiceList(props) {
  const history = useHistory()
  const {items, loading, error} = useSelector(state => state.serviceList);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchServices(dispatch)
  }, [dispatch])

  const handleRemove = id => {
    removeService(dispatch, id);
  }

  const handleEdit = id => {
    history.push(`/services/${id}`)
  }

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Something went wrong try again</p>;
  }

  return (
    <ul>
      {items.map(o => (
        <li key={o.id}>
          {o.name} {o.price}
          <button onClick={() => handleRemove(o.id)}>Delete</button>
          <button onClick={() => handleEdit(o.id)}>
            Edit
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ServiceList
