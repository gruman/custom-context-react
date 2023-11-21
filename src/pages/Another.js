import { useCustomContext } from '../state/context';

function App() {

  const { siteData, updateScore } = useCustomContext();

  return (
    <main>
      <h2>Another page from {siteData.url}</h2>
      <button onClick={() => updateScore(2)}>Add 2 to score</button>
    </main>
  );
}

export default App;
