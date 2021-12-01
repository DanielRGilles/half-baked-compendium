export default function SearchForm({ name, handleSubmit, handleNameChange }) {
  return (
    <form aria-label="searchForm" onSubmit={handleSubmit}>
      <h3>Search a Pokemon!</h3>
      <label htmlFor="pokename">Name:</label>
      <input
        id="pokename"
        name="name"
        type="text"
        onChange={(e) => handleNameChange(e.target.value)}
        value={name}
      />
      <button type="submit">PokeSearch!</button>
    </form>
  )
}
