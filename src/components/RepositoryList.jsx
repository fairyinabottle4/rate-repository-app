import React, { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import useRepositories from '../hooks/useRepository';
import RepositoryListContainer from './RepositoryListContainer';


const RepositoryList = () => {
  const [sort, setSort] = useState();
  const [variables, setVariables] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery] = useDebounce(searchQuery, 500);

  const { repositories } = useRepositories(variables);

  const onChangeSearch = (query) => setSearchQuery(query);
  const onPress = (variables, sortBy) => {
    setSort(sortBy);
    setVariables(variables);
  };

  useEffect(() => {
    setVariables({ searchKeyword: debouncedSearchQuery });
  }, [debouncedSearchQuery]);

  return (
    <RepositoryListContainer
      sort={sort}
      onPress={onPress}
      repositories={repositories}
      searchQuery={searchQuery}
      onChangeSearch={onChangeSearch}
    />
  );
};

export default RepositoryList;
