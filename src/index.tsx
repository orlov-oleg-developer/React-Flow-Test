import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { store } from './app/store.ts'
import { Provider } from 'react-redux'
import FlowRedux from './FlowRedux.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <React.StrictMode>
      <FlowRedux />
    </React.StrictMode>
  </Provider>,
)
