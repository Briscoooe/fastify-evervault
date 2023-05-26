import type { FastifyPluginAsync } from 'fastify';
import type Evervault from '@evervault/sdk';

declare namespace fastifyEvervault {
  export interface FastifyEvervaultOptions {
    /**
     * Evervault API key
     * https://docs.evervault.com/sdks/nodejs
     */
    apiKey: string;
  }
  export type FastifyEvervaultPlugin = Evervault
  export const fastifyEvervault: FastifyEvervaultPlugin;
  export { fastifyEvervault as default };
}

type FastifyEvervault = FastifyPluginAsync<fastifyEvervault.FastifyEvervaultOptions>;
declare function fastifyEvervault(...params: Parameters<FastifyEvervault>): FastifyEvervault;
export = fastifyEvervault;