"use client";
export default function ScrollButton({ scrollId }) {
  const handleScrollClick = () => {
    document.getElementById(scrollId).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <button onClick={handleScrollClick} className="button large cursor-pointer">
      SOUNDS GOOD, LET&apos;S ROLL
    </button>
  );
}
