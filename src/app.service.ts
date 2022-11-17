import { Injectable } from '@nestjs/common';
import { SECRET_KEY, KEYS } from './constant';
import { MANNQ_DATA } from './interface';
@Injectable()
export class AppService {
  tempData: MANNQ_DATA;
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

  pushData(data: MANNQ_DATA): boolean {
    const isValid = Object.values(data).every((v) => !!v);
    if (isValid) {
      this.tempData = data;
      return true;
    } else {
      return false;
    }
  }

  pullData(): MANNQ_DATA | boolean {
    return this.tempData ?? false;
  }

  clearData(): boolean {
    this.tempData = null;
    return true;
  }
}
