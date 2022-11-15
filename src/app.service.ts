import { Injectable } from '@nestjs/common';
import { SECRET_KEY, KEYS } from './constant';
@Injectable()
export class AppService {
  getText(): string {
    return 'KEY SERVER CREATED BY MANNQ !!!';
  }

  checkAuth(key: string): boolean {
    if (!key) return false;
    return KEYS.includes(key);
  }

  getKeys(key: string): string[] | boolean {
    if (!key) return false;
    if (SECRET_KEY !== key) return false;
    return KEYS;
  }
}
