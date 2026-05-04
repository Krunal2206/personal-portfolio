import Image from "next/image";

const ProfileSection = ({ image, name, email }) => (
  <div className="text-center mt-6">
    <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden border-2 border-[var(--secondary-color)] shadow-md">
      <Image src={image} alt={name} fill className="object-cover" priority />
    </div>
    <h3 className="detail-heading">{name}</h3>
    <p className="detail-section">{email}</p>
  </div>
);

export default ProfileSection;
