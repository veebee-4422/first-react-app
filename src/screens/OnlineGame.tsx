import React, { useEffect, useState } from "react";
import "react-native-get-random-values"
import { v4 as uuid } from "uuid";
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
	ScrollView,
	TextInput
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
import { MainMenuButton, MainMenuHalfButton } from "../components/MainMenuButton";
import { useAppDispatch } from "../redux/hooks";
import { mainMenuReducer } from "../redux/reducers/mainMenuReducers";
import { setGameId } from "../redux/actions/mainMenuActions";
import { RootStackParamList } from "../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";


type OnlineGameProps = NativeStackScreenProps<RootStackParamList, "OnlineGame">

export default function OnlineGame({ navigation, route }: OnlineGameProps): React.JSX.Element {
	const createGame = route.params.createGame;

	const [privateGameSelected, setOnlineGameSelected] = useState(false);
	const [localGameSelected, setLocalGameSelected] = useState(false);
	const [ gameCode, setGameCode ] = useState('Useless Multiline Placeholder');

	useEffect(() => {
		if(!createGame) return;
		const newUuid = uuid();
		const gameCode = newUuid.split("-")[0];
		setGameCode(gameCode);
	}, []);

	return (
		<View
			style={styles.container}>
			<TextInput
				editable={!createGame}
				numberOfLines={1}
				maxLength={40}
				onChangeText={text => setGameCode(text)}
				value={gameCode}
				style={styles.backgroundColour}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	backgroundColour: {
		backgroundColor: "red",
		padding: 10,
		color: "green"
	},
	container: {
		display: "flex",
		alignItems: "center",
		alignSelf: "center",
		justifyContent: "center",
		width: "100%",
		height: "100%"
	},
	doubleContainer: {
		width: "100%",
		display: "flex",
		backgroundColor: "cyan",
		justifyContent: "center",
		flexDirection: "row"
	}
});