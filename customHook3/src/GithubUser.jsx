import { useGithubUser } from "./useGithubUser";

export function GithubUser({username}) {
  
  if(username){
    const {data, error, loading, handleRefreshData} = useGithubUser (username)
 
    return (
      <div>
        {loading && <h1>Loading ...</h1>}
        {error && <p>Errore</p>}
        {data && <h1>{data.login}</h1>}
        {data && <h1>{data.name}</h1>} {/* Name è null */}
        {data && <img src={data.avatar_url} />}
        <div>
          <button onClick={handleRefreshData}>Refetch</button>
        </div>
      </div>
    )

  } else{ 
    console.log("No username")
  }
 
}
