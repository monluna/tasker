import { ConfigService } from '@nestjs/config';
import { MongooseModuleOptions } from '@nestjs/mongoose';

const getMongoString = (configService: ConfigService) =>
  'mongodb://' +
  configService.get('DB_HOST') +
  ':' +
  configService.get('DB_PORT')

const getMongoOptions = () => ({
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export const getMongoConfig = async (
  configService: ConfigService
): Promise<MongooseModuleOptions> => {
  console.log(getMongoString(configService));
  return {
    uri: getMongoString(configService),
    ...getMongoOptions(),
  };
};