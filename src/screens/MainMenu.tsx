import React, { useEffect, useState } from "react";
// import type { PropsWithChildren } from "react";
import {
	FlatList,
	Pressable,
	SafeAreaView,
	// ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	View,
	useColorScheme,
	Appearance,
	ScrollView,
	Dimensions,
} from "react-native";

import {
	Colors,
	DebugInstructions,
	Header,
	LearnMoreLinks,
	ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";

import EStyleSheet from "react-native-extended-stylesheet"
import Snackbar from "react-native-snackbar";
import { mainMenuOptions } from "../components/constants";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import AnimatedMenu from "../components/AnimatedMenu";
import { MainMenuButton } from "../components/MainMenuButton";

type MainMenuProps = NativeStackScreenProps<RootStackParamList, "MainMenu">


export default function MainMenu({ navigation }: MainMenuProps): React.JSX.Element {
	function mainMenuButtonClickHandler(index: number){
		switch(index){
			default:
				navigation.navigate("CreateGame");
		}
	}

	return (
		<>
			<AnimatedMenu />
			<ScrollView style={[styles.backgroundColour]} contentContainerStyle={styles.container}>
				<MainMenuButton name="A" clickHandler={() => mainMenuButtonClickHandler(0)} key={`MAIN_MENU_${0}`}/>
				<MainMenuButton name="B" clickHandler={() => mainMenuButtonClickHandler(1)} key={`MAIN_MENU_${1}`}/>
				<MainMenuButton name="C" clickHandler={() => mainMenuButtonClickHandler(2)} key={`MAIN_MENU_${2}`}/>
			</ScrollView>
		</>
	);
}

// const entireScreenWidth = Dimensions.get('window').width;
// EStyleSheet.build({
// 	$rem: entireScreenWidth / 380
// });

const styles = StyleSheet.create({
	backgroundColour: {
		// backgroundColor: "red"
	},
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    // smallText: {
    //     color: "#000000",
	// 	paddingBottom: "1rem",
    // }
});