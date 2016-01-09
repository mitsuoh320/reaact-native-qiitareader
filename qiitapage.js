'use strict';

var React = require('react-native');
var {
    View,
    Text    
} = React;

var EntryDetail = React.createClass({
  render: function(){
      return(
            <View>
	    <Text>
                    url={this.props.url}
                  </Text>
		  </View>    
                              );
                                }
                                });

