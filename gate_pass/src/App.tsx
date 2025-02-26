import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Unauthorized from "./components/Unauthorized";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import GatePassForm from "./components/GatePassForm";
import RequestTable from "./components/RequestTable";
import ExecutiveApprove from "./components/ExecutiveApprove";
import ApprovedPage from "./components/ApprovedPage";
import RejectedPage from "./components/RejectedPage";
import VerifyPage from "./components/VerifyPage";
import VerifiedPage from "./components/VerifiedPage";
import VerifyRejectedPage from "./components/VerifyRejectedPage";
import MyReceiptPage from "./components/MyReceiptPage";
import ItemTrackerPage from "./components/ItemTrackerPage";
import AddmoreItemPage from "./components/AddmoreItemPage";
import RequestDetails from "./components/RequestDetails";
import ExecutiveApprovePending from "./components/ExecutiveApprovePending";
import ExecutiveApproved from "./components/ExecutiveApproved";
import ExecutiveRejected from "./components/ExecutiveRejected";
import VerifyPending from "./components/VerifyPending";
import VerifiedView from "./components/VerifiedView";
import VerifyRejectedView from "./components/VerifyRejectedView";
import Dispatch from "./components/Dispatch";
import MyReceiptDetails from "./components/MyReceiptDetails";
import AdminForm from "./components/AdminForm";
import ItemTrackerDetails from "./components/ItemTrackerDetails";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<MainLayout />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

const MainLayout: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* User Role */}
        <Route element={<ProtectedRoute allowedRoles={["User"]} />}>
          <Route path="/gate-pass" element={<GatePassForm />} />
          <Route path="/addmoreitem" element={<AddmoreItemPage />} />
          <Route path="/requesttable" element={<RequestTable />} />
          <Route path="/myreceipt" element={<MyReceiptPage />} />
          <Route path="/myreceiptdetails" element={<MyReceiptDetails />} />
        </Route>

        {/* Executive Officer Role */}
        <Route element={<ProtectedRoute allowedRoles={["Executive Officer"]} />}>
          <Route path="/ex" element={<ExecutiveApprove />} />
        </Route>

        {/* Duty Officer Role */}
        <Route element={<ProtectedRoute allowedRoles={["Duty Officer"]} />}>
          <Route path="/verifypage" element={<VerifyPage />} />
        </Route>

        {/* Security Officer Role */}
        <Route element={<ProtectedRoute allowedRoles={["Security Officer"]} />}>
          <Route path="/dispatch" element={<Dispatch />} />
        </Route>

        {/* Admin Role */}
        <Route element={<ProtectedRoute allowedRoles={["Admin"]} />}>
          <Route path="/admin" element={<AdminForm />} />
        </Route>

        {/* Unauthorized Page */}
        <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
    </>
  );
};

export default App;