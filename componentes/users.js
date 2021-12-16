const Users = ({ usuarios }) => {
  console.log({ usuarios });
  return (
    <ul className="list-group">
      {usuarios.map((user) => {
        const li = (
          <li className="list-group-item list-group-item-action">
            <h4 style={{color: '#FE5F55'}} >
              {user.first_name} {user.last_name}
            </h4>
            <p>{user.email}</p>
            <img src={user.avatar}></img>
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
