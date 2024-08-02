import { currentUser } from "@clerk/nextjs/server";

import { db } from "@/lib/db.ts";

export const checkUser = async () => {
  const user = await currentUser();

  // Check for current logged in clerk user

  if (!user) {
    return null;
  }
  // Check if user is already in the DB

  console.log("USER ID ", user.id);

  const loggedInUser = await db.user.findUnique({
    where: {
      clerkUserId: user.id,
    },
  });

  console.log("Check 1", loggedInUser);

  // If User is in Database then return user

  if (loggedInUser) {
    return loggedInUser;
  }

  console.log("Check 2", loggedInUser);

  // If User is not in Database,create new user

  const newUser = await db.user.create({
    data: {
      clerkUserId: user.id,
      name: `${user.firstName} ${user.lastName}`,
      imageUrl: user.imageUrl,
      email: user.emailAddresses[0].emailAddress,
    },
  });
  console.log({ newUser });

  return newUser;
};
