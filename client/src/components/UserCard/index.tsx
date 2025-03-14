import { User } from "@/state/api";
import Image from "next/image";
import React from "react";

type Props = {
  user: User;
};

function UserCard({ user }: Props) {
  return (
    <div className="flex items-center rounded bg-white  p-4 shadow dark:bg-dark-secondary dark:text-white">
      {user.profilePictureUrl && (
        <Image
          src={`${process.env.NEXT_PUBLIC_S3_URL}/p1.jpeg`}
          alt="profile picture"
          width={32}
          height={32}
          loading="lazy"
          className="rounded-full"
        />
      )}
      <div className="ml-4">
        <h3>{user.username}</h3>
        <p>{user.email}</p>
      </div>
    </div>
  );
}

export default UserCard;
