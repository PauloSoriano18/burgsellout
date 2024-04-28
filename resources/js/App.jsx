import React from "react";
import ReactDOM from "react-dom/client";

import LayoutPublic from "./layouts/LayoutPublic";
import LayoutAdmin from "./layouts/LayoutAdmin";
import PageHome from "./pagepublic/PageHome";
import ProtectedRoutes from "./pageauth/ProtectedRoutes";
import Register from "./pageadmin/Register";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pageauth/Login";

import PanelAdmin from "./pageadmin/PanelAdmin";
import PanelClient from "./pageclient/PanelClient";
import UserAll from "./pageadmin/UserAll";
import UserUpdate from "./pageadmin/UserUpdate";
//import LayoutClient from "./layouts/LayoutClient";

//<Route index element={<PageHome />} />

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LayoutPublic />}>
                    <Route index element={<PageHome />} />
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                </Route>
                <Route element={<ProtectedRoutes />}>
                    <Route path="/admin" element={<LayoutAdmin />}>
                        <Route index element={<PanelAdmin />} />
                        <Route path="user" element={<UserAll />} />
                        <Route path="user/edit/:id" element={<UserUpdate />} />
                        <Route path="user/register" element={<Register />} />
                    </Route>
                    <Route path="/client" element={<PanelClient />}>
                        <Route index element={<PanelClient />} />
                    </Route>
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
if (document.getElementById("root")) {
    const Index = ReactDOM.createRoot(document.getElementById("root"));

    Index.render(<App />);
}
