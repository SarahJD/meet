// const checkToken = async (accessToken) => {
//   const result = await fetch (
//     `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`
//   )
//     .then((res) => res.json())
//     .catch((error) => error.json());

//     return tokenCheck === false ? (
//       <div className="App">
//       <Login />
//       </div>
//       ) : (return (result.error ? false : true);
//       </div>);
// };

// const removeQuery = () => {
//   if (window.history.pushState &&
//   window.location.pathname) {
//   var newurl =
//   window.location.protocol +
//   "//" +
//   window.location.host +
//   window.location.pathname;
//   window.history.pushState("", "", newurl);
//   } else {
//   newurl = window.location.protocol + "//" +
//   window.location.host;
//   window.history.pushState("", "", newurl);
//   }
//   };

// const getAccessToken = async () => {

//   const getToken = async (code) => {
//     const getToken = async (code) => {
//       removeQuery();
//       const encodeCode = encodeURIComponent(code);
//       const { access_token } = await fetch(
//       `https://f1k17pnw2a.execute-api.us-east-1.amazonaws.c
//       om/dev/api/token/${encodeCode}`
//       )
//       .then((res) => {
//       return res.json();
//       })
//       .catch((error) => error);
//       Page 6
//       access_token &&
//       localStorage.setItem("access_token", access_token);
//       return access_token;
//       };
// };


// export default checkToken; 