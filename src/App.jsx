import Hello from "./components/Hello";
function App() {
  const person = {
    name: "한강",
    message: "노벨 축하합니다",
    emoji: "👍",
    numbers: [1, 2, 3],
  }
  return (
    <div className="App">
      <Hello person={person} />
    </div>
  );
}

export default App;
