import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFilter } from "../hooks/useFilter";
import { users } from "../data/users";

export default function Test3() {
  const navigate = useNavigate();
  const { city, age, name } = useFilter({ city: "all", age: "all", name: "" });
  const [filters, setFilters] = useState({ city, name, age });

  useEffect(() => {
    navigate({
      search: `?city=${filters.city}&age=${filters.age}&name=${filters.name}`,
    });
  }, [filters, navigate]);

  const filteredUsers = users.filter((user) => {
    return (
      (filters.city === "all" ||
        user.city.toLowerCase() === filters.city.toLowerCase()) &&
      (filters.age === "all" || user.age === parseInt(filters.age)) &&
      (filters.name === "" ||
        user.name.toLowerCase().includes(filters.name.toLowerCase()))
    );
  });

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

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
        {filteredUsers.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} - {user.city}
          </li>
        ))}
      </ul>
    </>
  );
}
