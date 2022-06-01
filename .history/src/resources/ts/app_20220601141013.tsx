import { QueryClient, QueryClientProvider } from 'react-query';
import ReactDOM from "react-dom";
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();


export function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <h1>Hello World React</h1>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}


if (document.getElementById("app")) {
    ReactDOM.render(
        <App />, document.getElementById("app")
    );
}
