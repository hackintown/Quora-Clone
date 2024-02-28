import { ReactNode } from "react";
import { useSelector } from "react-redux";
import RootLayout from "@/app/layout";
import { selectUser, selectIsAuthenticated, selectLoading } from "@/features/userAuthSlice";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface Props {
  children: ReactNode;
}

export default function RootLayoutClient({ children }: Props) {
  const user = useSelector(selectUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isLoading = useSelector(selectLoading);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated && !isLoading && router.pathname !== "/login") {
      router.push("/login");
    }
  }, [isAuthenticated, isLoading, router]);

  return <RootLayout user={user}>{children}</RootLayout>;
}
