import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Load balancing logic
  const userAgent = request.headers.get('user-agent') || '';
  const clientCountry = request.geo?.country || 'US';
  
  // Add custom headers for analytics and load balancing
  const response = NextResponse.next();
  response.headers.set('x-country', clientCountry);
  response.headers.set('x-device-type', getDeviceType(userAgent));
  
  // Basic rate limiting
  const ip = request.ip || '';
  const rateLimit = getRateLimit(ip);
  
  if (rateLimit.exceeded) {
    return new NextResponse('Too Many Requests', { status: 429 });
  }
  
  return response;
}

function getDeviceType(userAgent: string): string {
  if (/mobile/i.test(userAgent)) return 'mobile';
  if (/tablet/i.test(userAgent)) return 'tablet';
  return 'desktop';
}

const rateLimits = new Map<string, { count: number; timestamp: number }>();

function getRateLimit(ip: string) {
  const now = Date.now();
  const windowMs = 60000; // 1 minute
  const maxRequests = 100; // Max requests per minute
  
  const current = rateLimits.get(ip) || { count: 0, timestamp: now };
  
  if (now - current.timestamp > windowMs) {
    rateLimits.set(ip, { count: 1, timestamp: now });
    return { exceeded: false };
  }
  
  if (current.count >= maxRequests) {
    return { exceeded: true };
  }
  
  rateLimits.set(ip, { count: current.count + 1, timestamp: current.timestamp });
  return { exceeded: false };
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};