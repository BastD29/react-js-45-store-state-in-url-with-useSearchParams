import React from "react";

export default function Select({ filters, onFilterChange }) {
  return (
    <>
      <label>
        Filter by city:
        <select
          value={filters.city}
          onChange={(e) => onFilterChange("city", e.target.value)}
        >
          <option value="all">All</option>
          <option value="new york">New York</option>
          <option value="detroit">Detroit</option>
          <option value="metropolis">Metropolis</option>
        </select>
      </label>
      <label>
        Filter by age:
        <select
          value={filters.age}
          onChange={(e) => onFilterChange("age", e.target.value)}
        >
          <option value="all">All</option>
          <option value="21">21</option>
          <option value="106">106</option>
          <option value="47">47</option>
        </select>
      </label>
    </>
  );
}
