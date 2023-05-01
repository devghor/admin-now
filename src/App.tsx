import Router from './router';
import { Provider } from 'react-redux';
import store from './store';
import { Toaster } from 'react-hot-toast';
import { MuiThemeProvider } from './styles/theme';

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <Toaster position="top-center" />
        <MuiThemeProvider>
          <Router />
        </MuiThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
