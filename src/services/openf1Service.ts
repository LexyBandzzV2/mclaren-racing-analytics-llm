/**
 * OpenF1 API Service
 * Handles all communication with OpenF1 API for 2023+ data
 */

import axios, { AxiosInstance } from 'axios';
import { ApiResponse, OpenF1Response } from '@types/api';

class OpenF1Service {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: import.meta.env.VITE_OPENF1_API_BASE_URL || 'https://api.openf1.org/v1',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Add API key to requests if available
    if (import.meta.env.VITE_OPENF1_API_KEY) {
      this.client.defaults.headers.common['X-API-Key'] =
        import.meta.env.VITE_OPENF1_API_KEY;
    }
  }

  async getSeasons(): Promise<number[]> {
    try {
      const response = await this.client.get<OpenF1Response>('/seasons');
      return response.data.data.map((s: any) => s.year).sort((a, b) => b - a);
    } catch (error) {
      console.error('Error fetching seasons:', error);
      throw error;
    }
  }

  async getRaces(year: number): Promise<ApiResponse<any[]>> {
    try {
      const response = await this.client.get<OpenF1Response>('/races', {
        params: { year },
      });
      return {
        data: response.data.data,
        timestamp: new Date().toISOString(),
        status: 'success',
      };
    } catch (error) {
      console.error('Error fetching races:', error);
      throw error;
    }
  }

  async getSessionData(year: number, round: number, sessionType: string) {
    try {
      const response = await this.client.get<OpenF1Response>('/sessions', {
        params: { year, round, session_type: sessionType },
      });
      return response.data.data;
    } catch (error) {
      console.error('Error fetching session data:', error);
      throw error;
    }
  }

  async getDrivers(year: number): Promise<any[]> {
    try {
      const response = await this.client.get<OpenF1Response>('/drivers', {
        params: { year },
      });
      return response.data.data;
    } catch (error) {
      console.error('Error fetching drivers:', error);
      throw error;
    }
  }

  async getTelemetry(sessionId: string, driverId: string) {
    try {
      const response = await this.client.get<OpenF1Response>('/telemetry', {
        params: { session_id: sessionId, driver_id: driverId },
      });
      return response.data.data;
    } catch (error) {
      console.error('Error fetching telemetry:', error);
      throw error;
    }
  }

  async getLapTimes(sessionId: string) {
    try {
      const response = await this.client.get<OpenF1Response>('/laps', {
        params: { session_id: sessionId },
      });
      return response.data.data;
    } catch (error) {
      console.error('Error fetching lap times:', error);
      throw error;
    }
  }
}

export default new OpenF1Service();
