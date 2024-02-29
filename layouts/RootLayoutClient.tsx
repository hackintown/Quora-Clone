"use client";
import { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import RootLayout from "@/app/layout";
import { selectUser, selectIsAuthenticated, selectLoading } from "@/features/userAuthSlice";
import { useRouter } from 'next/navigation'
import { useEffect } from "react";

interface Props {
  children: ReactNode;
}

export default function RootLayoutClient({ children }: Props) {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isLoading = useSelector(selectLoading);
  const router = useRouter();

  useEffect(() => {
    if (authUser){
      dispatch(selectUser({
        
      }))
    }
    }
  }, []);

  return <RootLayout user={user}>{children}</RootLayout>;
}
