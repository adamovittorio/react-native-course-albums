import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection.js';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const {
    title,
    artist,
    thumbnail_image,
    image,
    url
  } = album;

  const {
    headerContentStyle,
    headerTextstyle,
    thumbnailStyle,
    thumnailContainerStyle,
    imageStyle
  } = styles;

  return (

    <Card>
      <CardSection>
        <View style={thumnailContainerStyle}>
          <Image
            source={{ uri: thumbnail_image }}
            style={thumbnailStyle}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextstyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={imageStyle}
          source={{ uri: image }}
        />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          Buy Now
        </Button>
      </CardSection>
    </Card>

  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextstyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  },
};

export default AlbumDetail;
