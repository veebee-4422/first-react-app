import React, { useEffect, useState } from "react";
import { v4  as uuid } from "uuid";
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
import { MainMenuButton, MainMenuHalfButton } from "../components/MainMenuButton";
import { useAppDispatch } from "../redux/hooks";
import { mainMenuReducer } from "../redux/reducers/mainMenuReducers";
import { setGameId } from "../redux/actions/mainMenuActions";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

type CreateGameProps = NativeStackScreenProps<RootStackParamList, "CreateGame">

export default function CreateGame({ navigation }: CreateGameProps): React.JSX.Element {
    const [ privateGameSelected, setOnlineGameSelected ] = useState(false);
    const [ localGameSelected, setLocalGameSelected ] = useState(false);

    function  createPrivateOnlineGame(){
        navigation.navigate("OnlineGame", { createGame: true });
    }

    function  joinPrivateOnlineGame(){
        navigation.navigate("OnlineGame", { createGame: false });
    }

	function selectOnlineGame(){
		setOnlineGameSelected(true);
		setLocalGameSelected(false);
	}

	function selectLocalGame(){
		setOnlineGameSelected(false);
		setLocalGameSelected(true);
		
	}

	return (
        <ScrollView style={[styles.backgroundColour]} contentContainerStyle={styles.container}>
            <View style={styles.doubleContainer}>
                { privateGameSelected ? 
                    (
                        <>
                        <MainMenuHalfButton name="Create Online Lobby" clickHandler={createPrivateOnlineGame} key={`GAME_OPTIONS_${2}`}/>
                        <MainMenuHalfButton name="Join Online Lobby" clickHandler={joinPrivateOnlineGame} key={`GAME_OPTIONS_${3}`}/>
                        </>
                    ) :
                    (<MainMenuButton name="Online Game" clickHandler={selectOnlineGame} key={`GAME_OPTIONS_${0}`}/>)
                }
            </View>
            <View style={styles.doubleContainer}>
                { localGameSelected ? 
                    (
                        <>
                        <MainMenuHalfButton name="Create Offline Lobby" clickHandler={()=>{}} key={`GAME_OPTIONS_${4}`}/>
                        <MainMenuHalfButton name="Join Offline Lobby" clickHandler={()=>{}} key={`GAME_OPTIONS_${5}`}/>
                        </>
                    ) :
                    (<MainMenuButton name="Offline Game" clickHandler={selectLocalGame} key={`GAME_OPTIONS_${1}`}/>)
                }
            </View>
        </ScrollView>
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
    doubleContainer: {
        width: "100%",
        display: "flex",
        backgroundColor: "cyan",
        justifyContent: "center",
        flexDirection: "row"
    }
});