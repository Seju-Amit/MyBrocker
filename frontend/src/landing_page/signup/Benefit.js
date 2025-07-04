import React from "react";

function Benefit() {
  return (
    <div className="mt-5 text-center" style={{ padding: "100px 40px" }}>
      <div
        className="row"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <div
          className="col-6"
          style={{
            position: "relative",
            right: "0",
            top: "-10px",
            right: "-30px",
            marginBottom: "40px",
          }}
        >
          <p className="text-center" style={{ margin: "16px 0 15px" }}>
            <img
              src="media/images/acop-benefits.svg"
              alt="Benefits"
              className="img-fluid"
              style={{ height: "233px", width: "350px", margin: "0 0 15px" }}
            />
          </p>
          <h2
            style={{
              margin: "0px 0px 50px",
              fontSize: "32px",
              width: "530px",
              height: "96px",
            }}
          >
            Benefits of opening a Zerodha demat account
          </h2>
        </div>
        <div className="col-6">
          <div
            style={{
              position: "relative",
              top: "-50px",
              left: "-60px",
              marginBottom: "40px",
            }}
          >
            <h4
              style={{
                fontWeight: "400",
                marginBottom: "20px",
                position: "relative",
                left: "-150px",
              }}
            >
              Unbeatable pricing
            </h4>
            <span
              className="text-muted"
              style={{
                position: "relative",
                left: "83px",
                margin: "16px 0 15px",
                fontSize: "16px",
                width: "528px",
              }}
            >
              Zero charges for equity & mutual fund investments. Flat ₹20 fees
              for intraday and F&O trades.
            </span>
          </div>
          <div
            style={{
              position: "relative",
              top: "-50px",
              left: "-60px",
              marginBottom: "40px",
            }}
          >
            <h4
              style={{
                fontWeight: "400",
                marginBottom: "20px",
                position: "relative",
                left: "-116px",
              }}
            >
              Best investing experience
            </h4>
            <p
              className="text-muted"
              style={{
                position: "relative",
                left: "79px",
                margin: "16px 0 15px",
                fontSize: "16px",
                width: "528px",
              }}
            >
              Simple and intuitive trading platform with an easy-to-understand
              user interface.
            </p>
          </div>
          <div
            style={{
              position: "relative",
              top: "-50px",
              left: "-60px",
              marginBottom: "40px",
            }}
          >
            <h4
              style={{
                fontWeight: "400",
                marginBottom: "20px",
                position: "relative",
                left: "-132px",
              }}
            >
              No spam or gimmicks
            </h4>
            <p
              className="text-muted"
              style={{
                position: "relative",
                left: "76px",
                margin: "16px 0 15px",
                fontSize: "16px",
                width: "528px",
              }}
            >
              Committed to transparency — no gimmicks, spam, "gamification", or
              intrusive push notifications.
            </p>
          </div>
          <div
            style={{
              position: "relative",
              top: "-50px",
              left: "-60px",
              marginBottom: "40px",
            }}
          >
            <h4
              style={{
                fontWeight: "400",
                marginBottom: "20px",
                position: "relative",
                left: "-134px",
              }}
            >
              The Zerodha universe
            </h4>
            <p
              className="text-muted"
              style={{
                position: "relative",
                left: "90px",
                margin: "16px 0 15px",
                fontSize: "16px",
                width: "528px",
              }}
            >
              More than just an app — gain free access to the entire ecosystem
              of our partner products.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefit;
