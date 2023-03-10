import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layout/defaultLayout";
import { Home } from "./pages/Home";
import { Stoichiometry } from "./pages/matters/chemical/Stoichiometry";
import { Theory } from "./pages/matters/mathematic/Theory";
import { Vector } from "./pages/matters/pshycs/Vectors";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout /> }>
                <Route path='/' element={<Home />} />
                <Route path='/matters/mathematic/theory' element={<Theory />}/>
                <Route path='/matters/pshycs/vector' element={<Vector />}/>
                <Route path='/matters/chemical/stoichiometry' element={<Stoichiometry />}/>
            </Route>
        </Routes>
    )
}