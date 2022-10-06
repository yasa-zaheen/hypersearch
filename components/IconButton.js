function IconButton({ Icon, backgroundColor, color, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`h-10 w-10 p-2 bg-[${backgroundColor}] rounded-lg text-[${color}]`}
    >
      <Icon />
    </button>
  );
}

export default IconButton;
