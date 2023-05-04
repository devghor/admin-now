import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'
import { MuiThemeProvider } from './styles/theme'
import Router from './router'
import store from './store'

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
  )
}

export default App
