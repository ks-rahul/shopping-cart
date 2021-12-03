import Layout from "../components/Layout";

function About({ userData }) {
  console.log("sadsad", userData);

  return (
    <Layout title="About us">
      <div className="container">
        <h1>About</h1>
        <p>Name:- {userData.name}</p>
        <p>Email:- {userData.email}</p>
        <p>Username:- {userData.username}</p>
        <p>Phone:- {userData.phone}</p>
        <p>Website:- {userData.website}</p>
        <strong>Address:</strong>
        <p>Street:- {userData.address.street}</p>
        <p>Suite:- {userData.address.suite}</p>
        <p>City:- {userData.address.city}</p>
        <p>Zip:- {userData.address.zipcode}</p>
        <p>Lat:- {userData.address.geo.lat}</p>
        <p>Long:- {userData.address.geo.lng}</p>
        <strong>Company:</strong>
        <p>Name:- {userData.company.name}</p>
        <p>Phrase:- {userData.company.catchPhrase}</p>
        <p>BS:- {userData.company.bs}</p>
      </div>
    </Layout>
  );
}

export async function getStaticProps(ctx) {
  let res = await fetch("http://jsonplaceholder.typicode.com/users/2");
  let data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      userData: data,
    },
    revalidate: 10,
  };
}

export default About;
