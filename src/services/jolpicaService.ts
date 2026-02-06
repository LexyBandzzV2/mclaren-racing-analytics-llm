/**
 * Jolpica API Service
 * Handles all communication with Jolpica API for 2015-2022 historical data
 */

import axios, { AxiosInstance } from 'axios';
import { ApiResponse, JolpicaResponse } from '@types/api';

class JolpicaService {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: import.meta.env.VITE_JOLPICA_API_BASE_URL || 'https://api.jolpica.com/api',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Add API key to requests if available
    if (import.meta.env.VITE_JOLPICA_API_KEY) {
      this.client.defaults.headers.common['X-API-Key'] =
        import.meta.env.VITE_JOLPICA_API_KEY;
    }
  }

  async getHistoricalRaces(year: number): Promise<any[]> {
    try {
      const response = await this.client.get<JolpicaResponse>(`/races/${year}`);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching historical races:', error);
      throw error;
    }
  }

  async getRaceData(year: number, round: number): Promise<ApiResponse<any>> {
    try {
      const response = await this.client.get<JolpicaResponse>(
        `/races/${year}/${round}`
      );
      return {
        data: response.data.data,
        timestamp: new Date().toISOString(),
        status: 'success',
      };
    } catch (error) {
      console.error('Error fetching race data:', error);
      throw error;
    }
  }

  async getHistoricalDrivers(year: number): Promise<any[]> {
    try {
      const response = await this.client.get<JolpicaResponse>(
        `/drivers/${year}`
      );
      return response.data.data;
    } catch (error) {
      console.error('Error fetching historical drivers:', error);
      throw error;
    }
  }

  async getHistoricalTelemetry(year: number, round: number, driverId: string) {
    try {
      const response = await this.client.get<JolpicaResponse>(
        `/telemetry/${year}/${round}/${driverId}`
      );
      return response.data.data;
    } catch (error) {
      console.error('Error fetching historical telemetry:', error);
      throw error;
    }
  }
}

export default new JolpicaService();
