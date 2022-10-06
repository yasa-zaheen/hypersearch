function TextButton({ text, backgroundColor, color, onClick }) {
  return (
    <button
      className={`bg-[${backgroundColor}] text-[${color}] text-sm px-4 py-2 rounded-lg hover:shadow-lg duration-100 ease-in-out active:scale-95`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default TextButton;
