import { useLocation } from "react-router-dom";
import queryString, { ParsedQuery } from "query-string";

interface Search {
  search: string;
}

const useSearchQueryParam = () => {
    const { search } = useLocation();
    const parsed: ParsedQuery = queryString.parse(search);
    const typedResult = (parsed as unknown) as Search;
    return [ typedResult.search ];
}

export { useSearchQueryParam };