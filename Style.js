import { StyleSheet, Dimensions } from 'react-native';

const fullScreenWidth = Dimensions.get('screen').width;
const fullScreenHeight = Dimensions.get('screen').height;

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const horizontalScale = (size) =>
  (fullScreenWidth / guidelineBaseWidth) * size;
const verticalScale = (size) =>
  (guidelineBaseHeight / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;
const moderateVerticalScale = (size, factor = 0.5) =>
  size + (verticalScale(size) - size) * factor;
export {
  horizontalScale as hs,
  verticalScale as vs,
  moderateScale as ms,
  moderateVerticalScale as mvs,
};

export default StyleSheet.create({
  //================================================container style start================================================
  container: {
    paddingVertical:'10%',
    paddingHorizontal: '5%',
    flex: 1,
    backgroundColor:'rgb(240, 219, 255)'
  },
  center:{ justifyContent: 'center', alignItems: 'center' }
  //================================================container style end================================================
});
