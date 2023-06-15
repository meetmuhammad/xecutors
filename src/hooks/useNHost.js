import React from 'react'
import { NhostClient } from '@nhost/nhost-js';


const nhost = new NhostClient({
subdomain: "xxmrosflewhpkjxiqhde",
region: "eu-central-1",
});

const useNHost = () => {
  return nhost;
}

export default useNHost