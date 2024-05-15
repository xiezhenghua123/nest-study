import winston from 'winston';

// winston可以用来记录日志，功能强大
const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.simple(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.Http({
      host: 'localhost',
      port: 3000,
      path: '/log/add-log',
    }),
  ],
});

logger.info('测试日志');
logger.error('测试日志error');
logger.debug('测试日志debug');
