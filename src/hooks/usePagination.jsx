import { useSearchParams } from "react-router-dom";

export const usePagination = (defaultPage = 1, defaultSize = 2) => {
  const [searchParams] = useSearchParams();

  const getPageValue = (key, defaultValue) => {
    const value = parseInt(searchParams.get(key), 10);
    return Number.isNaN(value) ? defaultValue : value;
  };

  const page = getPageValue("page", defaultPage);
  const size = getPageValue("size", defaultSize);

  return { page, size };
};
