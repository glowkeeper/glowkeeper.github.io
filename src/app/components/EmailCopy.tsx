'use client'

import { useState } from 'react'

const email = 'steve@huckle.studio'

export const EmailCopy = ({ label }: { label?: string }) => {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="email-copy">
      {label && <span>{label}</span>}
      <span>{email}</span>
      <button
        aria-label={copied ? 'Email address copied' : 'Copy email address'}
        className={copied ? 'email-copy__button email-copy__button--copied' : 'email-copy__button'}
        onClick={copyEmail}
        title={copied ? 'Copied' : 'Copy email address'}
        type="button"
      >
        <span aria-hidden="true" className="email-copy__icon" />
      </button>
      <span aria-live="polite" className="email-copy__status">
        {copied ? 'Email address copied to clipboard.' : ''}
      </span>
    </div>
  )
}
