import { useRouter } from 'next/router'

const Users = ({ usuarios }) => {
  //console.log({ usuarios });
  const router = useRouter();

  const handleClick = (id)=>{
    router.push( `/users/${id}`)
  }
  return (
    <ul className="list-group">
      {usuarios.map((user) => {
        const li = (
          <li onClick={() => handleClick(user.id)} className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" key={user.id}>
            <h4 style={{color: '#FE5F55'}} >
              {user.first_name} {user.last_name}
            </h4>
            <h5>{user.email}</h5>
            <img src={user.avatar} alt={user.id + user.first_name} style={{borderRadius: "50%"}}></img>
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
