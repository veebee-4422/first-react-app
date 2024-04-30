import React, { useEffect, useRef } from "react";
import { Animated, Easing, View, ImageBackground, StyleSheet, PixelRatio, ScrollView, Text, Image } from "react-native";
import ImageViewer from "react-native-image-zoom-viewer"

import backgroundImage from "./assets/map4x.jpg";

import {
    INPUT_RANGE_START,
    INPUT_RANGE_END,
    OUTPUT_RANGE_START,
    OUTPUT_RANGE_END,
    ANIMATION_TO_VALUE,
    ANIMATION_DURATION,
} from "./constants";

type hasChildren = {
    children: React.ReactElement
}
// export default function AnimatedMenu({ children }: hasChildren) {
export default function AnimatedMenu() {
    const initialValue = 0;
    const translateValue = useRef(new Animated.Value(initialValue)).current;

    // console.warn({
    //     width: PixelRatio.roundToNearestPixel(10280),
    //     height: PixelRatio.roundToNearestPixel(7704),
    // })
    function translate() {
        translateValue.setValue(initialValue);

        Animated.timing(translateValue, {
            toValue: ANIMATION_TO_VALUE,
            duration: ANIMATION_DURATION,
            easing: Easing.linear,
            useNativeDriver: true,
        }).start(translate);
    };

    useEffect(translate, [translateValue]);

    const translateAnimation = translateValue.interpolate({
        inputRange: [INPUT_RANGE_START, INPUT_RANGE_END],
        outputRange: [OUTPUT_RANGE_START, OUTPUT_RANGE_END],
    });

    const AnimatedImage = Animated.createAnimatedComponent(ImageBackground);
    const size = 50;
    const cat = {
      uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
      width: size,
      height: size,
    };
    return (
        <AnimatedImage
            resizeMode="contain"
            source={backgroundImage}
            style={[styles.background, {
                transform: [
                    { translateX: translateAnimation },
                    { translateY: translateAnimation },
                ],
            }]}>
        {/* { children } */}
        </AnimatedImage>
    )
}


const styles = StyleSheet.create({
    background: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        position: "absolute",
        // width: "100%",
        // height: "100%",
        width: 2000,
        height: 2000,
        // aspectRatio: 0.3,
        top: -400,
        left: 0,
        opacity: 1,
        transform: [
            { translateX: 1000 },
            { translateY: 0 },
        ],
    },
    scrollContainer: {
        flex: 1,
      },
      container: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      value: {
        fontSize: 24,
        marginBottom: 12,
        marginTop: 4,
      },
});