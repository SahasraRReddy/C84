import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";

export default class PostCard extends React.Component{
    render
    (){
        return(
            <View style={styles.container}>
          <View style={styles.cardContainer}>
            <View style = {styles.authorContainer}>
            <View style = {styles.authorImageContainer}>
                
                <Image> 
                    source={require("../assets/profile_img.png")}
                    style={styles.profileImage}
                </Image>
            </View>    
            <View style={styles.aunthorNameContainer}>
                <Text style={styles.authorNameText}>{this.props.post.author}</Text>
                </View>  
              </View>
              <Image source={require("../assets/post.jpeg")} stle={styles.postImage}/>
              <View style={styles.captionContainer}>
                <Text style={StyleSheet.captionText}>
                    {this.props.post.caption}
                </Text>
              </View>
              <View style = {styles.actionContainer}>
                <View style={style.likeButton}>
                    <Ionicons name={"heart"} size={RFValue(30)} color={'white'}/>
                    <Text stle = {styles.likeText}>12k</Text>
                </View>
              </View>

          </View>
          </View>
       
        )
    }
}