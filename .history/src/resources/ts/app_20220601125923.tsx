import ReactDOM from "react-dom";



export function App() {
    return (
        <h1>Hello World React</h1>
    )
}


if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
