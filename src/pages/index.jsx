import React from "react";
import HomeDefault from "../components/homes/homeDefault";
import SEO from "../components/seo";
import { Wrapper } from "../layout";
import useNHost from "../hooks/useNHost";

// stripePromise.then((response) => console.log("stripe promise", response));

const index = () => {
  const nhost = useNHost();

  const token = nhost.auth.getUser();
  nhost.auth.onTokenChanged(() => {
    console.log("xtc ==>", "auth token in changed");
    let newToken = nhost.auth.getAccessToken();
    let data = nhost.auth.getDecodedAccessToken();
    let user = nhost.auth.getUser();
    let auth = nhost.auth.isAuthenticated();
    console.log("xtc new token ==>", newToken, data, user, auth);
  });
  console.log("xtc ==>", token);

  return (
    <Wrapper>
      <SEO pageTitle={"Home"} />
      <HomeDefault />
    </Wrapper>
  );
};

export default index;
