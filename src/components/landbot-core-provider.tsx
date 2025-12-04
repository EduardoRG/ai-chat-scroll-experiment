import React, { type ReactNode, useContext, useEffect, useRef, useState } from 'react';
import { setConfig } from '@/features/config/configSlice';
import { toConfig } from '@/features/config/parsers';
import { useDispatch } from '@/hooks/useDispatch';
import { type ConfigProperties, Core } from '@landbot/core';

type LandbotCoreProviderProps = {
  configUrl: string;
  children: ReactNode;
};

type LandbotCoreProviderState = {
  landbotCore: Core | null;
  loading: boolean;
};

const initialState: LandbotCoreProviderState = {
  landbotCore: null,
  loading: true,
};

const LandbotCoreContext = React.createContext<LandbotCoreProviderState>(initialState);

export const LandbotCoreProvider = ({ configUrl, children }: LandbotCoreProviderProps) => {
  const landbotCore = useRef<Core | null>(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const initializeLandbotCore = async () => {
      try {
        const remoteConfig = (await fetch(configUrl).then((res) => res.json())) as ConfigProperties;
        dispatch(setConfig(toConfig(remoteConfig)));

        const landbotCoreInstance = new Core(remoteConfig);
        landbotCore.current = landbotCoreInstance;
      } finally {
        setLoading(false);
      }
    };

    initializeLandbotCore();

    return () => {
      if (landbotCore.current) {
        landbotCore.current.destroy();
      }
    };
  }, [configUrl, dispatch]);

  return (
    <LandbotCoreContext.Provider value={{ landbotCore: landbotCore.current, loading }}>
      {children}
    </LandbotCoreContext.Provider>
  );
};

export const useLandbotCore = () => {
  const context = useContext(LandbotCoreContext);

  if (!context) {
    throw new Error('useLandbotCore must be used within a LandbotCoreProvider');
  }

  return context;
};
