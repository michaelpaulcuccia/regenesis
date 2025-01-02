import React, { createContext, useContext, useState, ReactNode } from "react";

interface Enrollment {
  hasEnrolled: boolean;
  completedScreens: string[];
}

interface User {
  username: string;
  email: string;
  password: string;
  enrollment: Enrollment;
  company: {
    companyName: string;
    users: Array<{ username: string; email: string; password: string }>;
  };
}

interface UserContextType {
  user: User | null;
  signUp: (username: string, email: string, password: string) => void;
  signIn: (username: string, password: string) => void;
  startEnrollment: () => void;
  completeScreen: (screenName: string) => void;
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
      enrollment: {
        hasEnrolled: false,
        completedScreens: [],
      },
      company: {
        companyName: "",
        users: [],
      },
    };
    setUser(newUser);
  };

  const signIn = (username: string, password: string) => {
    if (user && user.username === username && user.password === password) {
      setUser(user);
    }
  };

  const startEnrollment = () => {
    if (user) {
      setUser({
        ...user,
        enrollment: {
          ...user.enrollment,
          hasEnrolled: false,
          completedScreens: [],
        },
      });
    }
  };

  const completeScreen = (screenName: string) => {
    if (user && !user.enrollment.completedScreens.includes(screenName)) {
      const updatedUser = {
        ...user,
        enrollment: {
          ...user.enrollment,
          completedScreens: [...user.enrollment.completedScreens, screenName],
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
          users: [...user.company.users, { username, email, password }],
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
        startEnrollment,
        completeScreen,
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
