import React from "react";
import Timer from "./components/Timer";
import LogoutButton from "./components/logoutButton";

const Homepage = () => {
  return (
    <div className="text-center">
      <Timer />
      <LogoutButton />
    </div>
  );
};

export default Homepage;
