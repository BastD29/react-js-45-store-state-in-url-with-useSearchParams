import { useSearchParams } from "react-router-dom";

export const useFilter = (defaultFilters = {}) => {
  const [searchParams] = useSearchParams();

  const getFilterValue = (key, defaultValue) => {
    return searchParams.get(key) || defaultValue;
  };

  const city = getFilterValue("city", defaultFilters.city || "all");
  const age = getFilterValue("age", defaultFilters.age || "all");
  const name = getFilterValue("name", defaultFilters.name || "");

  return { city, age, name };
};
