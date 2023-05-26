import type { FastifyPluginAsync } from 'fastify';
import Evervault from '@evervault/sdk';
declare module "fastify" {
  interface FastifyInstance {
    evervault: InstanceType<typeof Evervault>;
  }
}
type FastifyEvervault = FastifyPluginAsync<fastifyEvervault.FastifyEvervaultOptions>;
declare namespace fastifyEvervault {
  export interface FastifyEvervaultOptions {
    /**
     * Evervault API Key
     *
     * @docs https://docs.evervault.com/sdks/nodejs
     */
    apiKey: string;
  }
  export const FastifyEvervault: FastifyEvervault;
  export { FastifyEvervault as default };
}

declare function fastifyEvervault(...params: Parameters<FastifyEvervault>): ReturnType<FastifyEvervault>
export = fastifyEvervault