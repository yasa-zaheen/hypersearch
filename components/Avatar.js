function Avatar({ className }) {
  return (
    <div className={`h-10 w-10 rounded-full overflow-hidden ${className}`}>
      <div className="h-full w-full bg-red-500"></div>
    </div>
  );
}

export default Avatar;
