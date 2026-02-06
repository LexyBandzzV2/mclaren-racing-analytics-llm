/**
 * API and service layer types
 */

import { Season, Race, Session, Driver } from './telemetry';

export interface ApiResponse<T> {
  data: T;
  timestamp: string;
  status: 'success' | 'error';
  error?: {
    code: string;
    message: string;
  };
}

export interface DataCache<T> {
  data: T;
  timestamp: number;
  expiresAt: number;
}

export interface OpenF1Response {
  data: any[];
  meta: {
    count: number;
    offset: number;
    limit: number;
  };
}

export interface JolpicaResponse {
  status: string;
  data: any;
  timestamp: string;
}

export interface FilterOptions {
  year?: number;
  round?: number;
  driverId?: string;
  teamId?: string;
  sessionType?: string;
  compound?: string;
  startDate?: string;
  endDate?: string;
}

export interface SortOptions {
  field: string;
  order: 'asc' | 'desc';
}

export interface PaginationOptions {
  page: number;
  limit: number;
  sortBy?: SortOptions;
}

export interface QueryOptions extends PaginationOptions {
  filters?: FilterOptions;
}

export interface ServiceOptions {
  cacheEnabled: boolean;
  cacheDuration: number; // minutes
  timeout: number; // milliseconds
}
