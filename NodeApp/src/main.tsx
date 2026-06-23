import { createRoot } from 'react-dom/client'
import './index.css'
import './assets/font/font.css'
import App from './App.tsx'

import { ThemeProvider } from './context/ThemeContext.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux"
import { store } from './store/store.ts'
import { SearchProvider } from './context/SearchContext.tsx'
import { SelectedProvider } from './context/SelectedContext.tsx'

createRoot(document.getElementById('root')!).render(

  <Provider store={store}>

    <BrowserRouter>

      <SelectedProvider>
      <SearchProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
      </SearchProvider>
      </SelectedProvider>

    </BrowserRouter>

  </Provider>
)
