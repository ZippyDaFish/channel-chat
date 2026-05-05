import { useState } from 'react'
import ChatHistory from './ChatHistory'
import ChatInput from './ChatInput'

function ChatInterface() {
    const [messages, setMessages] = useState([]);

    const onSend = (text) => {
        setMessages([...messages, text])
    }

    return (
        <div>
            <ChatHistory messages={messages}/>
            <ChatInput onSend={onSend}/>
        </div>
    )
}

export default ChatInterface