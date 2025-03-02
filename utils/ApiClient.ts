import axios, { AxiosInstance } from 'axios';

export class ApiClient {
  private axiosInstance: AxiosInstance;

  constructor(private baseUrl: string = 'https://openlibrary.org') {
    this.axiosInstance = axios.create({
      baseURL: this.baseUrl,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  async getRequest(endpoint: string, params: Record<string, any> = {}) {
    return this.axiosInstance.get(endpoint, { params });
  }
}
