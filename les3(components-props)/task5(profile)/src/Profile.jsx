import React from "react";
import moment from "moment";
import "./profile.scss";

function Profile({ firstName, lastName, birthDate, birthPlace }) {

  return (
    <div className="profile">
      <div className="profile__name">
        {firstName} {lastName}
      </div>
      <div className="profile__birth">
        Was born {moment(birthDate).format('DD MMM YY')} in {birthPlace}
      </div>
    </div>
  );
}

export default Profile;