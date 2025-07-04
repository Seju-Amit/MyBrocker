import React, { useState } from "react";

function DifferentAccounts() {
  const [isHovered, setIsHovered] = useState(false);

  const textStyle = {
    border: isHovered ? "1px solid #e1e1e1" : "1px solid #287ED1",
  };

  const [isHovered1, setIsHovered1] = useState(true);

  const textStyle1 = {
    border: isHovered1 ? "1px solid #e1e1e1" : "1px solid #287ED1",
  };

  const [isHovered2, setIsHovered2] = useState(true);

  const textStyle2 = {
    border: isHovered2 ? "1px solid #e1e1e1" : "1px solid #287ED1",
  };

  const [isHovered3, setIsHovered3] = useState(true);

  const textStyle3 = {
    border: isHovered3 ? "1px solid #e1e1e1" : "1px solid #287ED1",
  };

  const [isHovered4, setIsHovered4] = useState(true);

  const textStyle4 = {
    border: isHovered4 ? "1px solid #e1e1e1" : "1px solid #287ED1",
  };

  return (
    <div className="container" style={{ marginTop: "0", marginBottom: "50px" }}>
      <h2
        className="text-center"
        style={{ color: "#424242", margin: "0 0 50px" }}
      >
        Explore different account types
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          className="col-3"
          style={textStyle}
          onMouseEnter={() => setIsHovered(false)}
          onMouseLeave={() => setIsHovered(true)}
        >
          <a
            style={{
              padding: "30px",
              borderRadius: "5px",
              cursor: "pointer",
              border: "1px solid #e1e1e1",
              textDecoration: "none",
              display: "inline-block",
              textAlign: "center",
            }}
          >
            <img
              src="media/images/acop-individual.svg"
              style={{
                pasition: "absolute",
                width: "42px",
                height: "37px",
                borderRadius: "50%",
                left: "-18px",
                padding: "6px",
              }}
            ></img>
            <h5
              style={{
                margin: "0 0 20px",
                display: "block",
                marginTop: "0px",
                // marginBottom: "20px",
                // marginBlockStart: "1em",
                // marginBlockEnd: "1em",
                // marginInlineStart: "0px",
                // marginInlineEnd: "0px",
                fontWeight: "400",
                unicodeBidi: "isolate",
              }}
            >
              individual account
            </h5>
            <p className="text-gray" style={{ margin: "16px 0 0" }}>
              Invest in equity, mutual funds and derivatives
            </p>
          </a>
        </div>
        <div
          className="col-3"
          style={textStyle1}
          onMouseEnter={() => setIsHovered1(false)}
          onMouseLeave={() => setIsHovered1(true)}
        >
          <a
            style={{
              padding: "30px",
              borderRadius: "5px",
              cursor: "pointer",
              border: "1px solid #e1e1e1",
              textDecoration: "none",
              display: "inline-block",
              textAlign: "center",
            }}
          >
            <img
              src="media/images/acop-huf.svg"
              style={{
                pasition: "absolute",
                width: "41px",
                height: "37px",
                borderRadius: "50%",
                left: "-18px",
                padding: "6px",
              }}
            ></img>
            <h5
              style={{
                margin: "0 0 20px",
                display: "block",
                marginTop: "0px",
                // marginBottom: "20px",
                // marginBlockStart: "1em",
                // marginBlockEnd: "1em",
                // marginInlineStart: "0px",
                // marginInlineEnd: "0px",
                fontWeight: "400",
                unicodeBidi: "isolate",
              }}
            >
              HUF Account
            </h5>
            <p className="text-gray" style={{ margin: "16px 0 0" }}>
              Make tax-efficient investments for your family
            </p>
          </a>
        </div>
        <div
          className="col-3"
          style={textStyle2}
          onMouseEnter={() => setIsHovered2(false)}
          onMouseLeave={() => setIsHovered2(true)}
        >
          <a
            style={{
              padding: "30px",
              borderRadius: "5px",
              cursor: "pointer",
              border: "1px solid #e1e1e1",
              textDecoration: "none",
              display: "inline-block",
              textAlign: "center",
            }}
          >
            <img
              src="media/images/acop-nri.svg"
              style={{
                pasition: "absolute",
                width: "41px",
                height: "36px",
                borderRadius: "50%",
                left: "-98px",
                padding: "6px",
              }}
            ></img>
            <h5
              style={{
                margin: "0 0 20px",
                display: "block",
                marginTop: "0px",
                // marginBottom: "20px",
                // marginBlockStart: "1em",
                // marginBlockEnd: "1em",
                // marginInlineStart: "0px",
                // marginInlineEnd: "0px",
                fontWeight: "400",
                unicodeBidi: "isolate",
              }}
            >
              NRI Account
            </h5>
            <p className="text-gray" style={{ margin: "16px 0 0" }}>
              Invest in equity, mutual funds, debentures, and more
            </p>
          </a>
        </div>
      </div>
      <br />
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          className="col-3"
          style={textStyle3}
          onMouseEnter={() => setIsHovered3(false)}
          onMouseLeave={() => setIsHovered3(true)}
        >
          <a
            style={{
              padding: "30px",
              borderRadius: "5px",
              cursor: "pointer",
              border: "1px solid #e1e1e1",
              textDecoration: "none",
              display: "inline-block",
              textAlign: "center",
            }}
            
          >
            <img
              src="media/images/acop-minor.svg"
              style={{
                pasition: "absolute",
                width: "42px",
                height: "37px",
                borderRadius: "50%",
                left: "-18px",
                padding: "6px",
              }}
            ></img>
            <h5
              style={{
                margin: "0 0 20px",
                display: "block",
                marginTop: "0px",
                // marginBottom: "20px",
                // marginBlockStart: "1em",
                // marginBlockEnd: "1em",
                // marginInlineStart: "0px",
                // marginInlineEnd: "0px",
                fontWeight: "400",
                unicodeBidi: "isolate",
              }}
            >
              Minor Account
            </h5>
            <p className="text-gray" style={{ margin: "16px 0 0" }}>
              Teach your little ones about money & invest for their future with
              them
            </p>
          </a>
        </div>
        <div
          className="col-3"
          style={textStyle4}
          onMouseEnter={() => setIsHovered4(false)}
          onMouseLeave={() => setIsHovered4(true)}
        >
          <a
            style={{
              padding: "30px",
              borderRadius: "5px",
              cursor: "pointer",
              border: "1px solid #e1e1e1",
              textDecoration: "none",
              display: "inline-block",
              textAlign: "center",
            }}
          >
            <img
              src="media/images/acop-corporate.svg"
              style={{
                pasition: "absolute",
                width: "41px",
                height: "37px",
                borderRadius: "50%",
                left: "-18px",
                padding: "6px",
              }}
            ></img>
            <h5
              style={{
                margin: "0 0 20px",
                display: "block",
                marginTop: "0px",
                // marginBottom: "20px",
                // marginBlockStart: "1em",
                // marginBlockEnd: "1em",
                // marginInlineStart: "0px",
                // marginInlineEnd: "0px",
                fontWeight: "400",
                unicodeBidi: "isolate",
              }}
            >
              Corporate / LLP/ Partnership
            </h5>
            <p className="text-gray" style={{ margin: "16px 0 0" }}>
              Manage your business surplus and investments easily
            </p>
          </a>
        </div>
        <div className="col-3">&nbsp;</div>
      </div>
    </div>
  );
}

export default DifferentAccounts;
