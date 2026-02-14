import { useEffect, useState } from "react";

export function Counter({ value, label, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startValue = 0;
    const duration = 1500;
    const increment = value / (duration / 16);

    const counter = setInterval(() => {
      startValue += increment;
      if (startValue >= value) {
        setCount(value);
        clearInterval(counter);
      } else {
        setCount(Math.floor(startValue));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [start, value]);

  return (
    <div>
      <h3 className="text-4xl font-bold text-primary">{count}+</h3>
      <p className="mt-2 text-sm text-gray-300">{label}</p>
    </div>
  );
}
