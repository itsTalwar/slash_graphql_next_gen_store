import fetch from 'cross-fetch';

fetch("https://assorted-ocean.us-west-2.aws.cloud.dgraph.io/admin", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9,hi-IN;q=0.8,hi;q=0.7",
    "content-type": "application/json;charset=UTF-8",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "x-auth-token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkdWlkIjoiMHg2MWUxIiwiZXhwIjoxNjAzNjYxMTg3LCJhdWQiOiJzL3Byb3h5IiwiaXNzIjoicy9hcGkifQ.RPzpsA9dsk5gkHkjzON7gPmheEDJLimgX0q2uXa8PhU"
  },
  "referrer": "https://slash.dgraph.io/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"query\":\"\\n    mutation updateGQLSchema($sch: String!) {\\n        updateGQLSchema(input: { set: { schema: $sch } }) {\\n            gqlSchema {\\n                schema\\n                generatedSchema\\n            }\\n        }\\n    }\\n\",\"variables\":{\"sch\":\"type ITaskStore {\\n    tasks: [ITask!]!\\n    selectedTask: String\\n}\\n\\ntype ITask {\\n    id: String!\\n    title: String!\\n}\"}}",
  "method": "POST",
  "mode": "cors"
}).then((data: any) =>{
  console.log(data)
});