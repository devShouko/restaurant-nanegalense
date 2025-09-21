
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '@pages/HomePage';
import CookiePage from '@pages/Legal/Cookies/CookiePage';
import TermsOfServicePage from '@pages/Legal/TermsOfService/TermsServicePage';
import PrivacyPolicyPage from "@pages/Legal/PrivacyPolicy/PrivacyPage";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cookies-policy" element={<CookiePage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
            
          </Routes>
        </BrowserRouter>
    </div>
  );
}


export default App;