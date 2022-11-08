import React, { Component } from "react";
import { apiUrl } from "./helpers"
import axios from "axios";
import validator from "validator";
import PropTypes from 'prop-types';
import Loading from "./shared/loading";


  // eslint-disable-next-line
  class FormComp extends Component {

    constructor(props){//It's used for initiatizing the local state of the component by assigning an object to this. state.
      super(props);
      this.state = {
        email: '', //the form does not have the input or email will be empty.
        loading: false //the form will be not loading but when they click on the button will load.
      }
    }

    handleOnChangeEmail = email => {
      this.setState ({ //This how you set the component set in react. //Line 80:43:  'handleOnChangeEmail' is not defined
        email: email
      })
    }

    handleLoadingState = loading => {//Will handle the loading of the form.
      this.setState({loading: loading });
    }

    handleSendEmail = email => {//When they push the button to send email.
      this.handleLoadingState(true);
      axios.post(`${apiUrl}/subscribe`,{//The Axios will post the email on the suscribe list.
        email: email
      }).then(res => {//Will receive an success message when email had been sent.
        if(res.success) {
          this.setState({
            email: '', //Will be a empty string within the input field.
            success: 'Thank you for subscribing! Welcome to the percepverse!'
          });
            this.handleLoadingState(false); //Turn off the Loading State
        } else {
          this.setState({// When the mailchimp past in an error saying unable to subscribe.
            email: '', //Will be a empty string within the input field.
            chimpError: 'Mailchmp got an error please try again.',
          }); 
          this.handleLoadingState(false);
          //Turn off the Loading State
        }
      }).catch(issues => {//Will receive an error message if message has been not sent.
        if(issues.error) {
          this.handleLoadingState(false);//Turn off the Loading State
            this.setState({
              email: '', //Will be a empty string within the input field.
              error: 'Unable to subscribe! Please enter your email again?',
            });
          } 
      });
    }

    render() {
      // the message and the input values are all component state now
      // this with the nSubmit is handle the Submission of the form to Submit the button  {/* // nSubmit={ this.handleSubmit }> */}
      return (
        <div> 
          {this.state.loading
            ? <Loading message="Working on it..." /> 
            :
            <>
          <form
              className="formElem"
              method="POST">

              <input
                type="email"
                className="userEmail"
                placeholder="a new beginning start here."
                name="userEmail"
                value={this.state.email}
                // eslint-disable-next-line no-undef 
                onChange={({ target }) => this.handleOnChangeEmail(target.value)} />

              <input
                // eslint-disable-next-line no-undef
                onClick={() => this.handleSendEmail(this.state.email)} //This onClick is use to handle when you send the email request.
                // eslint-disable-next-line no-undef
                disabled={!validator.isEmail(this.state.email)} //"form.js:86: Uncaught ReferenceError: email is not defined"
                // Error Message when using this disabiled and vaildator. 
                //email will not take if not a real email address. 

                className="userSubmit"
                type="subscribe"
                value="subscribe" />
            </form>
            
              <div className="success">
                  {this.state.success}
              </div>

              <div className="error">
                  {this.state.error}
              </div>

              <div className="ChimpError">
                  {this.state.chimpError}
              </div>
            </>
          }
        </div>
      );
    }
  }

  // eslint-disable-next-line react/no-typos
  FormComp.PropTypes = {
    email: PropTypes.string,
    handleOnChangeEmail: PropTypes.func,
    handleSendEmail: PropTypes.func
  }

export default FormComp;
 