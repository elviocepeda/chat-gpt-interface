import { AppRouter } from "./router/AppRouter";
import { useStore } from "./store";
import { getColors } from "./common/constants";

function App() {
  const { store } = useStore();
  const { theme } = store;
  const { background } = getColors(theme);
  return (
    <div className="app_container" style={{ background }}>
      <AppRouter />
    </div>
  );
}

export default App;
