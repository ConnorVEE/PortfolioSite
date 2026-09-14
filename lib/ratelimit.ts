import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

export const contactRateLimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(1, "30 s"),
  analytics: true,
  prefix: "@upstash/ratelimit/contact",
});