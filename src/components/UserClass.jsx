import React from "react";
class UserClass extends React.Component {
  //  A constructor is load first when we call the component thorugh about
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Rahul",
        location: "noida",
      },
    };
  }
  // to make api CALL
  async componentDidMount() {
    console.log("component did mount");
    const data = await fetch("https://api.github.com/AakashxD");
    // because it render initally then we call make api call
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate() {
    console.log("component did update");
  }
  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Name:{this.state.userInfo.name}</h2>
        <h3>Age: 20</h3>
        <img src={avatar_url} />
        <h3>Gender: Male</h3>
        <h3>Location :{location}</h3>
        <h4>Contact:@AakashxD</h4>
      </div>
    );
  }
}
export default UserClass;
