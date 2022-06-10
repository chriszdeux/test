import React from 'react'
import { useDispatch } from 'react-redux';
import { filterAll, filterBug, filterEnhancement, filterFeature, filterUI, filterUX } from '../../actions/filterBy';
import { orderLeastComments, orderLeastVotes, orderMostComments, orderMostVotes } from '../../actions/orderBy';

export const DropdownFilter = ({ values }) => {

  const { data, handleIsOpen } = values
  const dispatch = useDispatch();

  const handleMostVotes = () => {
    dispatch(orderMostVotes(data))
    handleIsOpen(false)
  }

  const handleLeastVotes = () => {
    dispatch(orderLeastVotes(data))
    handleIsOpen(false)
  }

  const handleMostComments = () => {
    dispatch(orderMostComments(data))
    handleIsOpen(false)
  }

  const handleLeastComments = () => {
    dispatch(orderLeastComments(data))
    handleIsOpen(false)
  }

  return (
    <ul className="category__select" style={{ width: '35rem' }}>
      <li onClick={ handleMostVotes } > Most Upvotes </li>
      <li onClick={ handleLeastVotes } > Least Upvotes </li>
      <li onClick={ handleMostComments } >Most Comments </li>
      <li onClick={ handleLeastComments } > Least Comments </li>
    </ul>
  )
}
