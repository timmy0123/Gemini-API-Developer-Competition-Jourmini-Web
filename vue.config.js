const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    // Use environment variable PORT, or default to 3000 if not set
    port: process.env.PORT || 3000, 
    // Public URL to be used in development
    public: process.env.RAILWAY_PUBLIC_DOMAIN || "http://localhost:8080", // Default to localhost if not set
    host: "0.0.0.0", // Allow access from any network interface
  },
});
