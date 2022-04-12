import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";


function App() {
  const queryClient = new QueryClient();

  return (    
     <QueryClientProvider client={queryClient}>
      <div>
        테스트
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>  
  );
}

export default App;
