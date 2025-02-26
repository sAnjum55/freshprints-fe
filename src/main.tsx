import { persistor, store } from './redux/store.ts'

import App from './App.tsx'
import { PersistGate } from 'redux-persist/es/integration/react'
import { Provider } from 'react-redux'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  </StrictMode>,
)
