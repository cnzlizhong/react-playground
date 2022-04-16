import { Route, Routes } from 'react-router-dom';
import DemoParentChildUseEffect from './demos/DemoParentChildUseEffect';
import Home from './Home';

const App = () => {
    return (
        <div className="h-full text-gray-700">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/demo">
                    <Route path="parent-child-useEffect" element={<DemoParentChildUseEffect />} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;
