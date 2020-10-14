import { Inject, Injectable } from '@nestjs/common';
import { CONFIG_OPTIONS } from './constants';
import { ConfigOptions } from './type/config-options';

@Injectable()
export class ConfigService {
  private readonly config: ConfigOptions;

  constructor(@Inject(CONFIG_OPTIONS) configOptions: ConfigOptions) {
    this.config = configOptions;
  }

  get(key: string): string | number {
    return this.config[key];
  }
}
