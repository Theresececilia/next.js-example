export async function GET(request) {
  //handle GET request for /api/users
  //Retrive users from the database or any data source
   const users = [
      { id: 1, name: 'therese' },
      { id: 2, name: 'therese' },
      { id: 3, name: 'therese' },
    ];
  
  // Send the users as a response
  return new Response(JSON.stringify(users))
}
