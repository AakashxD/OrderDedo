import React from "react";
class UserClass extends React.Component{
    //  A constructor is load first when we call the component thorugh about                     
    constructor(props){
        super(props);
        this.state = {
          count:0,
          count:1
        }
    }

    render(){
        const {name}=this.props;
        const{ count,count2}=this.state;
      return (
        <div className="user-card">
      <h2>Name:{name}</h2>
      <h3>Age: 20</h3>
      <h1>
        count={count}
      </h1>
      <button onClick={()=>{
        this.setState({count:this.state.count+1,
          count2:this.state.count2+1

        })
      }}>Increase</button>
      <h3>Gender: Male</h3>
      <h3>Location :Noida</h3>
      <h4>Contact:@AakashxD</h4>
        </div>
      )
    }}
export default UserClass;
