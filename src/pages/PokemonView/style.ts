import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: { flex: 1 },
  titleContainer: {
    flex: 0.1,

    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainerText: { fontSize: 25, textAlign: 'center' },
  scroolContainer: { flex: 0.9, backgroundColor: 'black' },
  scroolContainerScroll: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  scrollContainerScrollImageView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainerScrollImage: {
    width: '80%',
    height: 300,
  },
  scrollContainerType: { justifyContent: 'center' },
  scrollContainerTypeText: { textAlign: 'center', fontSize: 20 },
  scrollContainerStatus: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainerStatusTitle: { textAlign: 'center', fontSize: 22 },
  scrollContainerStatusText: { textAlign: 'center', fontSize: 20 },
});

export default style;
