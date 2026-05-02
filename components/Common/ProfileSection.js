/**
 * Profile display inside the sidebar.
 */
const ProfileSection = ({ image, name, email }) => (
  <div className="text-center mt-6">
    <img src={image} alt="Profile" className="profile-image" />
    <h3 className="detail-heading">{name}</h3>
    <p className="detail-section">{email}</p>
  </div>
);

export default ProfileSection;
