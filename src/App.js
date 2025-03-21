
import './scss/app.scss';

function App() {
  return (
      <div
          className="content"
          style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
          }}
      >
          <div
              className="malevich-square"
              style={{
                  width: '40vh',
                  height: '40vh',
                  backgroundColor: 'black',
              }}
          ></div>
      </div>
  );
}

export default App;
