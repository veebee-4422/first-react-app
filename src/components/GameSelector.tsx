import React, { useState } from "react";

import {
    StyleSheet,
    View,
    ScrollView
    // View,
} from "react-native";
import { MainMenuButton, MainMenuHalfButton } from "../components/MainMenuButton";

export default function GameSelector(): React.JSX.Element {
    const [privateGameSelected, setPrivateGameSelected] = useState(false);

    return (
        <ScrollView style={[styles.backgroundColour]} contentContainerStyle={styles.container}>
            <View style={styles.doubleContainer}>
                {privateGameSelected ?
                    (
                        <>
                            <MainMenuHalfButton name="C" clickHandler={() => { }} key={`GAME_OPTIONS_${2}`} />
                            <MainMenuHalfButton name="D" clickHandler={() => { }} key={`GAME_OPTIONS_${3}`} />
                        </>
                    ) :
                    (<MainMenuButton name="A" clickHandler={() => setPrivateGameSelected(true)} key={`GAME_OPTIONS_${0}`} />)
                }

            </View>
            <MainMenuButton name="B" clickHandler={() => {}} key={`GAME_OPTIONS_${1}`} />
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