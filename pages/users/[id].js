import { useRouter } from "next/router";
import fetchI from "isomorphic-fetch";
import Head from "next/head";

const UserProfile = ({ data }) => {
  const router = useRouter();
  const { id } = router.query;
  if (!data)
    return (
      <div>
        <Head>
          <title>Not Found</title>
          <link
            rel="StyleSheet"
            href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/lux/bootstrap.min.css"
            type="text/css"
          />
        </Head>
        <h2 className="display-1">404 Not Found</h2>{" "}
      </div>
    );
  return (
    <div>
      <Head>
        <title>Profile {id}</title>
        <link
          rel="StyleSheet"
          href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/lux/bootstrap.min.css"
          type="text/css"
        />
      </Head>
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={data.avatar} alt={id} />
        <div className="card-body">
          <h5 className="card-title">{data.first_name}</h5>
          <p className="card-text">
            {data.last_name}-{data.email}
          </p>
          <a className="btn btn-primary">Delete</a>
        </div>
      </div>
    </div>
  );
};

UserProfile.getInitialProps = async (ctx) => {
  const { id } = ctx.query;

  const res = await fetchI(`https://reqres.in/api/users/${id}`);
  const json = await res.json();
  const data = json.data;
  return { data };
};
export default UserProfile;
