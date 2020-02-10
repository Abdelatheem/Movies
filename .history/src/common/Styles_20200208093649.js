import { Dimensions, PixelRatio } from 'react-native';

const { height, width } = Dimensions;
const styles = {
  errorStyle: {
    paddingTop: 20,
    fontSize: 20,
    color: 'red',
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000000',
  },
  MoviesStyle: {
    justifyContent: 'center',
    backgroundColor: '#000000',
    height: 50,
    flexDirection: 'row',
    width: width
  },
  movieTitle: {
    fontSize: 25,
    fontWeight: '600',
    color: '#FFFFFF',
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
  eventPictureStyle: {
    alignSelf: 'center',
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderRadius: 5,
    margin: 8,
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
    color: '#00d374',
    activeBackgroundColor: '#00d374',
    activeColor: '#fff',
    inactiveColor: '#fff',
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
  tabBar: {
    borderTopColor: 'rgba(0, 211, 116, 0.2)',
    borderTopWidth: 1,
    backgroundColor: 'black',
    color: '#00d374',
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
