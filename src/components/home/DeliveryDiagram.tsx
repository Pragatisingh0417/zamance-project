export default function DeliveryDiagram() {
  return (
    <div className="w-full overflow-x-auto">
      <svg
        viewBox="0 0 900 320"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Arrow marker */}
        <defs>
          <marker
            id="arrow"
            markerWidth="10"
            markerHeight="10"
            refX="6"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L6,3 L0,6" fill="#1E3A8A" />
          </marker>
        </defs>

        {/* Step boxes */}
        {[
          { x: 40, title: "Problem", desc: "Business challenges, constraints, goals" },
          { x: 260, title: "Solution", desc: "Practical, outcome-driven design" },
          { x: 480, title: "Execution", desc: "Delivery ownership & governance" },
          { x: 700, title: "Outcomes", desc: "Measurable business impact" },
        ].map((step, i) => (
          <g key={step.title}>
            <rect
              x={step.x}
              y="80"
              rx="16"
              ry="16"
              width="180"
              height="120"
              fill="white"
              stroke={i < 2 ? "#1E3A8A" : "#1FA45B"}
              strokeWidth="2"
            />
            <text
              x={step.x + 90}
              y="120"
              textAnchor="middle"
              fontSize="16"
              fontWeight="600"
              fill="#0F172A"
            >
              {step.title}
            </text>
            <text
              x={step.x + 90}
              y="145"
              textAnchor="middle"
              fontSize="12"
              fill="#475569"
            >
              {step.desc}
            </text>
          </g>
        ))}

        {/* Arrows */}
        <line
          x1="220"
          y1="140"
          x2="260"
          y2="140"
          stroke="#1E3A8A"
          strokeWidth="2"
          markerEnd="url(#arrow)"
        />
        <line
          x1="440"
          y1="140"
          x2="480"
          y2="140"
          stroke="#1E3A8A"
          strokeWidth="2"
          markerEnd="url(#arrow)"
        />
        <line
          x1="660"
          y1="140"
          x2="700"
          y2="140"
          stroke="#1FA45B"
          strokeWidth="2"
          markerEnd="url(#arrow)"
        />
      </svg>
    </div>
  );
}
