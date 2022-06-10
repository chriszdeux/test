import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { filterAll, filterBug, filterEnhancement, filterFeature, filterUI, filterUX } from '../../actions/filterBy';

export const SuggesstionsList = ({ data }) => {

  const dispatch = useDispatch();

  const handleAll = () => {
    dispatch(filterAll(data))
  }
  const handleUI = () => {
    dispatch(filterUI(data))
  }
  const handleUX = () => {
    dispatch(filterUX(data))
  }
  const handleEnhancement = () => {
    dispatch(filterEnhancement(data))
  }
  const handleBug = () => {
    dispatch(filterBug(data))
  }

  const handleFeature = () => {
    dispatch(filterFeature(data))
  }
  return (
    <ul className="suggestions__list">
      <li onClick={ handleAll } className="text--2"><h4>All</h4></li>
      <li onClick={ handleUI } className="text--2"><h4>UI</h4></li>
      <li onClick={ handleUX } className="text--2"><h4>UX</h4></li>
      <li onClick={ handleEnhancement } className="text--2"><h4>Enhancement</h4></li>
      <li onClick={ handleBug } className="text--2"><h4>Bug</h4></li>
      <li onClick={ handleFeature } className="text--2"><h4>Feature</h4></li>
    </ul>
  )
}
