import React from "react";

function InvesmentOp() {
  return (
    <div>
      <div className="text-center mt-5 mb-5">
        <h1 style={{ fontSize: "2.15rem", color: "#4a4a4a" }}>
          Investment options with Zerodha demat account
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          margin: "4rem 4rem 4rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2rem",
            paddingLeft: "2rem",
          }}
        >
          <div >
            <img
              src="media/images/stocks-acop.svg"
              alt="Stocks Invest"
              style={{ height: "auto", margin: "0 auto",paddingRight: "2rem" }}
            />
          </div>
          <div>
            <h2 style={{ color: "#4a4a4a" }}>Stocks</h2>
            <span>Invest in all exchange-listed securities</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2rem",
            // paddingLeft: "1rem",

          }}
        >
          <div className="padding-right-2">
            <img
              src="media/images/mf-acop.svg"
              alt="Stocks Invest"
              style={{ height: "auto", margin: "0 auto",paddingRight: "2rem" }}
            />
          </div>
          <div>
            <h2 style={{ color: "#4a4a4a" }}>Mutual funds</h2>
            <span>Invest in commission-free direct mutual funds</span>
          </div>
        </div>
      </div>
      <div
        style={{
          //   marginLeft: "5.9rem",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          margin: "4rem 4rem 4rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2rem",
            paddingLeft: "4rem",
          }}
        >
          <div >
            <img
              src="media/images/ipo-acop.svg"
              alt="Stocks Invest"
              style={{ height: "auto", margin: "0 auto",paddingRight: "2rem"}}
            />
          </div>
          <div>
            <h2 style={{ color: "#4a4a4a" }}>IPO</h2>
            <span>Apply to the latest IPOs instantly via UPI</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2rem",
            paddingLeft: "1rem",

          }}
        >
          <div >
            <img
              src="media/images/fo-acop.svg"
              alt="Stocks Invest"
              style={{ height: "auto", margin: "0 auto", paddingRight: "2rem" }}
            />
          </div>
          <div>
            <h2 style={{ color: "#4a4a4a" }}>Futures & options</h2>
            <span>Hedge and mitigate market risk through simplified F&O trading</span>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button style={{width:"15rem", height:"3rem", backgroundColor:"#387ED1", fontWeight:"600", color:"white", border:"1px solid white", borderRadius:"5px", fontSize:"1.2rem", padding:"1px 6px"}}><span style={{position:"relative", top:"0"}}>Explore Investment</span></button>
      </div>
      {/* <div style={{
    display: grid; 
    grid-template-columns: repeat(2, 1fr); 
    grid-template-rows: repeat(2, 1fr); 
    gap: 20px;
    }}>
  <div style={{      
      padding: 20px; 
      background-color: #e6eef5; 
      border-radius: 5px; 
      display: flex; 
      flex-direction: column; 
      align-items: center; 
      text-align: center;
    }}>
    <div style={{
        width: 50px; 
        height: 50px; 
        margin-bottom: 10px;
    }}></div>
    <h3>Stocks</h3>
    <p>Invest in all exchange-listed securities</p>
  </div>
  <div style={{
      padding: 20px; 
      background-color: #e6eef5; 
      border-radius: 5px; 
      display: flex; 
      flex-direction: column; 
      align-items: center; 
      text-align: center;
    }}>
    <div style={{
        width: 50px; 
        height: 50px; 
        margin-bottom: 10px;
    }}></div>
    <h3>Mutual funds</h3>
    <p>Invest in commission-free direct mutual funds</p>
  </div>
  <div style={{      
      padding: 20px; 
      background-color: #e6eef5; 
      border-radius: 5px; 
      display: flex; 
      flex-direction: column; 
      align-items: center; 
      text-align: center;}}
  >
    <div style={{
        width: 50px; 
        height: 50px; 
        margin-bottom: 10px;}}
    ></div>
    <h3>IPO</h3>
    <p>Apply to the latest IPOs instantly via UPI</p>
  </div>
  <div style={{padding: "20px" 
      backgroundColor: "#e6eef5" 
      border-radius: "5px", 
      display: flex; 
      flex-direction: column; 
      align-items: center; 
      text-align: center;}}
  >
    <div style={{
        width: 50px; 
        height: 50px; 
        margin-bottom: 10px;}}
    ></div>
    <h3>Futures & options</h3>
    <p>Hedge and mitigate market risk through simplified F&O trading</p>
  </div>
</div>  */}
    <br/>
      <br/>
      <br/>
    </div>
  );
}

export default InvesmentOp;
