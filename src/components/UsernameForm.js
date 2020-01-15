import React, { Component } from 'react';

class UsernameForm extends Component {
 constructor(props) {
   super(props);
   this.state = {
     username: '',
   }
   this.onSubmit = this.onSubmit.bind(this);
   this.onChange = this.onChange.bind(this);
 }

 onSubmit(e) {
   e.preventDefault();
   this.props.onSubmit(this.state.username);
 }

 onChange(e) {
    this.setState({ username: e.target.value })
  }

  render() {
    const styles = {
      container: {
        border:" 1px solid black",
        width: "300px",
        margin: "-100px 0 0 -150px",
        padding: "3px",
        top: "50%",
        left: "50%",
        position: "absolute",
        backgroundColor: "#cbd2e0",
        borderRadius: "25px",
        textAlign: "center",
      },
      button: {
        margin: '10px',
      },
    }
    return (
      <div style={styles.container}>
        <div>
          <h3>Pick your username to enter Chatterbox</h3>
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              placeholder="Username"
              onChange={this.onChange}
            /><br/>
           <button type="submit" style={styles.button}>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

 export default UsernameForm;