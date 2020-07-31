/*
 *  Copyright (c) AzaChii and its affiliates. All Rights Reserved.
 *
 *  Unauthorized copying of this file, via any medium is strictly prohibited
 *
 *  Proprietary and confidential
 *
 *  Written by AzaChii <hello@azachii.dev>, July 2020
 *
 *  https://azachii.dev/
 *
 *  LICENSE file in the root directory of this source tree.
 */

import {ApolloClient} from 'apollo-client'
import {createHttpLink} from 'apollo-link-http'
import {InMemoryCache} from 'apollo-cache-inmemory'
import {setContext} from 'apollo-link-context'

function create(initialState, {getToken}) {
	const httpLink = createHttpLink({
		uri: process.env.NODE_ENV === "production" ?  "https://waydda-api.herokuapp.com/graphql" : "https://waydda-api.herokuapp.com/graphql",
		credentials: process.env.NODE_ENV === 'production' ? 'omit' : 'same-origin'
	})

	const authLink = setContext((_, {headers}) => {
		const token = getToken()
		return {
			headers: {
				...headers,
				authorization: token ? token : '',
			}
		}
	})

	return new ApolloClient({
		connectToDevTools: process.browser,
		ssrMode: false, // Disables forceFetch on the server (so queries are only run once)
		link: authLink.concat(httpLink),
		cache: new InMemoryCache({}).restore(initialState || {})
	});
}

export default function initApollo(initialState, options) {
	// Make sure to create a new client for every server-side request so that data
	// isn't shared between connections (which would be bad)
	if (!process.browser) {
		return create(initialState, options)
	}

	// Reuse client on the client-side
	if (!apolloClient) {
		apolloClient = create(initialState, options)
	}

	return apolloClient
}
