'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface TrainingData {
  name: string
  count: number
  total: number
  days: boolean[]
  emoji: string
  color: string
}

const mockTrainingData: TrainingData[] = [
  {
    name: 'Fuerza',
    count: 0,
    total: 7,
    days: [false, false, false, false, false, false, false],
    emoji: '💪',
    color: 'text-phoenix-red',
  },
  {
    name: 'Cardio',
    count: 3,
    total: 7,
    days: [false, false, false, true, true, true, false],
    emoji: '🏃',
    color: 'text-phoenix-yellow',
  },
  {
    name: 'Yoga',
    count: 4,
    total: 7,
    days: [false, true, true, true, true, false, false],
    emoji: '🧘',
    color: 'text-phoenix-green',
  },
]

export function TrainingTracker() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <Card className="chart-card">
        <CardHeader>
          <CardTitle>🏋️ Entrenamiento Semanal</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {mockTrainingData.map((training, index) => (
              <motion.div
                key={training.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                className="space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{training.emoji}</span>
                    <span className="font-medium text-phoenix-text">{training.name}</span>
                  </div>
                  <div className={`text-sm font-semibold ${training.color}`}>
                    {training.count}/{training.total} esta semana
                  </div>
                </div>
                
                <div className="flex gap-1">
                  {training.days.map((active, dayIndex) => (
                    <motion.div
                      key={dayIndex}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.2, delay: 0.7 + index * 0.1 + dayIndex * 0.05 }}
                      className={`training-day ${active ? 'active' : 'inactive'}`}
                      title={`Día ${17 + dayIndex}`}
                    >
                      {17 + dayIndex}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="flex gap-2 mt-6">
            <Badge className="bg-phoenix-orange text-white">
              🟠 Entrenamiento realizado
            </Badge>
            <Badge className="bg-phoenix-card border border-phoenix-border text-phoenix-text-secondary">
              ⚪ Sin entrenar
            </Badge>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
