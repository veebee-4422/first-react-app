import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainMenu from "./screens/MainMenu";
import CreateGame from "./screens/CreateGame";
import OnlineGame from "./screens/OnlineGame";

export type RootStackParamList = {
	MainMenu: undefined,
	CreateGame: undefined,
	OnlineGame: { createGame: boolean },
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App(): React.JSX.Element {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="MainMenu" screenOptions={{ headerShown : true }}>
				<Stack.Screen 
					name="MainMenu"
					component={MainMenu}
					options={{
						title: "Main menu hai bro",
						orientation: "portrait"
					}}
				/>
				<Stack.Screen 
					name="CreateGame"
					component={CreateGame}
					options={{
						title: "Game options hai bro",
						orientation: "landscape"
					}}
				/>
				<Stack.Screen 
					name="OnlineGame"
					component={OnlineGame}
					options={{
						title: "Online Game options hai bro",
						orientation: "landscape"
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}