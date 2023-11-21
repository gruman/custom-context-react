import { useCustomContext } from '../state/context';
function App() {

  const { updateScore} = useCustomContext();

  return (
    <main>
      
     <h2>Home page</h2>
     <button onClick={() => updateScore(1)}>Add 1 to score</button>
    </main>
  );
}

export default App;
