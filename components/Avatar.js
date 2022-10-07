import Image from "next/image";

function Avatar({ className, src }) {
  return (
    <div
      className={`h-10 w-10 rounded-full overflow-hidden relative ${className}`}
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
