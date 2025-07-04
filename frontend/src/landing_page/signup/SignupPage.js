import React from "react";
import Hero from "./Hero";
import OpenAccount from "../OpenAccount";
import Benefit from "./Benefit";
import SignUpNow from "./SignUpNow";
import DifferentAccounts from "./DifferentAccounts";
import FAQs from "./FAQs";
import InvestmentOp from "./InvestmentOp";
import Steps from "./Steps";

function Signup() {
  
  return (
    <>
    <Hero />
    <SignUpNow />
    <InvestmentOp />
    <Steps />
    <Benefit />
    <DifferentAccounts />
    <FAQs />
    <OpenAccount />
  </>
  );
  

}

export default Signup;