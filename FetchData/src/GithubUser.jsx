import { useEffect, useState } from "react";

export function GithubUser({ username }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchGithubUser(username) {
    setLoading(true);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      console.log(data);

      setData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchGithubUser(username);
  }, [username]);
  return (
    <div>
      {loading && <h1>Loading ...</h1>}
      {data && <h1>{data.login}</h1>}
      {data && <h1>{data.name}</h1>} {/* Name è null */}
      {data && <img src={data.avatar_url} />}
    </div>
  );
}
