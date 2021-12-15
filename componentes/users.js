const Users = ({ usuarios }) => {
  console.log({ usuarios });
  return (
    <ul>
      {usuarios.map((user) => {
        const li = (
          <li>
            <h4 style={{color: '#FE5F55'}} >
              {user.name}-<h5>@{user.username}</h5>
            </h4>
            <p>{user.email}</p>
          </li>
        );
        return li;
      })}
    </ul>
  );
};

export default Users;

/*
<ul>
        {
        usuarios.map((user)=>{
            <li>
            <h4>{user.name}- @{user.username}</h4>
            </li>
        })
    }
    </ul>
*/
