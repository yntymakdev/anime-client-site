"use client";

import { FC } from "react";

import styles from "./Search.module.scss";
import SearchList from "./search-list/SearchList";
import SearchField from "@/components/ui/search-field/SearchField";
import { useSearch } from "./search-list/useSearch";

const Search: FC = () => {
  const { handleSearch, isSuccess, searchTerm, data } = useSearch();

  return (
    <div className={styles.search}>
      <SearchField handleSearch={handleSearch} searchTerm={searchTerm} />
      {isSuccess && <SearchList movies={data || []} />}
    </div>
  );
};

export default Search;
