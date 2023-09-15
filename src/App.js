import { Routes, Route, Navigate } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import { useState } from "react";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import PersonalAccountPie from "./components/PersonalAccountPie";
import BusinessAccountPie from "./components/BusinessAccountPie";
import InstituteAccountPie from "./components/InstituteAccountPie";
import Growthchart from "./components/Growthchart";
import PBI from "./components/PBI";
import PersonalAccountData from "./UserDataList/PersonalAccountData";
import BusinessAccountData from "./UserDataList/BusinessAccountData";
import InstituteAccountData from "./UserDataList/InstituteAccountData";
import TotalAppView from "./AppView/TotalAppView";
import Loginpage from "./Login/Loginpage";
import UserprofileData from "./userprofile/UserprofileData";
import UserImage from "./UserDataImage/UserImage";
import UserContentFilter from "./ContentFilter/UserContentFilter";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track user's login state
  console.log("IslogedIn", isLoggedIn);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {isLoggedIn && <Sidebar isSidebar={isSidebar} />}
          <main className="content">
            {isLoggedIn && <Topbar setIsSidebar={setIsSidebar} />}
            <Routes>
              <Route path="/" element={isLoggedIn ? <Navigate to="/Dashboard" /> : <Loginpage  setLogout={setIsLoggedIn} />} />
              {isLoggedIn && (
                <>
                  <Route path="/Dashboard" element={<Dashboard setLogout={setIsLoggedIn} />} />
                  {/* <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} /> */}
                  <Route path="/PersonalAccountPie" element={<PersonalAccountPie />} />
                  <Route path="/BusinessAccountPie" element={<BusinessAccountPie />} />
                  <Route path="/InstituteAccountPie" element={<InstituteAccountPie />} />
                  <Route path="/Growthchart" element={<Growthchart />} />
                  <Route path="/PBI" element={<PBI />} />
                  <Route path="/PersonalAccountData" element={<PersonalAccountData />} />
                  <Route path="/BusinessAccountData" element={<BusinessAccountData />} />
                  <Route path="/InstituteAccountData" element={<InstituteAccountData />} />
                  <Route path="/TotalAppView" element={<TotalAppView />} />
                  <Route path="/Userprofile" element={<UserprofileData />} />
                  <Route path="/Image" element={<UserImage />}/>
                  <Route path="/ContentFilter" element={<UserContentFilter/>}/>
                </>
              )}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;



// import { useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import Topbar from "./scenes/global/Topbar";
// import Sidebar from "./scenes/global/Sidebar";
// import Dashboard from "./scenes/dashboard";
// import Team from "./scenes/team";
// import Invoices from "./scenes/invoices";
// import Contacts from "./scenes/contacts";
// import Bar from "./scenes/bar";
// import Form from "./scenes/form";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";
// import { CssBaseline, ThemeProvider } from "@mui/material";
// import { ColorModeContext, useMode } from "./theme";
// import Calendar from "./scenes/calendar/calendar";
// import PersonalAccountPie from "./components/PersonalAccountPie";
// import BusinessAccountPie from "./components/BusinessAccountPie";
// import InstituteAccountPie from "./components/InstituteAccountPie";
// import Growthchart from "./components/Growthchart";
// import PBI from "./components/PBI";
// import PersonalAccountData from "./UserDataList/PersonalAccountData";
// import BusinessAccountData from "./UserDataList/BusinessAccountData";
// import InstituteAccountData from "./UserDataList/InstituteAccountData";
// import TotalAppView from "./AppView/TotalAppView";
// import Loginpage from "./Login/Loginpage";
// import Signuppage from "./Sign/Signuppage";
// import { BrowserRouter } from "react-router-dom";
// function App() {
//   const [theme, colorMode] = useMode();
//   const [isSidebar, setIsSidebar] = useState(true);

//   return (
//     <Routes>
//       <Route path="/" element={<Loginpage />} />
//       <Route path="/sign" element={<Signuppage />} />
//     </Routes>,
//     <ColorModeContext.Provider value={colorMode}>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <div className="app">
//           <Sidebar isSidebar={isSidebar} />
//           <main className="content">
//             <Topbar setIsSidebar={setIsSidebar} />
//             <Routes>
//               <Route path="/Dashboard" element={<Dashboard />} />
//               {/* <Route path="/team" element={<Team />} />
//               <Route path="/contacts" element={<Contacts />} />
//               <Route path="/invoices" element={<Invoices />} />
//               <Route path="/form" element={<Form />} />
              // <Route path="/bar" element={<Bar />} />
//               <Route path="/line" element={<Line />} />
//               <Route path="/faq" element={<FAQ />} />
//               <Route path="/calendar" element={<Calendar />} />
//               <Route path="/geography" element={<Geography />} /> */}
//               <Route path="/PersonalAccountPie" element={<PersonalAccountPie />} />
//               <Route path="/BusinessAccountPie" element={<BusinessAccountPie />} />
//               <Route path="/InstituteAccountPie" element={<InstituteAccountPie />} />
//               <Route path="/Growthchart" element={<Growthchart />} />
//               <Route path="/PBI" element={<PBI />} />
//               <Route path="/PersonalAccountData" element={<PersonalAccountData />} />
//               <Route path="/BusinessAccountData" element={<BusinessAccountData />} />
//               <Route path="/InstituteAccountData" element={<InstituteAccountData />} />
//               <Route path="/TotalAppView" element={<TotalAppView />} />
//             </Routes>
//           </main>
//         </div>
//       </ThemeProvider>
//     </ColorModeContext.Provider>
//   );
// }

// export default App;
