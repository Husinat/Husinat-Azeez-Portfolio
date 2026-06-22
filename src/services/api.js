const BASE_URL = import.meta.env.VITE_API_URL || ''

/**
 * api.js
 * Central service layer for backend API calls.
 * All fetch calls live here — components call these functions, not fetch directly.
 */

/**
 * submitContact
 * POST /api/contact
 * Sends contact form payload to the backend.
 * Throws on non-OK responses with the server's message if available.
 */
export async function submitContact({ name, email, message }) {
  const res = await fetch(`${BASE_URL}/api/contact`, {
    method  : 'POST',
    headers : { 'Content-Type': 'application/json' },
    body    : JSON.stringify({ name, email, message }),
  })

  if (!res.ok) {
    const data = await res.json().catch(() => ({}))
    throw new Error(data.message || 'Something went wrong. Please try again.')
  }

  return res.json()
}

/**
 * checkHealth
 * GET /api/health
 * Uptime health check — useful for monitoring and deployment verification.
 */
export async function checkHealth() {
  const res = await fetch(`${BASE_URL}/api/health`)
  if (!res.ok) throw new Error('Health check failed.')
  return res.json()
}
