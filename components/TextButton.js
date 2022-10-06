function TextButton({ text, onClick }) {
  return (
    <button
      className={`bg-[#5603ad] text-white text-sm px-4 py-2 rounded-lg hover:shadow-lg duration-100 ease-in-out active:scale-95`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default TextButton;
