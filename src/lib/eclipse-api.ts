// Eclipse API types — placeholder for future live data connection
// When ESA Pet goes live, this module will handle Eclipse API communication.

export interface EclipseRequest {
  query: string;
  context?: Record<string, unknown>;
}

export interface EclipseResponse {
  answer: string;
  sources?: string[];
  confidence?: number;
}

export const ECLIPSE_CONFIG = {
  apiUrl: process.env.ECLIPSE_API_URL || "",
  apiKey: process.env.ECLIPSE_API_KEY || "",
} as const;
