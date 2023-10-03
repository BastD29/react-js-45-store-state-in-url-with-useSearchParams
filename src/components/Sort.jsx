export default function Sort({ sortField, sortOrder, onSortChange }) {
  return (
    <>
      <label>
        Sort by:
        <select
          value={sortField}
          onChange={(e) => onSortChange(e.target.value, sortOrder)}
        >
          <option value="name">Name</option>
          <option value="age">Age</option>
          <option value="city">City</option>
        </select>
      </label>
      <label>
        Order:
        <select
          value={sortOrder}
          onChange={(e) => onSortChange(sortField, e.target.value)}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </label>
    </>
  );
}
