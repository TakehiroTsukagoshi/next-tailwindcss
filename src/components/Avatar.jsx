export const Avatar = ({ url, className }) => {
  return (
    <img
      loading="lazy"
      src={url}
      alt="profile pic"
      className={`h-10 w-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
    />
  );
};
