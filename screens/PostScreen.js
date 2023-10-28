import React, { Component } from 'react';
import { Text, View,TouchableOpacity } from 'react-native';

export default class Profile extends Component {
    render() {
        renderItem=({item:post})=>{
            return<PostCard post={post} navigation={this.props.navigation}/>
        }
        return (
            <View>
                <TouchableOpacity onPress = {()=>
                      this.initiateTTS(
                        this.props.route.params.story.title,
                        this.props.route.params.story.author,
                        this.props.route.params.story.story,
                        this.props.route.params.story.moral,
                      )
                  }></TouchableOpacity>

                
            </View>
        )
    }
}