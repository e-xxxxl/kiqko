import React from 'react';
import { NavLink } from 'react-router-dom';


import settingView from '../../assets/images/myProfile.png';
import settingEdit from '../../assets/images/editPofile.png';
import settingUpload from '../../assets/images/updateLocation.png';
import settingReset from '../../assets/images/resetPassword.png';
import settingHide from '../../assets/images/hideProfile.png';
import settingDelete from '../../assets/images/deleteAccount.png';
import settingLogout from '../../assets/images/logout.png';
import manageMedia from '../../assets/images/manageMedia.png';
import viewedMe from '../../assets/images/viewedMe.png';
import myLikes from '../../assets/images/myLikes.png';
import likesMe from '../../assets/images/likesMe.png';
import homea from '../../assets/images/homea.png';
import liveicon from '../../assets/images/liveicon.png';
import yourm from '../../assets/images/yourm.png';
import blockedUsers from '../../assets/images/blockedUsers.png';
const LeftNav = () => {




   return (
      <>

         <div className="top-user-id text-center">
            <div className="online-user-all">
               <h5 className="border-h5">Users Online Now</h5>
               <div className="online-user-status border-right-online">
                  <h6>Women</h6>
                  <h4>1234</h4>
               </div>
               <div className="online-user-status">
                  <h6>men</h6>
                  <h4>1565</h4>
               </div>
            </div>
         </div>
         <div className="user-type-left">

            <ul className="list-user-type left-nav">
               <li>
                  <NavLink exact to="/profile" activeClassName="active"><img src={homea} alt="homea" />Home</NavLink>
               </li>
               <li>
                  <NavLink exact to="/live-users" activeClassName="active"><img src={liveicon} alt="liveicon" />Live Users</NavLink>
               </li>
               <li>
                  <NavLink exact to="/who-viewed-you" activeClassName="active"><img src={viewedMe} alt="viewedMe" />Who Viewed Me</NavLink>
               </li>
               <li>
                  <NavLink exact to="/who-likes-you" activeClassName="active"><img src={myLikes} alt="myLikes" />Who Likes Me</NavLink>
               </li>
               <li>
                  <NavLink exact to="/my-likes" activeClassName="active"><img src={likesMe} alt="likesMe" />My Likes</NavLink>
               </li>
               <li>
                  <NavLink exact to="/your-matches" activeClassName="active"><img src={yourm} alt="likesMe" />Your Matches</NavLink>
               </li>
               <li>
                  <NavLink exact to="/blocked-users" activeClassName="active"><img src={blockedUsers} alt="blockedUsers" />Blocked Users</NavLink>
               </li>
               <li>
                  <NavLink exact to="/profile" activeClassName="active"> <img src={settingView} alt="settingView" />View Profile</NavLink>
               </li>
               <li>
                  <NavLink exact to="/edit-basics" activeClassName="active"> <img src={settingEdit} alt="settingEdit" />Edit Profile </NavLink>
               </li>
               <li>
                  <NavLink exact to="/manage-media" activeClassName="active"><img src={manageMedia} alt="manageMedia" />Manage Media</NavLink>
               </li>
               <li>
                  <NavLink exact to="/reset-password"><img src={settingReset} alt="settingReset" />Reset Password</NavLink>
               </li>
               <li>
                  <NavLink exact to="/update-location"><img src={settingUpload} alt="settingUpload" />Update Location</NavLink>
               </li>
               <li>
                  <NavLink exact to="/hide-profile"><img src={settingHide} alt="settingHide" />Hide Profile</NavLink>
               </li>
               <li>
                  <NavLink exact to="/delete-account"><img src={settingDelete} alt="settingDelete" />Delete Account</NavLink>
               </li>
               <li>
                  <NavLink exact to="/logout"><img src={settingLogout} alt="settingLogout" />Logout</NavLink>
               </li>
            </ul>
         </div>




      </>
   );
};

export default LeftNav;