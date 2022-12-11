import React, { useEffect } from 'react';
import Parser from 'html-react-parser';

export default function App() {
  const user = JSON.parse(localStorage.getItem("sheyresume-user"));

useEffect(() => {
  const script = document.createElement('script');
  

  script.src = 'https://cdn.jsdelivr.net/gh/Rapsssito/github-profile-badge@latest/src/widget.min.js';
  script.async = true;
  script.defer = true;

  document.body.appendChild(script);

  return () => {
    document.body.removeChild(script);
  };
}, []);

  

return (
 <>
 <div >{Parser(user.Githublink)}</div>
</>

);
}


























// import React, { useEffect } from 'react';


// export default function App() {
//   useEffect(() => {
//     const script = document.createElement('script');

//     script.src = 'https://cdn.jsdelivr.net/gh/Rapsssito/github-profile-badge@latest/src/widget.min.js';
//     script.async = true;
//     script.defer = true;

//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div className="github-profile-badge" data-user="fathizjm" style={{ display:'flex',justifyContent:'center',paddingTop:'10px' }} ></div>
// );
// }