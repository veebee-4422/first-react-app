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
	GestureResponderEvent
	// View,
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
import { mainMenuOptions } from "./constants";

type mainMenuProps = {
	name: string,
	clickHandler: (e: GestureResponderEvent) => void,
}

export function MainMenuButton({ name, clickHandler }: mainMenuProps): React.JSX.Element {
	return (
		<Pressable onPress={clickHandler}  style={[styles.button, styles.mainMenuButton]}>
			<Text style={styles.mainMenuButtonText}>
				{name}
			</Text>
		</Pressable>
	);
}

export function MainMenuHalfButton({ name, clickHandler }: mainMenuProps): React.JSX.Element {
	return (
		<Pressable onPress={clickHandler}  style={[styles.button, styles.mainMenuHalfButton]}>
			<Text style={styles.mainMenuHalfButtonText}>
				{name}
			</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {

	},
	mainMenuButton: {
		backgroundColor: "#1f46d1",
		width: "80%",
		// borderRadius: 10,
		// // borderRadius: "1rem",
		marginVertical: 10,
		marginHorizontal: 5,
		paddingVertical: 20,
		alignItems: "center",
		borderBottomWidth: 0,
		borderBottomColor: "#0830bf",
		// backgroundColor: '#1899D6',
		borderRadius: 16,
		shadowColor: "#0830bf"
	},
	mainMenuHalfButton: {
		backgroundColor: "#1f46d1",
		width: "40%",
		// borderRadius: 10,
		// // borderRadius: "1rem",
		marginVertical: 10,
		marginHorizontal: 5,
		paddingVertical: 20,
		alignItems: "center",
		borderBottomWidth: 0,
		borderBottomColor: "#0830bf",
		// backgroundColor: '#1899D6',
		borderRadius: 16,
		shadowColor: "#0830bf"
	},
	mainMenuButtonText: {
		fontSize: 70
	},
	mainMenuHalfButtonText: {
		fontSize: 30
	},

});

