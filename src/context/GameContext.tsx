import { createContext } from 'react';

const AppContext = createContext({
  isRunning: true,
  optionsBot: {} as any,
  count: {} as any,
  setIsRunning: (a: boolean) => {},
  setOptionsBot: ({ left, top }: { left: string; top: string }) => {},
  setCount: ({ minutes, seconds }: { minutes: number; seconds: number }) => {},
});

export default AppContext;
