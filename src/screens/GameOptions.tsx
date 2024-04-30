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
	ImageBackground
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

import { setGameId } from "../redux/actions/mainMenuActions";
import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

export default function GameOptions(): React.JSX.Element {

    function handleSetGameId(gameId: string){
        const dispatch = useAppDispatch();
        dispatch(setGameId(gameId));
    }

    const { gameId: currentGameId } = useAppSelector(state => state.mainMenuReducer)

	return (<View>{ currentGameId }</View>);
}

const styles = StyleSheet.create({});