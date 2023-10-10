import React from 'react'
import ComponentC from './ComponentC'

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function UseContext() {
	return (
		<div className="App">
			<UserContext.Provider value={'Shripad'}>
        <ChannelContext.Provider value={'shripadshet@gmail.com'}>
					<ComponentC />
				</ChannelContext.Provider>
			</UserContext.Provider>
		</div>
	)
}

export default UseContext