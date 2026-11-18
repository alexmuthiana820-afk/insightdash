"use client"
import { useState } from "react"

const DATA = [
  { label: "Mon", value: 42 },
  { label: "Tue", value: 68 },
  { label: "Wed", value: 55 },
  { label: "Thu", value: 82 },
  { label: "Fri", value: 74 },
  { label: "Sat", value: 96 },
  { label: "Sun", value: 61 },
]

export default function Home() {
  const [dark, setDark] = useState(false)
  const [range, setRange] = useState("This week")

  const bg = dark ? "bg-gray-900 text-white" : "bg-white text-gray-900"
  const card = dark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
  const barBg = dark ? "bg-gray-700" : "bg-gray-100"

  return (
    <main className={`min-h-screen ${bg}`}>
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold">InsightDash 📊</h1>
            <p className="text-gray-500 mt-1">SaaS analytics — revenue, users, growth.</p>
          </div>
          <button onClick={() => setDark(!dark)} className="border rounded-lg px-4 py-2">
            {dark ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>

        <div className="flex gap-2 mt-6">
          {["Today", "This week", "This month"].map((r) => (
            <button key={r} onClick={() => setRange(r)} className={`px-4 py-2 rounded-lg border ${range === r ? "bg-blue-600 text-white" : ""}`}>
              {r}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className={`border rounded-xl p-5 ${card}`}>
            <p className="text-sm text-gray-500">Revenue</p>
            <p className="text-3xl font-bold mt-1">$24,580</p>
            <p className="text-green-600 text-sm">↑ 18% vs last {range.toLowerCase()}</p>
          </div>
          <div className={`border rounded-xl p-5 ${card}`}>
            <p className="text-sm text-gray-500">Active Users</p>
            <p className="text-3xl font-bold mt-1">5,842</p>
            <p className="text-green-600 text-sm">↑ 12% vs last {range.toLowerCase()}</p>
          </div>
          <div className={`border rounded-xl p-5 ${card}`}>
            <p className="text-sm text-gray-500">Conversion</p>
            <p className="text-3xl font-bold mt-1">4.8%</p>
            <p className="text-red-500 text-sm">↓ 0.4% vs last {range.toLowerCase()}</p>
          </div>
        </div>

        <div className={`border rounded-xl p-6 mt-6 ${card}`}>
          <h2 className="font-bold text-lg">Signups — {range}</h2>
          <div className="flex items-end gap-3 h-48 mt-6">
            {DATA.map((d) => (
              <div key={d.label} className="flex-1 flex flex-col items-center justify-end h-full">
                <p className="text-sm font-bold">{d.value}</p>
                <div className="bg-blue-600 w-full rounded-t" style={{ height: `${d.value}%` }}></div>
                <p className="text-xs mt-2">{d.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={`border rounded-xl p-6 mt-6 ${card}`}>
          <h2 className="font-bold text-lg">Top pages</h2>
          <div className="mt-4 space-y-3">
            <div className="flex justify-between"><span>/pricing</span><span className="font-bold">2,418 views</span></div>
            <div className="flex justify-between"><span>/features</span><span className="font-bold">1,902 views</span></div>
            <div className="flex justify-between"><span>/blog/ai-dashboard</span><span className="font-bold">1,245 views</span></div>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-8">Built by Alex Muthiana — React • Next.js • Tailwind • Recharts-style charts</p>
      </div>
    </main>
  )
}