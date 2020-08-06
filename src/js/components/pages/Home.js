import React, { Component } from "react";
import styles from "./stylesheets/Content.module.css"
class Home extends Component {
   render() {
      return (
         <>
            <div className = {styles.Container}>
            <h1 className = {styles.Content}>Home</h1>
            </div>
            
         </>
      );
   }
}

export default Home;
