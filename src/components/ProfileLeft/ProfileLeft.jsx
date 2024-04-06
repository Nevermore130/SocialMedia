import React from "react";
import "./ProfileLeft.css";
import LogoSearch from "../LogoSearch/LogoSearch";
import FollowersCard from '../FollowsCard/FollowsCard'
import InfoCard from "../InfoCard/InfoCard";
const ProfileLeft = () => {
  return (
    <div className="ProfileLeft">
      <LogoSearch />
      <InfoCard/>
      <FollowersCard/>
    </div>
  );
};

export default ProfileLeft;
