import { useEffect, useState } from "react";
import { getAllNFTs, isWallectConnected } from "./Blockchain.Services";
import Alert from "./component/Alert";
import Items from "./component/Items";
import CreateNFT from "./component/CreateNFT";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Loading from "./component/Loading";
import ShowNFT from "./component/ShowNFT";
import Transactions from "./component/Transactions";
import UpdateNFT from "./component/UpdateNFT";

import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Certification from "./scenes/certificate";
import Brand from "./scenes/brand";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import Entity from "./scenes/entity";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";

const App = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    await isWallectConnected();
    await getAllNFTs();
  }, []);

  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <div className="min-h-screen">
              <div className="gradient-bg-hero">
                <Header />
              </div>

              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/entity" element={<Entity />} />
                <Route path="/brand" element={<Brand />} />
                <Route path="/certificate" element={<Certification />} />
                <Route path="/team" element={<Team />} />
                <Route path="/form" element={<Form />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/geography" element={<Geography />} />
                <Route path="/hero" element={<Hero />} />
                <Route path="/addeditems" element={<Items />} />
                <Route path="/certifications" element={<Transactions />} />
              </Routes>
              <CreateNFT />
              <ShowNFT />
              <UpdateNFT />
              <Alert />
              <Footer />
              <Loading />
            </div>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
