//@flow

import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Image
} from 'react-native';
import { connect } from 'react-redux';

class PostsContainer extends Component {

  constructor(props){
    super(props);
    this.state = {fetchedPosts : ''};
    this._fetchPosts();
  }

  _posts() {
    console.log(this.props.fetchedPosts);
    if (Object.keys(this.props.fetchedPosts).length == 0) {
      return [];
    }
    return Object.keys(this.props.fetchedPosts).map(key => this.props.fetchedPosts[key])[0];
  }

  _fetchPosts() {
    console.log('fetch posts called');
    this.props.getPostsFromSubreddit('frontpage');
  }
  render() {
    console.log('render called..');
    return(
      <View style={{flex:1, margin : 5}}>
        {
          <ScrollView style={{flex:0.8}}>
          {this._posts().map((post) => {
            return (
              <View key={post.id} style={{flex : 1,flexDirection:'row', marginBottom : 5}}>
                {console.log(post.thumbnail)}
                  <View style = {{ flex : 0.12}}>
                    <Image source={{uri : post.thumbnail}} style={{height : 40}}/>
                  </View>
                  <View style = {{justifyContent : 'center' , marginLeft : 5,flex : 0.88}}>
                    <Text>{post.title}</Text>
                  </View>
              </View>
            )
          })}
          </ScrollView>
        }
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    fetchedPosts : state.fetchedPosts,
  }
}

export default connect(mapStateToProps)(PostsContainer);
