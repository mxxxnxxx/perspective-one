import "../css/app.css";
import "../css/reset.css";

import {QueryClient, QueryClientProvider} from "react-query";
import ReactDOM from "react-dom";
import {ReactQueryDevtools} from "react-query/devtools";
import CanvasContainer from "./component/CanvasContainer";
import {MovementProvider} from "./context/MovementContext";
import Text from "./component/Text";
import {BrowserRouter} from "react-router-dom";

const queryClient = new QueryClient();


export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/">
                    <Text/>
                </Route>
                <Route exact path="/canvas">
                    <CanvasContainer/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

if (document.getElementById("app")) {
    ReactDOM.render(
        <QueryClientProvider client={queryClient}>
            <MovementProvider>
                <App/>
                {process.env.NODE_ENV === "development" && (
                    <ReactQueryDevtools initialIsOpen={false}/>
                )}
            </MovementProvider>
        </QueryClientProvider>
        , document.getElementById("app"));
}
