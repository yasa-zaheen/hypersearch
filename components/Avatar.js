import Image from "next/image";

function Avatar({ className, src }) {
  return (
    <div
      className={`min-h-10 min-w-10 max-h-10 max-w-10 h-10 w-10 rounded-full overflow-hidden relative ${className}`}
    >
      <Image
        src={src}
        layout="fill"
        className="object-cover"
        alt="profile-picture"
      />
    </div>
  );
}

export default Avatar;
