function IconButton({ Icon, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`h-10 w-10 p-2 bg-[#5603ad] rounded-lg text-white`}
    >
      <Icon />
    </button>
  );
}

export default IconButton;
