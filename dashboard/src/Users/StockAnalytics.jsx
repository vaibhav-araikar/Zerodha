import React, { useState } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { useRequireAuth } from "./useRequireAuth";
import { useAuth } from "./AuthContext";

/**
 * StockAnalytics — anyone can view this page and its charts/stats,
 * no login required. Only the Buy/Sell actions are gated.
 */
export default function StockAnalytics({ symbol = "RELIANCE" }) {
  const requireAuth = useRequireAuth();
  const { isAuthenticated } = useAuth();
  const [orderMsg, setOrderMsg] = useState("");

  const placeOrder = (side) => {
    // Real order-placement logic goes here (API call, order modal, etc.)
    setOrderMsg(`${side} order flow started for ${symbol}.`);
  };

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <div className="flex items-baseline justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">{symbol}</h1>
          <p className="text-sm text-slate-500">Reliance Industries Ltd · NSE</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-semibold text-slate-900">₹2,938.15</p>
          <p className="flex items-center justify-end gap-1 text-sm font-medium text-rose-500">
            <TrendingDown size={14} /> -0.21% today
          </p>
        </div>
      </div>

      {/* Public analytics content — visible to everyone, logged in or not */}
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          ["Open", "2,944.00"],
          ["High", "2,951.20"],
          ["Low", "2,930.10"],
          ["Prev. close", "2,944.35"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-lg border border-slate-200 bg-white px-4 py-3">
            <p className="text-xs text-slate-500">{label}</p>
            <p className="mt-1 text-sm font-semibold text-slate-900">₹{value}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-lg border border-slate-200 bg-white p-6 text-sm text-slate-500">
        Chart, fundamentals, and news would render here — all public, same as
        real analytics pages.
      </div>

      {/* Gated actions */}
      <div className="mt-8 flex gap-3">
        <button
          onClick={() => requireAuth(() => placeOrder("Buy"))}
          className="flex-1 rounded-lg bg-emerald-600 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
        >
          Buy
        </button>
        <button
          onClick={() => requireAuth(() => placeOrder("Sell"))}
          className="flex-1 rounded-lg bg-rose-600 py-3 text-sm font-semibold text-white hover:bg-rose-700"
        >
          Sell
        </button>
      </div>

      {!isAuthenticated && (
        <p className="mt-3 text-center text-xs text-slate-400">
          You can browse freely — you'll only be asked to log in when you place an order.
        </p>
      )}
      {orderMsg && <p className="mt-4 text-center text-sm text-emerald-600">{orderMsg}</p>}
    </div>
  );
}
