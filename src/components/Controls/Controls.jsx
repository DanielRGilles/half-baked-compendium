import React from 'react'
import FilterForm from '../Forms/FilterForm'
import SearchForm from '../Forms/SearchForm'
import './Controls.css'

export default function Controls({
  name,
  handleSubmit,
  handleNameChange,
  types,
  filterChange,
  selectedType
}) {
  return (
    <div className="controlsContainer">
      <SearchForm name={name} handleSubmit={handleSubmit} handleNameChange={handleNameChange} />
      <FilterForm types={types} filterChange={filterChange} selectedType={selectedType} />
    </div>
  )
}
