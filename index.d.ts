import { FastifyPluginCallback } from 'fastify';
import Evervault from '@evervault/sdk';

export interface FastifyEvervaultOptions {
  /**
   * Evervault API Key
   *
   * @docs https://docs.evervault.com/sdks/nodejs
   */
  apiKey: string;
}


// export type FastifyEvervault = Evervault;

declare module "fastify" {
  interface FastifyInstance {
    evervault: {
      encrypt: (data: any) => Promise<string>;
    };
  }
}

export const FastifyEvervaultPlugin: FastifyPluginCallback<FastifyEvervaultOptions>;
export default FastifyEvervaultPlugin;