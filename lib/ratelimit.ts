import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

export const contactRateLimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(4, "1 h"),
  analytics: true,
  prefix: "@upstash/ratelimit/contact",
});