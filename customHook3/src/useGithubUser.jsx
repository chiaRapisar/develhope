import useSWR from "swr"


export function useGithubUser (username) {
  const {data, error, mutate} = useSWR(`https://api.github.com/users/${username}`)
  const loading = !data && !error

  function handleRefreshData() {
    mutate()
    console.log(data)
  }

  return {data, error, loading, handleRefreshData}
}


// import { useState } from "react";

// export function useGithubUser() {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   async function fetchGithubUser() {
//     setLoading(true);
//     try {
//       const response = await fetch(`https://api.github.com/users/chiarapisar`);
//       const data = await response.json();
//       console.log(data);
//       setData(data);
//     } catch (error) {
//       setError(error);
//     } finally {
//       setLoading(false);
//     }
//   }

//   return {
//     data,
//     loading,
//     error,
//     fetchGithubUser,
//   };

// }
