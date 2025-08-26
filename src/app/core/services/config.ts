import { HttpHeaders } from '@angular/common/http';

export const baseUrl: string = 'http://192.168.120.106:9000/backend/api/v1';
export const mainProductionUrl: string = 'https://mygg.games';
export const getAccessToken = () => {
  return {
    headers: new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    }),
  }
};