
function App() {
  const data = ['Amazon', 'Google', 'Microsoft', 'Apple']
  return (
    <div>
      <h1>Big Tech Companies</h1>
      <ul>
        {
          data.map((item) => {
            return <li key={item}>{item}</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
