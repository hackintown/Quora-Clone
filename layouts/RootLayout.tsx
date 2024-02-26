// RootLayoutClient.tsx

import { ReactNode } from "react";
import { useSelector } from "react-redux";
import RootLayout from "@/app/layout";
import { selectUser } from "@/features/userAuthSlice";

interface Props {
  children: ReactNode;
}

export default function RootLayoutClient({ children }: Props) {
  const user = useSelector(selectUser);

  return <RootLayout user={user}>{children}</RootLayout>;
}
