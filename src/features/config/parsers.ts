import type { ConfigProperties } from '@landbot/core';
import type { Config } from './types';

export const toConfig = (config: ConfigProperties): Config => {
  return {
    avatarUrl: config.avatar_url ?? '',
    tagline: config.tagline ?? '',
  };
};
