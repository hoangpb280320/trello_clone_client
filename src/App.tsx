import { Route, Routes } from "react-router";
import MainPage from "./pages/mainPage";
import DashboardPage from "./pages/dashboardPage";
import MainLayout from "./layouts";
import LoginPage from "./pages/loginPage";

const renderPage = (page: JSX.Element) => {
  return <MainLayout>{page}</MainLayout>;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={renderPage(<MainPage />)} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={renderPage(<DashboardPage />)} />
    </Routes>
  );
}

export default App;
