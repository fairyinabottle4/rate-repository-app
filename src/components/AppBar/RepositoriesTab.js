import React from 'react';
import { useHistory } from "react-router-native";
import Text from '../Text';

import { Pressable } from 'react-native';


const Repositories = ({ appBarTabStyles }) => {
	const history = useHistory();
	const handleClick = () => {
		history.push('/');
	};

	return (
		<Pressable onPress={handleClick}>
			<Text style={appBarTabStyles}>
				Repositories
			</Text>
		</Pressable>
	);
};


export default Repositories;