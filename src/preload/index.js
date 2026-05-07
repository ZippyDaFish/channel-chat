const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    emitSocketEvent: (eventName, data) => {
        ipcRenderer.send('socket:emit', eventName, data);
    },

    onChatMessage: (callback) => {
        const subscription = (_, msg) => {
            callback(msg);
        };

        ipcRenderer.on(
            'socket:chat-message',
            subscription
        );

        // cleanup function
        return () => {
            ipcRenderer.removeListener(
                'socket:chat-message',
                subscription
            );
        };
    }
});