import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import { Toaster } from 'react-hot-toast'
import { useUserData } from '@/lib/hooks'
import { UserContext } from '@/lib/context';

function App({ Component, pageProps }) {
  const userData = useUserData();    
    
    
    return (
      <UserContext.Provider value={{ user: {}, username: 'Ergys' }}>
        <Navbar />
        <Component {...pageProps} />
        <Toaster />
      </UserContext.Provider>
    );
  }

     

  
export default App; 
