import React, { createContext, useContext, useState, ReactNode } from "react";

interface User {
  username: string;
  email: string;
  password: string;
  hasEnrolled: boolean;
  company: {
    companyName: string;
    usersCompany: Array<{
      username: string;
      email: string;
    }>;
  };
}

interface UserContextType {
  user: User | null;
  signUp: (username: string, email: string, password: string) => void;
  signIn: (username: string, password: string) => void;
  updateEnrollment: () => void;
  addUserToCompany: (users: Array<{ username: string; email: string }>) => void;
  removeUserFromCompany: (index: number) => void; // New function to remove a user
  updateCompanyName: (companyName: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  const signUp = (username: string, email: string, password: string) => {
    const newUser: User = {
      username,
      email,
      password,
      hasEnrolled: false,
      company: {
        companyName: "",
        usersCompany: [],
      },
    };
    setUser(newUser);
  };

  const signIn = (username: string, password: string) => {
    if (user && user.username === username && user.password === password) {
      setUser(user);
    }
  };

  const updateEnrollment = () => {
    if (user) {
      setUser({
        ...user,
        hasEnrolled: true,
      });
    }
  };

  const addUserToCompany = (
    users: Array<{ username: string; email: string }>
  ) => {
    if (!user) {
      console.error("User is not signed in.");
      return;
    }

    const updatedUser = {
      ...user,
      company: {
        ...user.company,
        usersCompany: [...user.company.usersCompany, ...users],
      },
    };

    setUser(updatedUser);
  };

  const removeUserFromCompany = (index: number) => {
    if (!user) {
      console.error("User is not signed in.");
      return;
    }

    const updatedUser = {
      ...user,
      company: {
        ...user.company,
        usersCompany: user.company.usersCompany.filter((_, i) => i !== index),
      },
    };

    setUser(updatedUser);
  };

  const updateCompanyName = (companyName: string) => {
    if (user) {
      const updatedUser = {
        ...user,
        company: {
          ...user.company,
          companyName,
        },
      };

      setUser(updatedUser);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        signUp,
        signIn,
        updateEnrollment,
        addUserToCompany,
        removeUserFromCompany,
        updateCompanyName,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to access UserContext
export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
