import { useEffect, useState } from 'react'
import ChatHistory from './ChatHistory'
import ChatInput from './ChatInput'

function ChatInterface() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const cleanup = window.electronAPI.onChatMessage((msg) => {
            setMessages((prev) => [...prev, msg]);
        });

        return cleanup;
    }, []);

    const onSend = (text) => {
        if(!text.trim()) return;

        setMessages((prev) => [...prev, text]);

        window.electronAPI.emitSocketEvent(
            "chat message",
            text
        );
    }

    return (
        <div>
            <ChatHistory messages={messages}/>
            <ChatInput onSend={onSend}/>
        </div>
    )
}

export default ChatInterface