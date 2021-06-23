import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { ALL_REPOS } from '../graphql/queries';

const useRepositories = () => {
  const [repositories, setRepositories] = useState();
  const [loading, setLoading] = useState(false);


  const fetchRepositories = async () => {
    setLoading(true);

    // //this is the version that uses the fetch API
    // const response = await fetch('http://172.31.7.241:5000/api/repositories');
    const response = useQuery(ALL_REPOS, {
      fetchPolicy: 'cache-and-network',
    });
    console.log(response);

    const json = await response.json();

    setLoading(false);
    setRepositories(json);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  console.log(repositories);
  return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;
