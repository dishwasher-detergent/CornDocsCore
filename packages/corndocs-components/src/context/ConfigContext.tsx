import React, { createContext, useState } from "react";

/* @ts-ignore */
const ConfigContext = createContext();

interface ProviderProps {
  children: React.ReactChild;
  value: any;
}

const ConfigProvider = ({ children, value }: ProviderProps) => {
  const [sidebar, setSidebar] = useState<any>(value);

  return (
    <ConfigContext.Provider value={{ sidebar, setSidebar }}>
      {children}
    </ConfigContext.Provider>
  );
};

export { ConfigProvider, ConfigContext };
