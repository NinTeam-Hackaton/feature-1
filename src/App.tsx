import { LayoutRoot } from "./layout";
import { SidebarComponent, ComponentsLibrary } from "./components";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <SidebarComponent />
      <ComponentsLibrary />
    </>
  );
}

export default App;
