import { Routes, Route, NavLink } from "react-router-dom";

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">Our Services</h1>

      <div className="flex gap-6 mb-10">
        <NavLink to="data">Data</NavLink>
        <NavLink to="technology">Technology</NavLink>
        <NavLink to="ai-automations">AI Automations</NavLink>
        <NavLink to="engineering">Engineering</NavLink>
      </div>

      <Routes>
        <Route path="data" element={<div>Data Services</div>} />
        <Route path="technology" element={<div>Technology Services</div>} />
        <Route path="ai-automations" element={<div>AI Automations</div>} />
        <Route path="engineering" element={<div>Engineering Services</div>} />
      </Routes>
    </div>
  );
}
