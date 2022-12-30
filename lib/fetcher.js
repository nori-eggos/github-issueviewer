export default async (...args) =>  {
    const res = await fetch(...args, {"body": {"name": 'name', "repo": 'fun'}}) //
    const response = res.json()
    return response
}