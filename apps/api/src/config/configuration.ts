export default () => ({
  port: process.env.PORT ? parseInt(process.env.PORT, 10) : 4000,
  supabase: {
    url: process.env.SUPABASE_URL ?? "",
    serviceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY ?? "",
  },
});
