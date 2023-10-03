import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useFilter } from "../hooks/useFilter";
import { usePagination } from "../hooks/usePagination";

import { users } from "../data/users";

import Pagination from "./Pagination";
import Select from "./Select";
import Search from "./Search";
import Users from "./Users";
import useSort from "../hooks/useSort";
import Sort from "./Sort";

export default function Test4() {
  const navigate = useNavigate();

  const { city, age, name } = useFilter({ city: "all", age: "all", name: "" });
  const { page, size } = usePagination(1, 2);
  const { sortField, sortOrder } = useSort("name", "asc");

  const [filters, setFilters] = useState({ city, name, age });
  const [currentPage, setCurrentPage] = useState(page);
  const [currentSort, setCurrentSort] = useState({
    sortField: "name",
    sortOrder: "asc",
  });

  useEffect(() => {
    navigate({
      search: `?city=${filters.city}&age=${filters.age}&name=${filters.name}&page=${currentPage}&size=${size}&sortField=${currentSort.sortField}&sortOrder=${currentSort.sortOrder}`,
    });
  }, [filters, sortField, sortOrder, currentPage, currentSort, size, navigate]);

  // ** filtering logic to be moved into backend, only here for understanding
  let filteredUsers = users.filter((user) => {
    return (
      (filters.city === "all" ||
        user.city.toLowerCase() === filters.city.toLowerCase()) &&
      (filters.age === "all" || user.age === parseInt(filters.age)) &&
      (filters.name === "" ||
        user.name.toLowerCase().includes(filters.name.toLowerCase()))
    );
  });

  // ** sorting logic to be moved into backend, only here for understanding
  const sortedUsers = filteredUsers.sort((a, b) => {
    return currentSort.sortOrder === "asc"
      ? a[currentSort.sortField] > b[currentSort.sortField]
        ? 1
        : -1
      : a[currentSort.sortField] < b[currentSort.sortField]
      ? 1
      : -1;
  });

  // ** pagination logic to be moved into backend, only here for understanding
  const paginatedUsers = sortedUsers.slice(
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

  const handleSortChange = (field, order) => {
    setCurrentSort({ sortField: field, sortOrder: order });
  };

  const totalPages = Math.ceil(filteredUsers.length / size);

  return (
    <>
      <Sort
        sortField={sortField}
        sortOrder={sortOrder}
        onSortChange={handleSortChange}
      />
      <Select filters={filters} onFilterChange={handleFilterChange} />
      <Search filters={filters} onFilterChange={handleFilterChange} />
      <Users paginatedUsers={paginatedUsers} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
}
