import React from "react";

import QRCode from "react-qr-code";

const Github = () => {
  return (
    <QRCode value="https://github.com/fathizjm/KiaOraRB" size={40}
    style={{display:'flex',justifyContent:'center',paddingTop:'10%', height: "auto", maxWidth: "100%", width: "100%" }}
   
    viewBox={`0 0 256 256`}
    />
  )
}

export default Github