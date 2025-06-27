/**
 * Copyright 2025 Aadarsh Chaudhary
 *
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */


// components/AnimatedBackground.jsx
export default function AnimatedBackground() {
  return (
    <>
      <div className="pointer-events-none fixed -top-20 -left-20 w-96 h-96 bg-purple-700 opacity-20 rounded-full blur-3xl animate-pulse" />
      <div className="pointer-events-none fixed top-1/2 -right-32 w-96 h-96 bg-indigo-500 opacity-20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="pointer-events-none fixed bottom-0 left-1/3 w-72 h-72 bg-blue-700 opacity-20 rounded-full blur-2xl animate-pulse delay-2000" />
    </>
  );
}
