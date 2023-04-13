import { useLocation, useHistory } from "react-router-dom";

export const useQueryParameter = (key: string) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  return searchParams.get(key);
};

interface UseReplaceQueryParameter {
  key: string;
  value: string;
}

export const useReplaceQueryParameter = () => {
  const location = useLocation();
  const history = useHistory();

  return ({ key, value }: UseReplaceQueryParameter) => {
    const searchParams = new URLSearchParams(location.search);
    if (value === undefined) {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
    }
    const newSearch = searchParams.toString();
    history.push(`${location.pathname}?${newSearch}`);
  };
};
