'use client'

import { motion } from 'framer-motion'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const mockProgressData = [
  { date: '17/08', adherencia: 18, peso: 80 },
  { date: '18/08', adherencia: 29, peso: 80 },
  { date: '19/08', adherencia: 35, peso: 80 },
  { date: '20/08', adherencia: 41, peso: 80 },
  { date: '21/08', adherencia: 53, peso: 80 },
  { date: '22/08', adherencia: 35, peso: 80 },
  { date: '23/08', adherencia: 35, peso: 80 },
]

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="neo-card p-3 border border-phoenix-border">
        <p className="text-phoenix-text font-medium mb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {entry.value}{entry.name === 'Adherencia' ? '%' : 'kg'}
          </p>
        ))}
      </div>
    )
  }
  return null
}

export function ProgressChart() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <Card className="chart-card">
        <CardHeader>
          <CardTitle>📈 Progreso Semanal</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockProgressData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis 
                  dataKey="date" 
                  stroke="#9aa0a6"
                  fontSize={12}
                />
                <YAxis 
                  yAxisId="adherencia"
                  stroke="#9aa0a6"
                  fontSize={12}
                />
                <YAxis 
                  yAxisId="peso"
                  orientation="right"
                  stroke="#9aa0a6"
                  fontSize={12}
                />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  yAxisId="adherencia"
                  type="monotone"
                  dataKey="adherencia"
                  stroke="#ff6b35"
                  strokeWidth={3}
                  dot={{ fill: '#ff6b35', strokeWidth: 2, r: 4 }}
                  name="Adherencia"
                />
                <Line
                  yAxisId="peso"
                  type="monotone"
                  dataKey="peso"
                  stroke="#ff4757"
                  strokeWidth={3}
                  dot={{ fill: '#ff4757', strokeWidth: 2, r: 4 }}
                  name="Peso"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
