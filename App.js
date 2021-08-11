import React from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
	return (
		<NavigationContainer>
			<SafeAreaView style={{flex: 1}}>
				<View style={styles.container}>
					<Text style={styles.textStyle}>Hello Mayengbam</Text>
				</View>
			</SafeAreaView>
		</NavigationContainer>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	textStyle: {
		fontSize: 30,
		color: 'teal',
	},
});

export default App;
