import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Header from "./Components/Header";
import Posts from "./Pages/Posts";
import Post from "./Pages/Post";
import "./App.css";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries:{
        refetchOnWindowFocus: false,
      }
    }
  });

  return (
    <div className="App bg-[#f5f5f5] h-full">
      <div className="container mx-auto py-6">
        <QueryClientProvider client={client}>
          <Router>
            <Header />
            <Routes>
              <Route path="/">
                <Route path="/posts" element={<Posts/>} />
                <Route path="/posts/:id" element={<Post/>} />
              </Route>
            </Routes>
          </Router>
        </QueryClientProvider>
      </div>
    </div>
  );
}

export default App;
