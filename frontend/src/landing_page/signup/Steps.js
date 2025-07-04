import React from "react";

function Steps() {
    return (
        <div className="container mt-5 text-center" style={{ marginBottom: "5rem" , backgroundColor: "#fafafa"}}>
            <h1 style={{fontSize:"2.1rem" ,color:"#4a4a4a", paddingTop:"3rem", paddingBottom:"2rem"}}>Steps to open a demat account with Zerodha</h1>
            <div className="row"  style={{ display: "flex",flexDirection:"row", marginTop: "2rem",boxSizing:"border-box" }}>
                <div className="six col text-center" style= {{ paddingright:"0"}}>
                    <img src="media/images/steps-acop.svg" alt="steps"></img>
                </div>
                <div className="six col ">
                    <br/>
                    <div style={{ display:"block", borderBottom:"1px solid #ddd",lineHeight:"1.7rem", fontWeight:"400", height:"4rem"}}>
                        <div className="text-center" style={{display:"inline-block", paddingRight:"2rem", border:"1px solid #dbdbdb", borderRadius:"50%", width:"30px", height:"30px", position:"relative",right:"0"}}>&nbsp;&nbsp;01</div>
                        <p style={{marginRight:"18rem",display:"inline-block", paddingLeft:"3rem", fontWeight:"500", fontSize:"1.3rem", paddingBottom:"0",paddingTop:"1rem", marginBottom:"0"}}>Eneter the requested details</p>
                    </div>
                    <div style={{ display:"block", borderBottom:"1px solid #ddd",lineHeight:"1.7rem", fontWeight:"400", height:"4rem"}}>
                        <div className="text-center" style={{display:"inline-block", paddingRight:"2rem", border:"1px solid #dbdbdb", borderRadius:"50%", width:"30px", height:"30px", marginTop:"1.2rem",position:"relative",right:"0"}}>&nbsp;&nbsp;02</div>
                        <p style={{marginRight:"16.6rem",display:"inline-block", paddingLeft:"3rem", fontWeight:"500", fontSize:"1.3rem"}}>Complete e-sign & verification</p>
                    </div>
                    <div style={{ display:"block", lineHeight:"1.7rem", fontWeight:"400", height:"4rem"}}>
                        <div className="text-center" style={{display:"inline-block", paddingRight:"2rem", border:"1px solid #dbdbdb", borderRadius:"50%", width:"30px", height:"30px",marginTop:"1.2rem",position:"relative",right:"0"}}>&nbsp;&nbsp;03</div>
                        <p style={{marginRight:"25.6rem",display:"inline-block", paddingLeft:"3rem", fontWeight:"500", fontSize:"1.3rem"}}>Start investing!</p>
                        <br/><br/>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    )
}

export default Steps;