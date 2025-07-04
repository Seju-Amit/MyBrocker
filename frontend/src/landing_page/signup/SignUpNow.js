import React from "react";

function SignUpNow() {
  return (
      <div
        className="mt-5"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div style={{ paddingRight: "3rem"}}>
          <img
            src="media/images/account_open.svg"
            style={{ height: "500px", width: "500px" }}
            alt="Sign Up Now"
          />
        </div>
        <div style={{ }}>
          <form className="py-3 padding-right-3 margin-right-5">
            <h1 style={{color:"#4a4a4a", fontSize:"2.3rem"}}>Signup now</h1>
            <p className="text-muted">Or track your existing application</p>
            <div style={{display: "flex", alignItems: "center" ,borderRadius: "5px", border: "1px solid #bbb", height: "54px"}}>
              <span className="col-2 text-center" style={{borderRight: "1px solid #bbb", padding: "10px 0",alignItems: "center", display: "flex", justifyContent: "center"}}>
                <img src="media/images/india-flag.svg" alt></img>&nbsp;
                <span className="" style={{fontSize:"20px"}}>+91</span>
                <span style={{ display: "none" }}>
                  "NRI account? "
                  <a href="https://zerodha.com/open-account/nri">Click here</a>
                </span>
              </span>
              <input
                type="text"
                autoFocus
                min={1000000000}
                max={9999999999}
                name="mobile"
                placeholder="Enter your mobile number"
                required
                className="form-control mobile-input"
                style={{
                  border: "none",
                  outline: "none",
                  padding: "10px 15px",
                  fontSize: "1.2em",
                  width: "100%",
                }}
              ></input>
            </div>
            <br></br>
            <button
            //   className="px-5 mb-2"
              style={{
                backgroundColor: "#387ED1",
                color: "#fff",
                width: "65%",
                height: "54px",
                borderRadius: "3px",
                display: "inline-block",
                padding: " 10px 30px",
                textAlign: "center",
                fontSize: " 1.2em",
                lineHeight: "1.2em",
                fontWeight: "500",
                // backgroundColor: "rgba(0, 0, 0, 0)",
                border: "1px solid #bbb",
                cursor: "pointer",
              }}
            >
              Get OTP
            </button>
            <br></br>
            <br></br>
            <br></br>
            <p className="text-gray text-12">
              "By proceeding, you agree to the Zerodha "
              <a href="https://zerodha.com/terms-and-conditions">terms</a> "&"
              <a href="https://zerodha.com/privacy-policy">privacy policy</a>
            </p>
          </form>
        </div>
      </div>
  );
}

export default SignUpNow;
