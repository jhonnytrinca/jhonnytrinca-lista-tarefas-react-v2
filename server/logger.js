import expressWinston from 'express-winston';
import winston from 'winston';

const { transports, format } = winston;
const { combine, timestamp, printf } = format;

const customFormat = combine(
  timestamp({ format: 'MMM-DD-YYYY HH:mm:ss' }),
  printf((info) => {
    return `${info.level} - ${info.timestamp} - ${info.message}`;
  })
);

const logger = expressWinston.logger({
  format: customFormat,
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'access.log', level: 'info' })
  ]
});

export default logger;
