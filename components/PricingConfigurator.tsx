'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function PricingConfigurator() {
  const [users, setUsers] = useState(5000);
  const [eventsPerUser, setEventsPerUser] = useState(100);
  const [pricePerUnit, setPricePerUnit] = useState(0.002);

  const totalEvents = users * eventsPerUser;
  const estimatedRevenue = totalEvents * pricePerUnit;

  return (
    <section id="pricing" className="py-24 bg-canvas border-y border-border-subtle">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
            Model your <span className="text-brand-primary">revenue</span>.
          </h2>
          <p className="text-lg text-foreground-muted">
            Simulate your usage-based pricing model in real-time.
          </p>
        </div>

        <div className="bg-white dark:bg-canvas-dark border border-border-strong rounded-lg shadow-sm p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Inputs */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between items-baseline">
                  <label className="text-sm font-medium text-foreground">Active Customers</label>
                  <span className="text-sm font-mono text-brand-primary font-bold">{users.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="50000"
                  step="100"
                  value={users}
                  onChange={(e) => setUsers(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-primary"
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-baseline">
                  <label className="text-sm font-medium text-foreground">Events / Customer / Month</label>
                  <span className="text-sm font-mono text-brand-primary font-bold">{eventsPerUser.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10000"
                  step="10"
                  value={eventsPerUser}
                  onChange={(e) => setEventsPerUser(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-primary"
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-baseline">
                  <label className="text-sm font-medium text-foreground">Price per Event ($)</label>
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground-muted">$</span>
                  <input
                    type="number"
                    step="0.0001"
                    value={pricePerUnit}
                    onChange={(e) => setPricePerUnit(Number(e.target.value))}
                    className="w-full pl-7 pr-4 py-2 border border-border-strong rounded bg-canvas text-foreground font-mono focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary"
                  />
                </div>
              </div>
            </div>

            {/* Output */}
            <div className="flex flex-col justify-center space-y-8 bg-canvas p-6 rounded border border-border-subtle">
              <div>
                <span className="text-xs text-foreground-muted uppercase tracking-wider font-semibold">Total Monthly Events</span>
                <div className="text-2xl font-mono text-foreground mt-1">
                  {totalEvents.toLocaleString()}
                </div>
              </div>
              
              <div className="h-px bg-border-strong w-full" />
              
              <div>
                <span className="text-xs text-foreground-muted uppercase tracking-wider font-semibold">Est. Monthly Revenue</span>
                <div className="text-4xl font-mono font-bold text-brand-primary mt-1">
                  ${estimatedRevenue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
              </div>

              <div className="pt-4">
                <p className="text-xs text-foreground-muted leading-relaxed">
                  This calculator demonstrates linear metering. Metrix also supports tiered, stair-step, and package-based models.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
