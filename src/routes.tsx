import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage/Index";
import CharacterPage from "./pages/CharacterPage/Index";

const Router = createBrowserRouter([
    {
        path: '*',
        element: <Navigate to='/home' replace />
    }, {
        path: '/home',
        element: <HomePage />
    }, {
        path: '/character/:id',
        element: <CharacterPage /> 
    }
]);

export default Router;