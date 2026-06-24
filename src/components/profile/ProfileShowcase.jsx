import { useState, useEffect } from 'react'

/**
 * ProfileShowcase
 * Redesigned as a bespoke 'Console Preview' of ExamCore + a stylized initials badge.
 * Provides instant technical credibility.
 */
export function ProfileShowcase({ profile }) {
  const [pulse, setPulse] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse((p) => !p)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full max-w-md lg:max-w-lg">
      {/* Background glow */}
      <div className="absolute inset-0 rounded-3xl bg-terracotta/5 blur-2xl" />

      {/* Flagship Project Console Mockup (ExamCore Engine) */}
      <div className="relative overflow-hidden rounded-2xl border border-border bg-surface/90 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.5)] backdrop-blur">
        {/* Window controls */}
        <div className="mb-4 flex items-center justify-between border-b border-border/60 pb-3">
          <div className="flex gap-1.5">
            <span className="h-3.5 w-3.5 rounded-full bg-red-500/30 border border-red-500/20" />
            <span className="h-3.5 w-3.5 rounded-full bg-yellow-500/30 border border-yellow-500/20" />
            <span className="h-3.5 w-3.5 rounded-full bg-green-500/30 border border-green-500/20" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-dim">
            examcore-engine // live
          </span>
        </div>

        {/* Console Content */}
        <div className="space-y-4 font-mono text-xs text-muted">
          {/* Auth State */}
          <div className="rounded-lg bg-space/65 p-3 border border-border/50">
            <div className="flex items-center justify-between">
              <span className="text-terracotta">firebase-auth-node</span>
              <span className="text-[10px] text-sage">Active Token</span>
            </div>
            <p className="mt-1 text-[10px] text-dim">
              uid: usr_8f29ax981b // role: STUDENT_AUTH
            </p>
          </div>

          {/* Sync pipeline */}
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 py-1">
            {/* Student Node */}
            <div className="rounded-lg bg-space/65 p-3 border border-border/50 text-center">
              <p className="text-[10px] text-dim uppercase tracking-wider">Client DB</p>
              <p className="mt-1 font-semibold text-headline">IndexedDB</p>
              <span className="mt-1 inline-block text-[9px] bg-terracotta/10 text-terracotta px-1.5 py-0.5 rounded">
                Offline Queue: 3
              </span>
            </div>

            {/* Sync Line */}
            <div className="flex flex-col items-center">
              <span className="text-terracotta text-sm animate-pulse">⇆</span>
              <span className="h-px w-8 bg-border" />
            </div>

            {/* Admin Dashboard Node */}
            <div className="rounded-lg bg-space/65 p-3 border border-border/50 text-center">
              <p className="text-[10px] text-dim uppercase tracking-wider">Cloud Sync</p>
              <p className="mt-1 font-semibold text-headline">Firestore</p>
              <span className="mt-1 inline-block text-[9px] bg-sage/10 text-sage px-1.5 py-0.5 rounded">
                Syncing Live
              </span>
            </div>
          </div>

          {/* Logs */}
          <div className="rounded-lg bg-space/85 p-3 border border-border/50 text-[10px] text-dim space-y-1">
            <p className="text-muted/70">&gt; listening for exam answer submissions...</p>
            <p className="text-sage/75">&gt; write success: q_14 stored locally (cache)</p>
            <p className="text-terracotta/75">&gt; connection offline: queueing payload...</p>
            <p className="text-sage/75">&gt; network restored: flushing queue to Firestore</p>
          </div>
        </div>
      </div>

      {/* Overlapping Profile Badge Card */}
      <div className="absolute -bottom-6 -right-4 rounded-xl border border-border bg-surface p-3.5 shadow-2xl flex items-center gap-3">
        {/* Stylized Avatar Ring */}
        <div className="relative rounded-full bg-gradient-to-br from-terracotta via-border to-terracotta/10 p-[1.5px]">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-elevated">
            <span className="font-display text-sm text-terracotta select-none">HA</span>
          </div>
          {/* Pulse dot */}
          <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-space border-2 border-space">
            <span className={`block h-full w-full rounded-full bg-green-400 ${pulse ? 'animate-ping' : ''}`} />
          </span>
        </div>

        {/* Text */}
        <div className="min-w-0 pr-1">
          <p className="font-mono text-[10px] uppercase tracking-wider text-terracotta">Availability</p>
          <p className="font-body text-xs font-medium text-headline leading-tight mt-0.5">
            Open for Junior Roles
          </p>
          <p className="font-mono text-[9px] text-dim mt-0.5">Internships & full-time</p>
        </div>
      </div>
    </div>
  )
}
