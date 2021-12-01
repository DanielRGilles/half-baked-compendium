export default function FilterForm({types, filterChange, selectedType}) {
  return (
    <div>
      <h3>Filter Pokemon!</h3>
      <select
        value={selectedType}
        onChange={(event) => filterChange(event.target.value)}
      >
        <option value='all'>All</option>
        {types.map(({type}) => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select>
    </div>
  );
}
