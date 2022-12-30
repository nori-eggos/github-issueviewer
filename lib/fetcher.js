export default async (...args) =>  {
    //console.log('fetcher');
    const res = await fetch(...args, {"body": {"name": 'name', "repo": 'fun'}}) //
    const response = res.json()
    //console.log(response);
    return response
}