import { createContext } from "react";
import useGlobalProvider from '../hooks/useGlobalProvider';
import { Analytics } from '@vercel/analytics/next';

const GlobalContext = createContext({});

export function GlobalProvider(props) {

  const valores = useGlobalProvider();

  return (
    <GlobalContext.Provider value={valores}>
      {props.children}
      <Analytics />
    </GlobalContext.Provider>
  )
}

export default GlobalContext;