import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Unauthorized from "./components/Unauthorized";
import Navbar from "./component/layout/Navbar";
import Login from "./components/pages/Login/Login";
import GatePassForm from "./components/pages/GatePass/GatePassForm";
import RequestTable from "./components/pages/MyRequest/RequestTable";
import ExecutiveApprove from "./components/pages/ExecutiveApprove/ExecutiveApprove";
import ApprovedPage from "./components/pages/ExecutiveApprove/ApprovedPage";
import RejectedPage from "./components/pages/ExecutiveApprove/RejectedPage";
import VerifyPage from "./components/pages/Verify/VerifyPage";
import VerifiedPage from "./components/pages/Verify/VerifiedPage";
import VerifyRejectedPage from "./components/pages/Verify/VerifyRejectedPage";
import MyReceiptPage from "./components/pages/MyReciept/MyReceiptPage";
import ItemTrackerPage from "./components/pages/ItemTracker/ItemTrackerPage";
import AddmoreItemPage from "./components/pages/GatePass/AddmoreItemPage";
import RequestDetails from "./components/pages/MyRequest/RequestDetails";
import ExecutiveApprovePending from "./components/pages/ExecutiveApprove/ExecutiveApprovePending";
import ExecutiveApproved from "./components/pages/ExecutiveApprove/ExecutiveApproved";
import ExecutiveRejected from "./components/pages/ExecutiveApprove/ExecutiveRejected";
import VerifyPending from "./components/pages/Verify/VerifyPending";
import VerifiedView from "./components/pages/Verify/VerifiedView";
import VerifyRejectedView from "./components/pages/Verify/VerifyRejectedView";
import Dispatch from "./components/pages/Dispatch/Dispatch";
import MyReceiptDetails from "./components/pages/MyReciept/MyReceiptDetails";
import AdminForm from "./components/pages/Admin/AdminForm";
import ItemTrackerDetails from "./components/pages/ItemTracker/ItemTrackerDetails";
import AddUserForm from "./components/pages/Admin/AddUserForm";

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
          <Route path="/request" element={<RequestDetails />} />
          <Route path="/myreceipt" element={<MyReceiptPage />} />
          <Route path="/myreceiptdetails" element={<MyReceiptDetails />} />

          

          
        </Route>

        {/* Executive Officer Role */}
        <Route element={<ProtectedRoute allowedRoles={["Executive Officer"]} />}>
          <Route path="/ex" element={<ExecutiveApprove />} />
          <Route path="/approved" element={<ApprovedPage />} />
          <Route path="/rejected" element={<RejectedPage />} />
          <Route path="/expending" element={<ExecutiveApprovePending />} />
          <Route path="/exapprove" element={<ExecutiveApproved />} />
          <Route path="/exrejected" element={<ExecutiveRejected />} />
        </Route>

        {/* Duty Officer Role */}
        <Route element={<ProtectedRoute allowedRoles={["Duty Officer"]} />}>
          <Route path="/verifypage" element={<VerifyPage />} />
          <Route path="/verifypending" element={<VerifyPending />} />
          <Route path="/verified" element={<VerifiedPage />} />
          <Route path="/verifyr" element={<VerifyRejectedPage />} />
          <Route path="/verifyview" element={<VerifiedView />} />
          <Route path="/verifyrejectedview" element={<VerifyRejectedView />} />
        </Route>

        {/* Security Officer Role */}
        <Route element={<ProtectedRoute allowedRoles={["Security Officer"]} />}>
          <Route path="/dispatch" element={<Dispatch />} />
        </Route>

        {/* Admin Role */}
        <Route element={<ProtectedRoute allowedRoles={["Admin"]} />}>
          <Route path="/admin" element={<AdminForm />} />
          <Route path="/user" element={<AddUserForm />} />
        </Route>

        {/* Unauthorized Page */}
        <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
    </>
  );
};

export default App;