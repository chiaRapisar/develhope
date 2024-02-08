import { useEffect } from "react";
import { useGithubUser } from "./useGithubUser";

export function GithubUser({ username }) {
  const {data, loading, error, fetchGithubUser} = useGithubUser ()
 
  useEffect(() => {
    fetchGithubUser(username)}, [username]);


  return (
    <div>
      {loading && <h1>Loading ...</h1>}
      {data && <h1>{data.login}</h1>}
      {data && <h1>{data.name}</h1>} {/* Name è null */}
      {data && <img src={data.avatar_url} />}
    </div>
  );
}
