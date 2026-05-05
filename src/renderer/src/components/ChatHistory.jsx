function ChatHistory({ messages }) {
    return (
        <div>
            {messages.map((msg, index) => (
                <div key={index}>
                    {msg}
                </div>
            ))}
        </div>
    )
}

export default ChatHistory