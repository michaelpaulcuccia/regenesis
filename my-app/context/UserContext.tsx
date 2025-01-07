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
      password: string;
      hasEnrolled: boolean;
    }>;
  };
}

interface UserContextType {
  user: User | null;
  signUp: (username: string, email: string, password: string) => void;
  signIn: (username: string, password: string) => void;
  updateEnrollment: () => void;
  addUserToCompany: (username: string, email: string, password: string) => void;
  updateCompanyName: (companyName: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

// Provider component
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
    username: string,
    email: string,
    password: string
  ) => {
    if (user) {
      const updatedUser = {
        ...user,
        company: {
          ...user.company,
          usersCompany: [
            ...user.company.usersCompany,
            { username, email, password, hasEnrolled: false },
          ],
        },
      };
      setUser(updatedUser);
    }
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
        updateCompanyName,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to access UserContext easily
export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
