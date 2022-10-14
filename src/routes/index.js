import { Routes, Route } from 'react-router-dom'

//Views
import Index from 'views/Index'

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Index />} />
        </Routes>
    )
}