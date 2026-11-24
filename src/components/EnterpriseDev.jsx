import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiMonitor, 
  FiDatabase, 
  FiServer, 
  FiLayers, 
  FiTrendingUp, 
  FiShield, 
  FiMaximize2, 
  FiMinus, 
  FiX, 
  FiCheckCircle 
} from 'react-icons/fi';
import { SiDotnet, SiPostgresql } from 'react-icons/si';
import { TbBrandWindows } from 'react-icons/tb';

export default function EnterpriseDev() {
  const [activeTab, setActiveTab] = useState('All');

  const enterprisePillars = [
    {
      title: 'Windows Desktop Applications',
      desc: 'C#, WPF, and Windows Forms suites with clean MVVM architecture, background threading, and offline SQLite/local cache.',
      tags: ['C#', '.NET', 'WPF', 'MVVM']
    },
    {
      title: 'Business ERP & Management',
      desc: 'Multi-entity commercial systems featuring role-based access control (RBAC), multi-level approvals, and audit trails.',
      tags: ['.NET Core', 'SQL Server', 'PostgreSQL', 'RBAC']
    },
    {
      title: 'Double-Entry Accounting Engines',
      desc: 'ACID-compliant ledgers, automatic tax/GST calculation, automated trial balance, and voucher reconciliation.',
      tags: ['Double-Entry', 'Vouchers', 'Tax Engine']
    },
    {
      title: 'Real-Time Inventory Systems',
      desc: 'Multi-warehouse stock valuation, batch serial tracking, low-inventory alerts, and automated purchase orders.',
      tags: ['Stock Ledgers', 'Batch Tracking', 'Reorder Triggers']
    },
    {
      title: 'High-Throughput REST APIs',
      desc: 'ASP.NET Core Web APIs and microservices with JWT bearer authentication, structured exception handlers, and rate limiting.',
      tags: ['ASP.NET Core API', 'Swagger', 'JWT', 'Async I/O']
    },
    {
      title: 'Database Architecture',
      desc: 'Normalized schemas, Entity Framework Core migrations, indexed queries, and stored procedures on SQL Server & PostgreSQL.',
      tags: ['EF Core', 'LINQ', 'SQL Server', 'PostgreSQL']
    }
  ];

  const ledgerVouchers = [
    { id: 'VCH-9821', date: '2026-11-12', account: 'Civil Contractor Milestone #4', type: 'Credit', amount: '₹ 1,45,000', status: 'Reconciled' },
    { id: 'VCH-9820', date: '2026-11-12', account: 'Structural Steel Procurement', type: 'Debit', amount: '₹ 86,400', status: 'Reconciled' },
    { id: 'VCH-9819', date: '2026-11-11', account: 'Site Supervisor Petty Cash', type: 'Debit', amount: '₹ 12,500', status: 'Audited' },
    { id: 'VCH-9818', date: '2026-11-10', account: 'Bullion 22K Ingot Stock', type: 'Debit', amount: '₹ 3,20,000', status: 'Reconciled' },
    { id: 'VCH-9817', date: '2026-11-09', account: 'Client Stage Payment - Phase 2', type: 'Credit', amount: '₹ 2,80,000', status: 'Audited' },
  ];

  const filteredVouchers = ledgerVouchers.filter(v => {
    if (activeTab === 'All') return true;
    return v.type === activeTab;
  });

  return (
    <section id="enterprise" className="relative py-24 bg-[#F8FAFC]/60 dark:bg-[#071A35]/30 border-y border-[#E2E8F0] dark:border-white/5 overflow-hidden">
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-[#2563EB]/5 dark:bg-[#2563EB]/10 rounded-full blur-[140px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#2563EB] uppercase block mb-2">
            // Enterprise Architecture
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#172033] dark:text-white font-space">
            .NET & Enterprise <span className="text-[#2563EB]">Systems</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8] max-w-xl mt-3">
            Robust commercial desktop suites, ACID double-entry accounting ledgers, and secure ASP.NET Core microservices.
          </p>
          <div className="h-1 w-12 bg-[#2563EB] mt-4 rounded-full" />
        </div>

        {/* Windows 11 Fluent Desktop Mockup */}
        <div className="mb-12">
          <div className="glass-card rounded-2xl border border-[#E2E8F0] dark:border-white/10 overflow-hidden shadow-2xl bg-white dark:bg-[#0E1726]">
            
            {/* Titlebar */}
            <div className="px-4 py-2.5 bg-[#F1F5F9] dark:bg-[#0B1120] border-b border-[#E2E8F0] dark:border-white/10 flex items-center justify-between select-none font-mono">
              <div className="flex items-center space-x-2.5">
                <div className="w-5 h-5 rounded bg-[#2563EB] flex items-center justify-center text-white text-[11px] font-bold">
                  <TbBrandWindows className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-semibold text-[#172033] dark:text-white font-space">
                  BuildTrack Enterprise ERP — Ledger & Financial Architecture
                </span>
                <span className="hidden sm:inline-block text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold border border-emerald-500/20">
                  SQL Server 2022 Connected
                </span>
              </div>

              <div className="flex items-center space-x-2 text-[#64748B] dark:text-[#94A3B8]">
                <button className="p-1"><FiMinus className="w-3.5 h-3.5" /></button>
                <button className="p-1"><FiMaximize2 className="w-3.5 h-3.5" /></button>
                <button className="p-1 text-rose-500"><FiX className="w-3.5 h-3.5" /></button>
              </div>
            </div>

            {/* Application Mockup Layout */}
            <div className="p-5 space-y-4 font-mono">
              
              {/* Quick Metrics Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                <div className="p-3 rounded-xl bg-black/[0.02] dark:bg-[#101B33] border border-[#E2E8F0] dark:border-white/5">
                  <p className="text-[10px] text-[#64748B] dark:text-[#94A3B8]">Net Ledger Cash</p>
                  <p className="text-sm font-bold text-[#172033] dark:text-white font-space">₹ 8,42,500</p>
                </div>
                <div className="p-3 rounded-xl bg-black/[0.02] dark:bg-[#101B33] border border-[#E2E8F0] dark:border-white/5">
                  <p className="text-[10px] text-[#64748B] dark:text-[#94A3B8]">Active Accounts</p>
                  <p className="text-sm font-bold text-[#172033] dark:text-white font-space">48 Ledgers</p>
                </div>
                <div className="p-3 rounded-xl bg-black/[0.02] dark:bg-[#101B33] border border-[#E2E8F0] dark:border-white/5">
                  <p className="text-[10px] text-[#64748B] dark:text-[#94A3B8]">Pending Vouchers</p>
                  <p className="text-sm font-bold text-amber-500 font-space">3 Approvals</p>
                </div>
                <div className="p-3 rounded-xl bg-black/[0.02] dark:bg-[#101B33] border border-[#E2E8F0] dark:border-white/5">
                  <p className="text-[10px] text-[#64748B] dark:text-[#94A3B8]">Query Latency</p>
                  <p className="text-sm font-bold text-emerald-500 font-space">12ms</p>
                </div>
              </div>

              {/* Data Table */}
              <div className="rounded-xl border border-[#E2E8F0] dark:border-white/10 overflow-hidden bg-white dark:bg-[#0B1120]">
                <div className="px-4 py-2.5 bg-[#F8FAFC] dark:bg-[#101B33]/80 border-b border-[#E2E8F0] dark:border-white/10 flex items-center justify-between text-xs">
                  <span className="font-bold text-[#172033] dark:text-white">Double-Entry Journal Entries</span>
                  <div className="flex items-center space-x-1">
                    {['All', 'Credit', 'Debit'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-2.5 py-0.5 rounded text-[10px] font-semibold transition-colors cursor-pointer ${
                          activeTab === tab ? 'bg-[#2563EB] text-white' : 'text-[#64748B] dark:text-[#94A3B8]'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-[#F1F5F9] dark:bg-[#101B33] text-[#64748B] dark:text-[#94A3B8] text-[9px] uppercase border-b border-[#E2E8F0] dark:border-white/5">
                      <tr>
                        <th className="py-2.5 px-3">Voucher #</th>
                        <th className="py-2.5 px-3">Date</th>
                        <th className="py-2.5 px-3">Account</th>
                        <th className="py-2.5 px-3">Type</th>
                        <th className="py-2.5 px-3">Amount</th>
                        <th className="py-2.5 px-3">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E2E8F0] dark:divide-white/5">
                      {filteredVouchers.map((row) => (
                        <tr key={row.id} className="hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors">
                          <td className="py-2 px-3 font-bold text-[#2563EB]">{row.id}</td>
                          <td className="py-2 px-3 text-[#64748B] dark:text-[#94A3B8]">{row.date}</td>
                          <td className="py-2 px-3 text-[#172033] dark:text-white font-sans font-medium">{row.account}</td>
                          <td className="py-2 px-3">
                            <span className={`px-2 py-0.5 rounded text-[9px] font-bold ${
                              row.type === 'Credit' 
                                ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' 
                                : 'bg-rose-500/10 text-rose-600 dark:text-rose-400'
                            }`}>
                              {row.type}
                            </span>
                          </td>
                          <td className="py-2 px-3 font-bold text-[#172033] dark:text-white">{row.amount}</td>
                          <td className="py-2 px-3">
                            <span className="text-[10px] text-[#64748B] dark:text-[#94A3B8]">
                              ● {row.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="pt-2 border-t border-[#E2E8F0] dark:border-white/5 flex items-center justify-between text-[10px] text-[#64748B] dark:text-[#94A3B8]">
                <span>Runtime: .NET 9.0 &bull; Entity Framework Core &bull; Clean MVVM</span>
                <span className="text-emerald-500 font-semibold">&bull; ACID Transaction Safety Enforced</span>
              </div>

            </div>

          </div>
        </div>

        {/* 6 Clean Capability Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {enterprisePillars.map((pillar) => (
            <div
              key={pillar.title}
              className="glass-card p-4 rounded-2xl border border-[#E2E8F0] dark:border-white/5 hover:border-[#2563EB]/40 flex flex-col justify-between transition-all duration-200 group hover:-translate-y-0.5 bg-white dark:bg-[#101B33]/60"
            >
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-[#172033] dark:text-white font-space group-hover:text-[#2563EB] transition-colors mb-1.5">
                  {pillar.title}
                </h4>
                <p className="text-xs text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-1 pt-3 mt-3 border-t border-[#E2E8F0] dark:border-white/5 font-mono">
                {pillar.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] px-2 py-0.5 rounded bg-black/5 dark:bg-white/5 text-[#64748B] dark:text-[#94A3B8]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </motion.div>
    </section>
  );
}