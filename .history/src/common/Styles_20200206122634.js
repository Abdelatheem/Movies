import { Dimensions, PixelRatio } from 'react-native';

const styles = {
  errorStyle: {
    paddingTop: 20,
    fontSize: 20,
    color: 'red',
    alignSelf: 'center',
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
 container: {
    paddingTop: 80,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#000000',
    flex: 1
  },
  eventPictureStyle: {
    alignSelf: 'center',
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderRadius: 5,
    margin: 8,
  },
  titleText: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '400',
    color: '#FFFFFF',
  },
  titleTextBold: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  scoreTextBold: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  scoreText: {
    fontSize: 10,
    color: '#FFFFFF',
  },
  scoreTextRightBold: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'right',
  },
  scoreTextRight: {
    fontSize: 10,
    color: '#FFFFFF',
    textAlign: 'right',
  },
  positionTextRight: {
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'right',
  },
  regularText: {
    fontSize: 15,
    color: '#FFFFFF',
  },
  nameText: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  rightText: {
    fontSize: 15,
    color: '#FFFFFF',
    textAlign: 'right',
  },
  cardSectionDark: {
    backgroundColor: '#585e68',
    borderColor: '#585e68',
  },
  leftButtonTextStyle: {
    color: '#FFFFFF',
  },
  titleStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    alignSelf: 'center',
  },
  navbarStyle: {
    backgroundColor: '#25AAE0',
    marginTop: 0,
    borderBottomWidth: 0,
  },
  noResults: {
    color: '#FFFFFF',
    alignSelf: 'center',
    fontSize: 18,
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
  tabBarStyle: {
    justifyContent: 'flex-end',
    backgroundColor: '#000000',
    height: 40,
    color: '#00d374',
    flexDirection: 'row'
  },
  tabBar: {
    borderTopColor: 'rgba(0, 211, 116, 0.2)',
    borderTopWidth: 1,
    backgroundColor: 'black',
    opacity: 0.98
  },
  roundText: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '400',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  sponsorText: {
    alignSelf: 'center',
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  categoryImageStyle: {
    width: (Dimensions.get('window').width / 2) - 2,
    height: (Dimensions.get('window').width / 2) - 2,
  },
  categoryImageStyleBordered: {
    width: (Dimensions.get('window').width / 2) - 2,
    height: (Dimensions.get('window').width / 2) - 2,
    borderColor: '#ffffff',
    borderWidth: 3,
    borderRadius: 10,
  },
  categoryViewStyle: {
    width: '50%',
    height: Dimensions.get('window').width / 2,
  },
  couponViewStyle: {
    width: Dimensions.get('window').width / 4,
    height: Dimensions.get('window').width / 4,
    flex: 1
  },
  couponImageStyleBordered: {
    width: (Dimensions.get('window').width / 4) - 2,
    height: (Dimensions.get('window').width / 4) - 2,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 5,
    resizeMode: 'contain',
  },
  barcodeImageStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 5,
    margin: 8,
  },
};

export default styles;
