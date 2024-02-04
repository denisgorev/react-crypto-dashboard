
import { AppLayout } from "./components/layout/AppLayout";
import { CryptoContextProvider } from "./context/crypto-context";

export default function App() {
  // return <h1>React Crypto App</h1>
  return (
    <CryptoContextProvider>
<AppLayout />
    </CryptoContextProvider>
  );
}
