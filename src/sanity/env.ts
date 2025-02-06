export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-02-01';

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
);

// ✅ Check if the token is private or public
export const token = assertValue(
  "skA8mUxwp9fn1Z6BpNXlBuT84UVh4LUfC4iD1VkrSfVoBhjISgqmSufp4K7o1ROWi0jEdIkzUpFYXJgL49scCzBB5Go6cPe5c8GdEQvZdE6cPnI1NSM1HDBp4smPu1RItsP1SoxhrIpzTGSS98wVOfBd0TRJV3izaYznQ0qD7QYcEVAWzw3S",
  'Missing environment variable: NEXT_API_TOKEN'
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (!v) {
    throw new Error(errorMessage);
  }
  return v;
}
