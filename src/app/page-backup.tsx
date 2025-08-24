'use client'

import { motion } from 'framer-motion'
import { Activity, Droplets, Zap, Target } from 'lucide-react'
import { MetricCard } from '@/components/dashboard/MetricCard'
import { MacrosChart } from '@/components/dashboard/MacrosChart'
import { ProgressChart } from '@/components/dashboard/ProgressChart'
import { HabitsTracker } from '@/components/dashboard/HabitsTracker'
import { TrainingTracker } from '@/components/dashboard/TrainingTracker'

// Mock data - en producción vendría de tu API/Google Sheets
const mockMetrics = {
  proteins: { value: '98.7g', target: 'Objetivo: 130-145g', status: 'error' as const },
  water: { value: '2L', target: 'Objetivo: 2.5-3L', status: 'warning' as const },
  calories: { value: '2139.9', target: 'Rango: 1900-2200 kcal', status: 'success' as const },
  adherence: { value: '35%', target: 'Meta: >80%', status: 'error' as const },
}

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-phoenix-bg">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="border-b border-phoenix-border bg-phoenix-card/50 backdrop-blur-sm sticky top-0 z-50"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold gradient-text">
              🔥 Phoenix Dashboard
            </h1>
            <div className="flex items-center gap-4">
              <select 
                className="bg-phoenix-card border border-phoenix-border rounded-xl px-4 py-2 text-sm text-phoenix-text focus:outline-none focus:ring-2 focus:ring-phoenix-orange"
                defaultValue="7"
                aria-label="Seleccionar rango de días"
              >
                <option value="7">Últimos 7 días</option>
                <option value="14">Últimos 14 días</option>
                <option value="30">Últimos 30 días</option>
                <option value="90">Últimos 90 días</option>
              </select>
              <input
                type="date"
                defaultValue="2025-08-23"
                className="bg-phoenix-card border border-phoenix-border rounded-xl px-4 py-2 text-sm text-phoenix-text focus:outline-none focus:ring-2 focus:ring-phoenix-orange"
                aria-label="Seleccionar fecha"
              />
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* KPIs Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Proteínas (hoy)"
            value={mockMetrics.proteins.value}
            target={mockMetrics.proteins.target}
            status={mockMetrics.proteins.status}
            icon={Activity}
            delay={0}
          />
          <MetricCard
            title="Agua (hoy)"
            value={mockMetrics.water.value}
            target={mockMetrics.water.target}
            status={mockMetrics.water.status}
            icon={Droplets}
            delay={0.1}
          />
          <MetricCard
            title="Calorías (hoy)"
            value={mockMetrics.calories.value}
            target={mockMetrics.calories.target}
            status={mockMetrics.calories.status}
            icon={Zap}
            delay={0.2}
          />
          <MetricCard
            title="Adherencia (hoy)"
            value={mockMetrics.adherence.value}
            target={mockMetrics.adherence.target}
            status={mockMetrics.adherence.status}
            icon={Target}
            delay={0.3}
          />
        </section>

        {/* Main Layout - 3 Columns on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Charts */}
          <div className="lg:col-span-2 space-y-8">
            <MacrosChart />
            <ProgressChart />
          </div>

          {/* Right Column - Trackers */}
          <div className="space-y-8">
            <TrainingTracker />
            <HabitsTracker />
          </div>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-12 py-8 border-t border-phoenix-border"
        >
          <div className="text-center text-phoenix-text-secondary text-sm">
            Dashboard personalizado basado en objetivos de{' '}
            <span className="font-semibold text-phoenix-orange">gonza_profile.md</span> •{' '}
            Datos desde Google Sheets • Actualización automática vía n8n
          </div>
        </motion.footer>
      </main>
    </div>
  )
}
