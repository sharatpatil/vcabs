import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, Image } from 'react-native';
import Ripple from 'react-native-material-ripple';

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

class AddPayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
          <View style={{alignSelf:"flex-start"}}>
           <Text style={[styles.Title,{margin:20}]}>Add Payment Method</Text>
           </View>


           <FlatList  
                    data={[  
                        {key: 'Android'},{key: 'iOS'}, {key: 'Java'},{key: 'Swift'},  
                        {key: 'Php'},{key: 'Hadoop'},{key: 'Sap'},  
                        {key: 'Python'},{key: 'Ajax'}, {key: 'C++'},  
                        {key: 'Ruby'},{key: 'Rails'},{key: '.Net'},  
                        {key: 'Perl'},{key: 'Sap'},{key: 'Python'},  
                        {key: 'Ajax'}, {key: 'C++'},{key: 'Ruby'},  
                        {key: 'Rails'},{key: '.Net'},{key: 'Perl'}  
                    ]}  
                    renderItem={({item}) =>  
                    <View style={{width:Width, alignItems:'center'}}>
                    <Ripple onPress={() => this.props.navigateToAddPayment()} style={styles.FlatView}>
                    <Text style={[styles.Title,{fontSize:14, margin:10}]}>Today, 10:45 AM</Text>
                   
                   <Image style={styles.mapview} source={require('../../assets/Image/Map.png')} />
                    <View>
                   <View style={styles.DetailsView}>
                   <Text style={[styles.Title,{fontSize:14, marginLeft:10}]}>Prime Sedan</Text>
                   <Text style={[styles.Title,{fontSize:10, marginRight:10}]}>Price</Text>
                    </View>

                    <View style={styles.DetailsView}>
                   <Text style={[styles.Title,{fontSize:10, marginLeft:10}]}>Bagalur Main Cross</Text>
                   <Text style={[styles.Title,{fontSize:14, marginRight:10, color:'#FE79AE'}]}> ₹ 80.00</Text>
                    </View>
                    </View>
                   </Ripple>      
                    </View>
                  }  
                
                />  

      </View>
    );
  }
}

export default AddPayment;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  Title: {
    fontFamily: 'NunitoSans-Bold',
    color: '#121212',
    fontSize: 18,
  },
  FlatView:{
    height:210, width:Width*.85, backgroundColor:'#FFF', marginTop: 20, elevation:10, borderRadius:20, justifyContent:'space-around'
  },
  mapview:{
    height:90, width:300, alignSelf:'center'
  },
  DetailsView:{
    flexDirection:'row', alignItems:'center', justifyContent:'space-between',
  }
 

});
