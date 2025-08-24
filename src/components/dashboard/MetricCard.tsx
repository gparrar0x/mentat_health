'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { LucideIcon } from 'lucide-react'

interface MetricCardProps {
  title: string
  value: string | number
  target?: string
  status: 'success' | 'warning' | 'error' | 'neutral'
  icon: LucideIcon
  delay?: number
}

const statusConfig = {
  success: {
    badge: 'bg-phoenix-green text-white',
    text: '✅ En objetivo',
  },
  warning: {
    badge: 'bg-phoenix-yellow text-white',
    text: '⚠️ Atención',
  },
  error: {
    badge: 'bg-phoenix-red text-white',
    text: '❌ Mejorar',
  },
  neutral: {
    badge: 'bg-phoenix-card border border-phoenix-border text-phoenix-text-secondary',
    text: '⏳ Calculando...',
  },
}

export function MetricCard({ title, value, target, status, icon: Icon, delay = 0 }: MetricCardProps) {
  const config = statusConfig[status]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02 }}
      className="h-full"
    >
      <Card className="metric-card h-full">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-phoenix-card border border-phoenix-border">
                <Icon className="w-5 h-5 text-phoenix-orange" />
              </div>
              <h3 className="text-sm font-medium text-phoenix-text-secondary">
                {title}
              </h3>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="text-3xl font-bold text-phoenix-text">
              {value}
            </div>
            
            {target && (
              <div className="text-xs text-phoenix-text-secondary">
                {target}
              </div>
            )}
            
            <Badge className={config.badge} variant="secondary">
              {config.text}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
