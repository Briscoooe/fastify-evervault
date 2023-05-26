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


export type FastifyEvervault = typeof Evervault;

declare module "fastify" {
  interface FastifyInstance {
    evervault: FastifyEvervault;
  }
}

export const FastifyEvervaultPlugin: FastifyPluginCallback<FastifyEvervaultOptions>;
export default FastifyEvervaultPlugin;