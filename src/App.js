import PasswordGenerator from "./components/pass-gen";
import CaptchaGenerator from "./components/cap-gen";
function App() {  

  return (
    <div className="absolute w-full h-screen bg-black">
      <PasswordGenerator/>
      <CaptchaGenerator/>
    </div>
  );
}

export default App;
