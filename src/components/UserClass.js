import { Component } from "react";
import UserContext from "../context/UserContext";

class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: null,
    };
  }
  async componentDidMount() {
    const res = await fetch("https://api.github.com/users/bhuvan2205");
    const data = await res.json();

    this.setState({ userInfo: data });

    this.timer = setInterval(() => {
      console.log("Mount");
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("UnMount");
  }

  render() {
    return (
      <div className="user-card">
        <div className="user-avatar">
          {this.state.userInfo?.avatar_url && (
            <img
              src={this.state.userInfo?.avatar_url}
              height={80}
              width={80}
              alt={this.state.userInfo?.name}
            />
          )}
        </div>

        <div className="user-info">
          {this.state.userInfo?.name && <h2>{this.state.userInfo?.name}</h2>}
          {this.state.userInfo?.bio && (
            <p className="user-role">{this.state.userInfo?.bio}</p>
          )}

          <div className="user-details">
            {this.state.userInfo?.location && (
              <p>📍 {this.state.userInfo?.location}</p>
            )}
            {this.state.userInfo?.email && (
              <p>✉️ {this.state.userInfo?.email}</p>
            )}

            <UserContext.Consumer>
              {(data) => console.log(data)}
            </UserContext.Consumer>
          </div>
        </div>

        <button className="user-button">
          <a href={this.state?.userInfo?.html_url}>View Profile</a>
        </button>
      </div>
    );
  }
}

export default UserClass;
