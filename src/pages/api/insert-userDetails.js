
export const config = {
    runtime: "experimental-edge",
};

export default async function handler(req) {
    try {
        const json = await req.json();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Hasura-Client-Name", "hasura-console");
        myHeaders.append("x-hasura-admin-secret", "52Dy5h9G#;Sy2owQ2RYWWWk67jinYUL*");

        var graphql = JSON.stringify({
            query: `mutation userDetails($objects: [userDetails_insert_input!]! ) {
                insert_userDetails(objects: $objects) {
                  affected_rows
                  returning{
                    id
                  }
                }
              }`,
              variables: {
                objects: json
              }
        })
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: graphql,
            redirect: 'follow'
        };

        const resp = await fetch("https://xxmrosflewhpkjxiqhde.hasura.eu-central-1.nhost.run/v1/graphql", requestOptions)
        // console.log(resp.json())
        const res = await resp.json();
        console.log(res);
        const response = new Response(
            JSON.stringify({ userData:  res}),
            {
                status: 200,
                headers: {
                    "content-type": "application/json",
                },
            }
        );

        return response;
    } catch (e) {
        return new Response(null, { status: 400, statusText: "Bad Request" });
    }
}
