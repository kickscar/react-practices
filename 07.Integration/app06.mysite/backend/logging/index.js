const winston = require('winston');
const winstonDaily = require('winston-daily-rotate-file');
const path = require('path');

// Log Level
// error: 0, warn: 1, info: 2, http: 3, verbose: 4, debug: 5, silly: 6

const { combine, timestamp, printf } = winston.format;

const logDirectory = path.join(path.dirname(require.main.filename), process.env.LOG_LOCATION);
const logFormat = printf(log => `${log.timestamp} ${log.level}: ${log.message}`);

const logger = winston.createLogger({
  format: combine(timestamp({
    format: 'YYYY-MM-DD HH:mm:ss',
  }), logFormat),

  transports: [
    // log file for info level
    new winstonDaily({
      level: 'info',
      datePattern: 'YYYY-MM-DD',
      dirname: logDirectory,
      filename: `%DATE%.log`,
      maxFiles: 30,
      zippedArchive: true
    }),

    // log file for error level
    new winstonDaily({
      level: 'error',
      datePattern: 'YYYY-MM-DD',
      dirname: path.join(logDirectory, 'error'),
      filename: `%DATE%.error.log`,
      maxFiles: 30,
      zippedArchive: true
    })]
});

process.env.PROFILE === 'dev' && logger.add(new winston.transports.Console({
  format: winston.format.combine(winston.format.colorize(), winston.format.simple())
}));

module.exports = logger;