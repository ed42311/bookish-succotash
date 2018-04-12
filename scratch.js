<ImageBackground
  style={styles.backgroundImg}
  source={this.state.backgroundImg}
  id="backgroundImg"
>
  <View style={styles.fluidContainer}>
    <Text style={styles.introText}>{this.state.mainText}</Text>
    <TransformButton
      btnTitle="transformButton"
      transformAction={this.transformAction}
      style={styles.transformButton}
      btnText={this.state.btnText}
    />
  </View>
</ImageBackground>

<RegButton
  btnTitle="account"
  action={() => this.signUp()}
  btnText="Signup"
 />
 <RegButton
   btnTitle="forgot"
   action={() => console.log("meh")}
   btnText="Login"
 />


 const styles = StyleSheet.create({
   introText: {
     fontSize: 48,
     paddingLeft: 40,
   },
   fluidContainer: {
     width: "80%",
     height: "80%",
   },
   backgroundImg:{
     flex : 1,
     justifyContent: 'center',
     alignItems: 'flex-start',
     width: null,
     height: "100%"
   },
   transformButton: {
     alignItems: 'center',
     backgroundColor: '#DDDDDD',
     padding: 10,
     marginLeft: 40
   },
   container: {
     flex: 1,
     top: 65,
     width: "100%",
     flexDirection: 'row',
     justifyContent: 'space-around',
   },
   inputThing: {
     width: '80%',
     marginRight: 25,
     backgroundColor: '#DDDDDD',
     padding: 15
   },
   containerTest: {
     flex : 1,
     justifyContent: 'center',
     alignItems: 'center',
     width: null,
     height: "100%"
   },
   inner: {
     width: "100%",
     flexDirection: 'column',
     alignItems: 'center',
     justifyContent: 'center',
   },
   text: {
     color: 'black',
     backgroundColor: 'transparent',
   },
 });
