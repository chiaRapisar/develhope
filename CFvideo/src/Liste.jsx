import "./Liste.css";
export function Liste({ liste }) {
  // const admin = liste.filter((user)=>user.isAdmin === true)
  return (
    <>
      <h1>Liste</h1>
      <div>
        {liste.map((user) => {
          return  user.isAdmin  ? (
              <div className="listItem" key={user.id}>
                <p>{user.username}</p>
                <p>{user.email}</p>
                <p>{user.age}</p>
                <p>{user.isAdmin.toString()}</p>
                {/* //react non renderizza un booleano. Dobbiamo trasformarlo in stringa. */}
              </div>
            ) : (<p key={user.id}>{user.username} is not admin</p>
          );
        })}
        
      </div>
    </>
  );
}
