import { useState } from 'react'
import ChatHistory from './ChatHistory'
import ChatInput from './ChatInput'

function ChatInterface() {
    const [text, setText] = useState("");

    const onSend = (text) => {
        setText(text)
    }

    return (
        <div>
            <ChatHistory />
            <ChatInput onSend={onSend}/>
            <p>{text}</p>
        </div>
    )
}

export default ChatInterface