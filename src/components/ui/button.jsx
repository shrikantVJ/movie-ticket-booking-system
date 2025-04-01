// components/ui/button.js

export function Button({ onClick, children, className }) {
  return (
    <button 
      onClick={onClick} 
      className={`bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition ${className}`}
    >
      {children}
    </button>
  );
}
