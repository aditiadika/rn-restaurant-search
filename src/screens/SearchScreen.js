import React, { useState } from 'react';
import { View, Text } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
	const [ term, setTerm ] = useState('');
	const [ results, setResults ] = useState([]);

	const searchApi = async () => {
		const response = await yelp.get('/search', {
			params: {
				limit: 50,
				term,
				location: 'san jose'
			}
		});
		setResults(response.data.businesses);
	};

	return (
		<View style={{ backgroundColor: 'white' }}>
			<SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
			<Text> SearchScreen </Text>
			<Text>we have found {results.length} results.</Text>
		</View>
	);
};

SearchScreen.navigationOptions = {
	title: 'Business Search'
};

export default SearchScreen;
