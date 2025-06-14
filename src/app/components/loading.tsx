// components/Loading.tsx
import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 via-yellow-50 to-yellow-100">
      <div className="w-16 h-16 border-4 border-t-4 border-t-amber-500 border-amber-300 rounded-full animate-spin shadow-lg"></div>
    </div>
  );
};

export default Loading;
