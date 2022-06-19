import "../css/app.css"
import { QueryClient, QueryClientProvider } from 'react-query';
import ReactDOM from "react-dom";
import { ReactQueryDevtools } from 'react-query/devtools';
import EnhancedCanvasContainer from "./container/EnhancedCanvasContainer";

const queryClient = new QueryClient();

export function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <EnhancedCanvasContainer />
            {process.env.NODE_ENV === 'development' && (
                <ReactQueryDevtools initialIsOpen={false} />
            )}
        </QueryClientProvider>
    )
}


if (document.getElementById("app")) {
    ReactDOM.render(
        <App />, document.getElementById("app")
    );
}
