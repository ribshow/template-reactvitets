import "./App.css";
import "./index.css";
import { Logos } from "./pages/Main/components/logos";

export default function App() {
  return (
    <>
      <div className="min-h-full welcome container-index">
        <div className="h-full cont">
          <div className="container flex-grow">
            <Logos />
          </div>
        </div>
      </div>
    </>
  );
}
