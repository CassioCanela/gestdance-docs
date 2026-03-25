const PocketBase = require('pocketbase/cjs');

const pb = new PocketBase('http://localhost:8091');

async function generateMetrics() {
  try {
    await pb.admins.authWithPassword('admin@escolateste.com.br', 'admin123');

    const activeUsers = await pb.collection('users').getFullList({
      filter: 'created >= @now - 30d',
    });

    const sales = await pb.collection('sales').getFullList();
    const feedback = await pb.collection('feedback').getFullList();
    const errors = await pb.collection('logs').getFullList({
      filter: 'level = "error"',
    });

    const metrics = {
      activeUsers: activeUsers.length,
      totalSales: sales.length,
      totalFeedback: feedback.length,
      totalErrors: errors.length,
      averageRating: feedback.reduce((acc, f) => acc + f.rating, 0) / feedback.length || 0,
      timestamp: new Date().toISOString(),
    };

    console.log('📊 Métricas do BETA:');
    console.table(metrics);

    return metrics;
  } catch (error) {
    console.error('❌ Erro:', error);
  }
}

generateMetrics();
