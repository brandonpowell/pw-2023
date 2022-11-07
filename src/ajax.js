import React from "react";
import FormComp from "./form.js";

// eslint-disable-next-line
var AJAX = createReactClass({
//Create a AJAX Request to our json file and make a post that are email list.

  onFormSubmit: function(data, callback){
  // eslint-disable-next-line no-undef
     $.ajax({
        url: this.props.url,
        dataType: 'json',
        type: 'POST',
        data: data,
        success: callback,
        error: function(_xhr, status, err) {
 
          console.error(this.props.url, status, err.toString());

        }.bind(this)
      });
  },

  render: function() {
    return <FormComp onFormSubmit={this.onFormSubmit} />
  }
});

React.render(
  <AJAX />,
  document.getElementById('content')
);

export default AJAX;