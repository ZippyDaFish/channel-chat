import { useState } from 'react';

function ChatInput({ onSend }) {
    const [text, setText] = useState("");

    const handleSend = () => {
        if (!text.trim()) return;
        console.log("onSend is:", onSend)
        onSend(text);
        setText("");
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div>
            <label>
                Enter text:
                <input
                    type="text" value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </label>
            <button onClick={handleSend}>Send</button>
        </div>
    );
}

export default ChatInput;