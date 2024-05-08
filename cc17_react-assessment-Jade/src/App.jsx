import Router from "./routes/Router";
import AuthContextProvider from "./context/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <Router />
    </AuthContextProvider>
  );
}

export default App;
