import "../css/app.css";
import { QueryClient, QueryClientProvider } from "react-query";
import ReactDOM from "react-dom";
import { ReactQueryDevtools } from "react-query/devtools";
import CanvasContainer from "./component/CanvasContainer";
import { MovementProvider } from "./context/MovementContext";
const queryClient = new QueryClient();

export function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <MovementProvider>
                <CanvasContainer />
                {process.env.NODE_ENV === "development" && (
                    <ReactQueryDevtools initialIsOpen={false} />
                )}
            </MovementProvider>
        </QueryClientProvider>
    );
}

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
