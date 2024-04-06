import React from "react";
import LogoSearch from "../LogoSearch/LogoSearch";
import ProfileCard from "../ProfileCard/ProfileCard";
import './ProfileSide.css'
import FollowsCard from "../FollowsCard/FollowsCard";


const ProfileSide = () => {
  return (
    <div className="ProfileSide">
      <LogoSearch />
      <ProfileCard />
      <FollowsCard/>
    </div>
  );
};

export default ProfileSide;
