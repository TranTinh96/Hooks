import React, { Component } from 'react'
import {UserContext} from "../App"

export class componentF extends Component {
   render() {
      return (
         <div>
            <UserContext.Consumer>
               {
                  user =>{
                     return <div>
                        User context name {user}
                     </div>
                  }
               }
            </UserContext.Consumer>
            
         </div>
      )
   }
}

export default componentF
