import React, { createContext } from 'react';
import type { FirmwareOptions } from '@/types/firmware';
import type { Tilt } from '@/models/tilt';

export type AppContextType = {
  firmwareOptions: FirmwareOptions;
  setFirmwareOptions: React.Dispatch<React.SetStateAction<FirmwareOptions>>;
  tilts: Tilt[];
  setTilts: React.Dispatch<React.SetStateAction<Tilt[]>>;
  yamlContent: string;
  setYamlContent: React.Dispatch<React.SetStateAction<string>>;
};

export const AppContext = createContext<AppContextType | undefined>(undefined);
