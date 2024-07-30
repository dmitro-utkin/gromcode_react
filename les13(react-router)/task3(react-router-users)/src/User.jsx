import React, { Component } from "react";

class User extends Component {
  state = {
    userData: null,
  };

  componentDidMount() {
    this.fetchUserData();
  }

  componentDidUpdate(prevProps) {
    const prevUser = prevProps.match.params.userId;
    const currUser = this.props.match.params.userId;
    if (prevUser !== currUser) {
      this.fetchUserData();
    }
  }

  fetchUserData() {
    const { match } = this.props;
    fetch(`https://api.github.com/users/${match.params.userId}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("");
      })
      .then((userData) => {
        this.setState({ userData });
      });
  }

  render() {
    const { userData } = this.state;
    if (!userData) {
      return <span>Select a user please</span>;
    }
    const { name, location, avatar_url } = userData;
    return (
      <div className="user">
        {avatar_url && (
          <img
            alt="User Avatar"
            src={avatar_url}
            className="user__avatar"
          />
        )}
        <div className="user__info">
          <span className="user__name">{name}</span>
          <span className="user__location">{location}</span>
        </div>
      </div>
    );
  }
}

export default User;
