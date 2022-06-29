import "../css/app.css";
import { QueryClient, QueryClientProvider } from "react-query";
import ReactDOM from "react-dom";
import { ReactQueryDevtools } from "react-query/devtools";
import CanvasContainer from "./component/CanvasContainer";
import { MovementProvider } from "./context/MovementContext";
import { Helmet } from "react-helmet";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var queryClient = new QueryClient();
export function App() {
  return /*#__PURE__*/_jsx(QueryClientProvider, {
    client: queryClient,
    children: /*#__PURE__*/_jsxs(MovementProvider, {
      children: [/*#__PURE__*/_jsxs(Helmet, {
        children: [/*#__PURE__*/_jsx("script", {
          type: "x-shader/x-vertex",
          id: "vertexshader",
          children: "attribute float scale;\nvoid main() {\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_PointSize = scale * ( 300.0 / - mvPosition.z );\n\tgl_Position = projectionMatrix * mvPosition;\n}"
        }), /*#__PURE__*/_jsx("script", {
          type: "x-shader/x-fragment",
          id: "fragmentshader",
          children: "uniform vec3 color;\nvoid main() {\n\tif ( length( gl_PointCoord - vec2( 0.5, 0.5 ) ) > 0.475 ) discard;\n\tgl_FragColor = vec4( color, 1.0 );\n}"
        })]
      }), /*#__PURE__*/_jsx(CanvasContainer, {}), process.env.NODE_ENV === "development" && /*#__PURE__*/_jsx(ReactQueryDevtools, {
        initialIsOpen: false
      })]
    })
  });
}
_c = App;

if (document.getElementById("app")) {
  ReactDOM.render( /*#__PURE__*/_jsx(App, {}), document.getElementById("app"));
}

var _c;

$RefreshReg$(_c, "App");
