import { DynamicModule, Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import { CONFIG_OPTIONS } from './constants';
import { ConfigOptions } from './type/config-options';

@Module({})
export class ConfigModule {
  static register(configOptions: ConfigOptions): DynamicModule {
    return {
      module: ConfigModule,
      providers: [{ provide: CONFIG_OPTIONS, useValue: configOptions }, ConfigService],
      exports: [ConfigService],
    };
  }
}
