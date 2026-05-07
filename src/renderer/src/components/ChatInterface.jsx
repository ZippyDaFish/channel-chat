import { useState } from 'react'
import ChatHistory from './ChatHistory'
import ChatInput from './ChatInput'

function ChatInterface() {
    const [messages, setMessages] = useState([]);

    const onSend = (text) => {
        // update local storage
        setMessages([...messages, text])

        // emit event
        if(text.trim()) {
            window.electronAPI.emitSocketEvent(
                "chat message",
                text
            );
        }
    }

    return (
        <div>
            <ChatHistory messages={messages}/>
            <ChatInput onSend={onSend}/>
        </div>
    )
}

export default ChatInterface