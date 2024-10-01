import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import TopNav from 'components/nav/Topnav';
import SideNav from 'components/nav/Sidenav';
import Overview from 'components/pages/Overview';
import AddScriptTag from 'components/pages/installation/AddScriptTag';
import PositionCommentSection from 'components/pages/installation/PositionCommentSection';
import CustomizeColors from 'components/pages/customization/colors';
import CustomizeFontSize from 'components/pages/customization/fontSize';


function App() {
  return (
    <BrowserRouter>
      <div>
        <TopNav />
        <main>
          <SideNav />
          <div id="content_page">
              <div>
                <Routes>
                  <Route path="/" element={<Overview />} />
                  <Route path="/installation/add_script_tag" element={<AddScriptTag />} />
                  <Route path="/installation/position_comment_section" element={<PositionCommentSection />} />
                  <Route path="/customization/colors" element={<CustomizeColors />} />
                  <Route path="/customization/font_size" element={<CustomizeFontSize />} />
                </Routes>
              </div>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;