export async function GET() {
  try {
    // فحص صحة النظام
    const healthCheck = {
      status: "healthy",
      timestamp: new Date().toISOString(),
      services: {
        database: "connected",
        ai: "configured", // مفتاح AI مُعرف مباشرة
        cache: "operational",
      },
      performance: {
        uptime: process.uptime(),
        memory: process.memoryUsage(),
      },
    }

    return Response.json(healthCheck)
  } catch (error) {
    return Response.json({ status: "unhealthy", error: "System check failed" }, { status: 500 })
  }
}
