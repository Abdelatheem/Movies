import { Dimensions, PixelRatio } from 'react-native';

const { height, width } = Dimensions;
const styles = {
  errorStyle: {
    paddingTop: 20,
    fontSize: 20,
    color: 'red',
    alignSelf: 'center',
  },
  viewAllStyle: {
    color: 'gray',
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
    backgroundColor: '#00d374',
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
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  containerContentStyle: {
    paddingLeft: 16,
    paddingRight: 6,
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
    textAlign: 'center',
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
    height: Dimensions.get('window').width / 2,
  },
};

export default styles;
