import React from 'react';
import { Dimensions, View, ImageBackground } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width } = Dimensions.get('window');

const CarouselComponent = () => {
  const images = [
    require('./assets/ReactN2.png'),
    require('./assets/ReactN2.png'),
    require('./assets/ReactN2.png'),
    require('./assets/ReactN2.png'),
  ];

  if (!Array.isArray(images)) {
    return null; 
  }

  const renderItem = ({ item }) => {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <ImageBackground
          source={item}
          style={{
            width: '100%',
            height: 230,
            borderRadius: 10,
            overflow: 'hidden',
          }}
        />
      </View>
    );
  };

  return (
    <Carousel
      data={images}
      renderItem={renderItem}
      sliderWidth={width} 
      itemWidth={width - 40} 
      loop={true} 
      autoplay={true} 
      autoplayDelay={3000} 
      autoplayInterval={5000} 
      inactiveSlideScale={0.9} 
      inactiveSlideOpacity={0.7} 
      containerCustomStyle={{ marginTop: 20 }} 
    />
  );
};

export default CarouselComponent;
