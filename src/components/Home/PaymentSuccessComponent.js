import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions} from 'react-native';
import LottieView from 'lottie-react-native';
import Ripple from 'react-native-material-ripple';

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

export default class PaymentSuccessComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null,
      timer:2,
      items :[{}],
    };
}


componentDidMount()
{
  this.interval = setInterval(
    () => this.setState((prevState)=> ({ timer: prevState.timer - 1 })),
    1000
  );
  
}



componentDidUpdate()
{
  if(this.state.timer === 0){ 
    clearInterval(this.interval);
   this.props.navigateToPaymentSuccess();
  }
}

componentWillUnmount()
{
 clearInterval(this.interval);
}


  render() {
    return (
      <View style={{flex:1, backgroundColor:'#322143', justifyContent:"center", alignItems:"center"}}>
          <Text style={styles.Title}>Payment Successful !!!</Text>
          <Ripple>
          <LottieView 
            resizeMode='cover'
            style={{height:120, width: 120, marginTop:20}}
            source={require('../../assets/json/rightmark.json')} 
            autoPlay loop />
            </Ripple>  
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center'
  },
  
  Title: {
      fontFamily: 'NunitoSans-ExtraBold',
      color: '#FFFFFF',
      fontSize: 26,
  },

  

});
