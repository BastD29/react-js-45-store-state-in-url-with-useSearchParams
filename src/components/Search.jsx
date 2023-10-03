import React from "react";

export default function Search({ filters, onFilterChange }) {
  return (
    <>
      <label>
        Search by name:
        <input
          type="text"
          value={filters.name}
          onChange={(e) => onFilterChange("name", e.target.value)}
        />
      </label>
    </>
  );
}
