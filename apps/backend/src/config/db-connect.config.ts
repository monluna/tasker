import { ConfigService } from '@nestjs/config';
import { MongooseModuleOptions } from '@nestjs/mongoose';

const getMongoString = (configService: ConfigService) =>
  'mongodb+srv://' +
  configService.get('DB_LOGIN') + 
  ':' +
  configService.get('DB_PASSWORD') +
  "@" + 
  configService.get('DB_AUTHDATABASE') +
  '.vupqzoo.mongodb.net/';


export const getMongoConfig = async (
  configService: ConfigService
): Promise<MongooseModuleOptions> => {
  return {
    uri: getMongoString(configService),
  };
};