import "./App.css";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import ErrorPage from "./pages/ErrorPage";
import Messages from "./components/campaigns/Messages";
import ScheduledMessages from "./components/campaigns/ScheduledMessages";
import ManageCampaigns from "./components/campaigns/ManageCampaigns";
import Drafts from "./components/campaigns/Drafts";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<DashboardPage />} errorElement={<ErrorPage />}>
        <Route errorElement={<ErrorPage />}>
          <Route index element={<Messages />} />
          <Route path="campaigns/messages" element={<Messages />} />
          <Route path="campaigns/scheduled" element={<ScheduledMessages />} />
          <Route path="campaigns/manage" element={<ManageCampaigns />} />
          <Route path="campaigns/drafts" element={<Drafts />} />
        </Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
