import { Dimensions, PixelRatio } from 'react-native';

const { height, width } = Dimensions;

const styles = {
  viewAllStyle: {
    color: 'gray',
    alignSelf: 'flex-end',
    textAlign: 'right',
    paddingTop: 5,
    fontSize: 18,
  },
  containerStyle: {
    height: 50
  },
  orangeButton: {
    backgroundColor: '#00d374',
     borderColor: '#00d374',
     borderRadius: 5,
  },
  orangeButtonRound: {
    backgroundColor: '#00d374',
     borderColor: '#00d374',
     borderRadius: 20,
  },
  baseScreenStyle: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: '#000000',
    flex: 1
  },
  leftButtonTextStyle: {
    color: '#FFFFFF',
  },
  titleStyle: {
    color: '#00d374',
    activeBackgroundColor: '#00d374',
    activeColor: '#fff',
    inactiveColor: '#fff',
  },
  navbarStyle: {
    backgroundColor: '#00d374',
    marginTop: 0,
    borderBottomWidth: 0,
  },
  tabText: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlignVertical: 'center',
    textAlign: 'center',
    paddingTop: 5,
  },
  navButtonStyle: {
    width: '33%',
    paddingBottom: 0,
  },
  navButtonSelectedStyle: {
    width: '33%',
    paddingBottom: 0,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    backgroundColor: '#25AAE0'
  },
  tabBar: {
    borderTopColor: 'rgba(0, 211, 116, 0.2)',
    borderTopWidth: 1,
    backgroundColor: 'black',
    color: '#00d374',
    opacity: 0.98
  },
  DetailImage: {
    alignSelf: 'center',
    width: '100%',  
    height: 250,  
    resizeMode: 'cover' ,
    borderRadius: 20  
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#000000',
  },
  movieTitle: {
    fontSize: 35,
    marginTop: 15,
    alignSelf: 'flex-start',
    fontWeight: '600',
    color: '#00d374',
  },
  movieTitle1: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '600',
    color: '#00d374',
  },
  movieTitle2: {
    fontSize: 20,
    margin: 5,
    textAlign: 'center',
    fontWeight: '400',
    color: '#FFFFFF',
  },
  movieTitle3: {
    fontSize: 20,
    marginTop: 10,
    textAlign: 'center',
    fontWeight: '400',
    color: '#FFFFFF',
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.2)',
    margin: 10
  },
  results: {
    flex: 1, 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    paddingTop: 3 
  },
  resultViewStyle: {
    width: '50%',
    height: 300,
    borderColor: 'rgba(255,255,255,0.2)',
    borderWidth: 1,
    borderRadius: 5
  },
  populerViewStyle: {
    width: '99%',
    height: 300,
    alignSelf: 'center',
    margin: 1,
    borderColor: 'rgba(255,255,255,0.2)',
    borderWidth: 1,
    borderRadius: 5
  },
  errorStyle: {
    paddingTop: 20,
    fontSize: 20,
    color: 'red',
    textAlign: 'center',
  },
  settingTitle: {
    fontSize: 25,
    fontWeight: '600',
    color: '#FFF',
  }
};

export default styles;
