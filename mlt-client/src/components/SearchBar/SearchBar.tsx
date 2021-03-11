import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { useSearchQueryParam } from "../../helpers/QueryStringHelper";

import PATH, { SEARCH_QUERY_PARAM } from "../../pages/path";

import icSearch from "../../assets/ic_Search.png";
import icSearch2x from "../../assets/ic_Search@2x.png";

import classes from "./SearchBar.module.scss";

const MAX_LENGTH_QUERY = 120;
const ICON_SEARCH_SIZE = 18;

const SearchBar = (): JSX.Element => {
  let history = useHistory();

  const [search] = useSearchQueryParam();

  const [currentSearch, setCurrentSearch] = useState<string>("");

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setCurrentSearch(e.currentTarget.value);
  };

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    if (currentSearch.trim().length) {
      setCurrentSearch(currentSearch.trim());
      history.push(
        `${PATH.ITEM_RESULTS_LIST}?${SEARCH_QUERY_PARAM}=${currentSearch}`
      );
    } else {
      setCurrentSearch("");
      console.info("Debería limpiar la lista de resultados?");
    }
  };

  useEffect(() => {
    search ? setCurrentSearch(search) : setCurrentSearch("");
  }, [search]);

  return (
    <form onSubmit={handleSubmit} className={classes.searchBar}>
      <div className={classes.fieldsContainer}>
        <input
          maxLength={MAX_LENGTH_QUERY}
          className={classes.inputSearch}
          type="text"
          name="search"
          id="search"
          placeholder="Nunca dejes de buscar..."
          value={currentSearch}
          onChange={handleChange}
          aria-label="Ingresa lo que quieras encontrar"
          autoFocus
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck="false"
          autoComplete="off"
        />
        <button className={classes.buttonSearch} type="submit">
          <img
            src={icSearch}
            alt="Buscar"
            aria-label="Buscar"
            srcSet={`${icSearch} 1x, ${icSearch2x} 2x`}
            width={ICON_SEARCH_SIZE}
            height={ICON_SEARCH_SIZE}
          />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
