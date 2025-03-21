import { QueryClient, QueryClientProvider } from 'react-query'
import Cards from './components/card/Cards'
import Newsletter from './components/Newsletter'
import Profiles from './components/Profiles'

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={client}>
      <div>
        <Profiles />
        <Newsletter />
        <Cards />
      </div>
    </QueryClientProvider>
  )
}

export default App
