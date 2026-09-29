import Image from "next/image";

function Profile({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <Image
        src={image}
        alt={title}
        width={35}
        height={35}
      />

      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Profile;