import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-native";
import { GET_REPOSITORY } from "../graphql/queries";
import RepositoryDisplay from "./RepositoryDisplay";

const RepositoryPage = () => {
  const { id } = useParams();
  console.log(id);
  const { loading, data } = useQuery(GET_REPOSITORY, {
    variables: { id },
  });
  
  if (loading) return null;
  console.log(data);
  return (
    <RepositoryDisplay repo={data.repository} />
  );
};

export default RepositoryPage;
