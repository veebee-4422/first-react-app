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
	ImageBackground,
	ScrollView
	// View,
} from "react-native";

import {
	Colors,
	DebugInstructions,
	Header,
	LearnMoreLinks,
	ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";

import Snackbar from "react-native-snackbar";
import { mainMenuOptions } from "../components/constants";

const stateOptions = ["circle", "cross"];

import backgroundImage from "../components/assets/map4x.jpg";
import AnimatedMenu from "../components/AnimatedMenu";
import { MainMenuButton } from "../components/MainMenuButton";

export default function Game(): React.JSX.Element {
	function createOnlineGame(){
		
	}

	async function joinOnlineGame(){
		
	}

	return (
		<>
			{/* <AnimatedMenu /> */}
			<ScrollView style={[styles.backgroundColour]} contentContainerStyle={styles.container}>
				<MainMenuButton name="A" clickHandler={createOnlineGame} key={`GAME_OPTIONS_${0}`}/>
				<MainMenuButton name="B" clickHandler={joinOnlineGame} key={`GAME_OPTIONS_${1}`}/>
				{/* <MainMenuButton name="B" clickHandler={createOnlineGame} key={`MAIN_MENU_${1}`}/> */}
			</ScrollView>
		</>
	);
}

const styles = StyleSheet.create({
	backgroundColour: {
		backgroundColor: "red"
	},
	container: {
		display: "flex",
		backgroundColor: "yellow",
		alignItems: "center",
		alignSelf: "center",
		width: "100%"
	},
});