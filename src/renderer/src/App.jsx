import ChatInterface from "./components/ChatInterface"

function App() {
  const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <ChatInterface />
    </>
  )
}

export default App
