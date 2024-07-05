import { IAvatarProps } from "./types/Avatar.Types";

export default function Avatar({ name }: IAvatarProps) {
  const firstLetter = name?.charAt(0).toUpperCase();

  if (firstLetter) return <div className="avatar">{firstLetter}</div>;
}
