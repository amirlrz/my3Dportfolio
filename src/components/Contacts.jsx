import React from "react";

function Contacts() {
  return (
    <div className="text-white mx-5 mt-5 mb-5">
      <span className="text-purple-700 font-bold">
        Thanks for Watching My Portfolio
      </span>
      <br />
      <span className="font-bold">My Information</span> <br />
      Phone Number :{" "}
      <a className="underline decoration-solid" href="tel:09029202799">
        {" "}
        09029202799
      </a>{" "}
      <br />
      Eamil Address : amirlorzade11@gmail.com
    </div>
  );
}

export default Contacts;
