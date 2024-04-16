import { auth } from "@clerk/nextjs";

const adminIds = ["user_2dqJkIn1k8PWwWaSvtiPHPc3FgG"];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
