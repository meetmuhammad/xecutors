// import moment from "moment";
export const config = {
  runtime: "experimental-edge",
};

export default async function handler(req) {
  try {
    const body = await req.json();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Hasura-Client-Name", "hasura-console");
    myHeaders.append(
      "x-hasura-admin-secret",
      "52Dy5h9G#;Sy2owQ2RYWWWk67jinYUL*"
    );

    var graphql = JSON.stringify({
      query: `mutation($object: blogs_insert_input!){
                insert_blogs_one(object: $object) {
                     id
                  title
                }
              }`,
      variables: {
        object: {
          title: body.title,
          created_at:body.created_at,
          updated_at:body.updated_at,
          description: body.description,
          views: 2,
          id: body.id,
          images: "test",
          user_id: "0fd0ec85-0ce3-4c4b-a49b-038f58444ba3",
        },
      },
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: graphql,
      redirect: "follow",
    };

    const resp = await fetch(
      "https://xxmrosflewhpkjxiqhde.hasura.eu-central-1.nhost.run/v1/graphql",
      requestOptions
    );
    // console.log(resp.json())
    const res = await resp.json();
    console.log(res);
    const response = new Response(JSON.stringify({ blog: res }), {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    });

    return response;
  } catch (e) {
    return new Response(null, { status: 400, statusText: "Bad Request" });
  }
}
