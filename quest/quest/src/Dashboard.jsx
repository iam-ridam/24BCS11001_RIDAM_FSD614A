import { Routes, Route, Link } from 'react-router-dom'
import Profile from './Profile'
import Settings from './Settings'

function Dashboard() {
    return (
        <>
            <h1>Dashboard</h1>



            <Routes>
                <Route path="Profile" element={<Profile />} />
            </Routes>

            <Routes>
                <Route path = "Settings" element = {<Settings />} />
            </Routes>
        </>
    )
}

export default Dashboard