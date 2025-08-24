'use client'

import { motion } from 'framer-motion'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface MacrosData {
  name: string
  value: number
  color: string
}

const mockData: MacrosData[] = [
  { name: 'Proteínas', value: 98.7, color: '#ff4757' },
  { name: 'Carbohidratos', value: 241.6, color: '#3742fa' },
  { name: 'Grasas', value: 86.8, color: '#ffa502' },
]

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload
    const total = mockData.reduce((sum, item) => sum + item.value, 0)
    const percentage = ((data.value / total) * 100).toFixed(1)
    
    return (
      <div className="neo-card p-3 border border-phoenix-border">
        <p className="text-phoenix-text font-medium">{data.name}</p>
        <p className="text-phoenix-orange font-bold">{data.value.toFixed(1)}g ({percentage}%)</p>
      </div>
    )
  }
  return null
}

export function MacrosChart() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card className="chart-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            📊 Distribución de Macros (Últimos 7 días)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={mockData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {mockData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-4">
            <Badge variant="secondary" className="bg-phoenix-card border border-phoenix-border text-phoenix-text-secondary">
              Promedio diario de macronutrientes
            </Badge>
            <Badge variant="secondary" className="bg-phoenix-card border border-phoenix-border text-phoenix-text-secondary">
              Objetivos: Prot 130-145g • Carbos 240-320g • Grasas 65-80g
            </Badge>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
