/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./configs/Schema.jsx",
  dialect: 'postgresql',
  dbCredentials: {
  url:"postgresql://neondb_owner:JVKqISLPC81H@ep-autumn-mountain-a5qccf97.us-east-2.aws.neon.tech/neondb?sslmode=require"
  }
};