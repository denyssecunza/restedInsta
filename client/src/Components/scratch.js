//fetch user
// fetch("http://localhost:3000/")
//   .then((res) => {
//     //console.log(res);
//     return res.json();
//   })
//   .then((data) => {
//     //console.log(data);
//     const user = data.map((name) => {
//       ///console.log(name.username);
//       setUser({ username: name.username });
//       //console.log(name);
//     });
//     //console.log(data[0].username);
//     return user;
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// {user && (
//   <ul id="repoList">
//     {user.map((user) => (
//       <div className="username">
//         <h6>{user}</h6>
//       </div>
//     ))}
//   </ul>
// )}{" "}

// fetch("http://localhost:3000/photos", {
//   method: "POST",
//   headers: {
//     //Accept: "application/json",
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(
//     "UPDATE photos",
//     `SET likes = ${likes}`,
//     `WHERE photo_id = ${e.id}`
//   ),
// });
