function TextButton({ text, onClick, className }) {
  return (
    <button
      className={`bg-[#5603ad] px-4 py-2 text-white text-sm rounded-lg hover:shadow-lg duration-100 ease-in-out active:scale-95 ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default TextButton;
