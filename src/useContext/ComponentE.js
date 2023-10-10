import React, { useContext } from 'react'
import ComponentF from './ComponentF'
import { UserContext,ChannelContext } from './UseContext'

function ComponentE() {

  const user = useContext(UserContext)
  const channel = useContext(ChannelContext)
  return <div> User is {user} and email is {channel}</div>
}

export default ComponentE