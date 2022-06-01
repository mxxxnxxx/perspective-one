import { QueryClient, QueryClientProvider } from 'react-query';
import ReactDOM from "react-dom";

const queryClient = new QueryClient();


export function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <h1>Hello World React</h1>
        </QueryClientProvider>
    )
}


if (document.getElementById("app")) {
    ReactDOM.render(
        <App />, document.getElementById("app")
    );
}
