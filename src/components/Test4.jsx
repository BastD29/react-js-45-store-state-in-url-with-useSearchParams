import { useNavigate } from "react-router-dom";
import { usePagination } from "../hooks/usePagination";
import { useEffect, useState } from "react";
import { useFilter } from "../hooks/useFilter";
import { users } from "../data/users";
import Pagination from "./Pagination";

export default function Test4() {
  const navigate = useNavigate();

  const { city, age, name } = useFilter({ city: "all", age: "all", name: "" });
  const { page, size } = usePagination(1, 2);

  const [filters, setFilters] = useState({ city, name, age });
  const [currentPage, setCurrentPage] = useState(page);

  useEffect(() => {
    navigate({
      search: `?city=${filters.city}&age=${filters.age}&name=${filters.name}&page=${currentPage}&size=${size}`,
    });
  }, [filters, currentPage, size, navigate]);

  // ** filtering logic to be moved into backend, only here for understanding
  const filteredUsers = users.filter((user) => {
    return (
      (filters.city === "all" ||
        user.city.toLowerCase() === filters.city.toLowerCase()) &&
      (filters.age === "all" || user.age === parseInt(filters.age)) &&
      (filters.name === "" ||
        user.name.toLowerCase().includes(filters.name.toLowerCase()))
    );
  });

  // ** pagination logic to be moved into backend, only here for understanding
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * size,
    currentPage * size
  );

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setCurrentPage(1); // reset to first page when filters change
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const totalPages = Math.ceil(filteredUsers.length / size);

  return (
    <>
      <label>
        Filter by city:
        <select
          value={filters.city}
          onChange={(e) => handleFilterChange("city", e.target.value)}
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
          onChange={(e) => handleFilterChange("age", e.target.value)}
        >
          <option value="all">All</option>
          <option value="21">21</option>
          <option value="106">106</option>
          <option value="47">47</option>
        </select>
      </label>
      <label>
        Search by name:
        <input
          type="text"
          value={filters.name}
          onChange={(e) => handleFilterChange("name", e.target.value)}
        />
      </label>
      <ul>
        {paginatedUsers.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} - {user.city}
          </li>
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
}
