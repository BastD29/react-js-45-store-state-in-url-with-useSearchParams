import { useSearchParams } from "react-router-dom";

export default function useSort(
  defaultSortField = "name",
  defaultSortOrder = "asc"
) {
  const [searchParams] = useSearchParams();

  const getSortValue = (key, defaultValue) => {
    return searchParams.get(key) || defaultValue;
  };

  const sortField = getSortValue("sortField", defaultSortField);
  const sortOrder = getSortValue("sortOrder", defaultSortOrder);

  return { sortField, sortOrder };
}
