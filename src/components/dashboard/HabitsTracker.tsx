'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface HabitData {
  name: string
  streak: number
  days: boolean[]
  emoji: string
}

const mockHabitsData: HabitData[] = [
  {
    name: 'Porro',
    streak: 7,
    days: [true, true, true, true, true, true, true],
    emoji: '🚫',
  },
  {
    name: 'Porno',
    streak: 0,
    days: [false, false, false, false, false, false, false],
    emoji: '🚫',
  },
  {
    name: 'Redes',
    streak: 7,
    days: [true, true, true, true, true, true, true],
    emoji: '📱',
  },
  {
    name: 'Paja',
    streak: 0,
    days: [false, false, false, false, false, false, false],
    emoji: '🚫',
  },
]

export function HabitsTracker() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <Card className="chart-card">
        <CardHeader>
          <CardTitle>🎯 Control de Hábitos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {mockHabitsData.map((habit, index) => (
              <motion.div
                key={habit.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                className="space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{habit.emoji}</span>
                    <span className="font-medium text-phoenix-text">{habit.name}</span>
                  </div>
                  <div className={`text-sm font-semibold ${
                    habit.streak >= 7 ? 'text-phoenix-green' : 
                    habit.streak >= 3 ? 'text-phoenix-yellow' : 
                    'text-phoenix-red'
                  }`}>
                    {habit.streak} días consecutivos
                  </div>
                </div>
                
                <div className="flex gap-1">
                  {habit.days.map((success, dayIndex) => (
                    <motion.div
                      key={dayIndex}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.2, delay: 0.6 + index * 0.1 + dayIndex * 0.05 }}
                      className={`habit-day ${success ? 'success' : 'fail'}`}
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
            <Badge className="bg-phoenix-green text-white">
              🟢 Objetivo cumplido
            </Badge>
            <Badge className="bg-phoenix-red text-white">
              🔴 Objetivo fallado
            </Badge>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
