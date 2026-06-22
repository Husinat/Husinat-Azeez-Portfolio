import { useState, useCallback } from 'react'

const INITIAL_FIELDS = { name: '', email: '', message: '' }
const INITIAL_ERRORS = { name: '', email: '', message: '' }

function validate(fields) {
  const errors = { name: '', email: '', message: '' }
  let valid = true

  if (!fields.name.trim()) {
    errors.name = 'Name is required.'
    valid = false
  } else if (fields.name.trim().length > 100) {
    errors.name = 'Name must be under 100 characters.'
    valid = false
  }

  if (!fields.email.trim()) {
    errors.email = 'Email is required.'
    valid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = 'Enter a valid email address.'
    valid = false
  }

  if (!fields.message.trim()) {
    errors.message = 'Message is required.'
    valid = false
  } else if (fields.message.trim().length > 2000) {
    errors.message = 'Message must be under 2000 characters.'
    valid = false
  }

  return { errors, valid }
}

/**
 * useContactForm
 * Manages the Contact form: field state, per-field validation,
 * API submission to POST /api/contact, and success/error UI state.
 */
export function useContactForm() {
  const [fields, setFields]   = useState(INITIAL_FIELDS)
  const [errors, setErrors]   = useState(INITIAL_ERRORS)
  const [status, setStatus]   = useState('idle') // 'idle' | 'loading' | 'success' | 'error'
  const [serverError, setServerError] = useState('')

  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    setFields((prev) => ({ ...prev, [name]: value }))
    // Clear field error on change
    setErrors((prev) => ({ ...prev, [name]: '' }))
  }, [])

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault()
    const { errors: validationErrors, valid } = validate(fields)

    if (!valid) {
      setErrors(validationErrors)
      return
    }

    setStatus('loading')
    setServerError('')

    try {
      const res = await fetch('/api/contact', {
        method  : 'POST',
        headers : { 'Content-Type': 'application/json' },
        body    : JSON.stringify(fields),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.message || 'Something went wrong. Please try again.')
      }

      setStatus('success')
      setFields(INITIAL_FIELDS)
    } catch (err) {
      setStatus('error')
      setServerError(err.message || 'Something went wrong. Please try again.')
    }
  }, [fields])

  const reset = useCallback(() => {
    setFields(INITIAL_FIELDS)
    setErrors(INITIAL_ERRORS)
    setStatus('idle')
    setServerError('')
  }, [])

  return {
    fields,
    errors,
    status,
    serverError,
    handleChange,
    handleSubmit,
    reset,
  }
}
