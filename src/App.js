import './app.css'
function App() {

	const contentStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    };

	  const squareStyle = {
          width: '40vh',
          height: '40vh',
          backgroundColor: 'black',
      };

  return (
      <div className="content" style={contentStyle}>
          <div className="malevich-square" style={squareStyle}></div>
      </div>
  );
}

export default App;
