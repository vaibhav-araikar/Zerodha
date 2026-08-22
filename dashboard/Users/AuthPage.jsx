import React, { useState, useEffect, useRef } from "react";
import { Eye, EyeOff, TrendingUp, TrendingDown, ArrowRight, Check, ShieldCheck } from "lucide-react";

/**
 * AuthPage — trading platform login / signup / forgot-password flow
 * Split layout: dark ticker-driven brand panel + light auth card.
 * No external backend — onSubmit handlers are stubs you can wire up.
 */

const TICKER_SEED = [
  { sym: "NIFTY 50", price: 24812.35, chg: 0.42 },
  { sym: "SENSEX", price: 81463.9, chg: 0.38 },
  { sym: "RELIANCE", price: 2938.15, chg: -0.21 },
  { sym: "TCS", price: 4102.6, chg: 0.87 },
  { sym: "HDFCBANK", price: 1687.4, chg: 0.15 },
  { sym: "INFY", price: 1832.75, chg: -0.63 },
  { sym: "ITC", price: 468.2, chg: 0.09 },
  { sym: "BHARTIARTL", price: 1594.05, chg: 1.12 },
];

function useLiveTicker() {
  const [rows, setRows] = useState(TICKER_SEED);
  useEffect(() => {
    const id = setInterval(() => {
      setRows((prev) =>
        prev.map((r) => {
          const drift = (Math.random() - 0.5) * (r.price * 0.0012);
          const next = +(r.price + drift).toFixed(2);
          const chg = +(r.chg + (Math.random() - 0.5) * 0.05).toFixed(2);
          return { ...r, price: next, chg };
        })
      );
    }, 1800);
    return () => clearInterval(id);
  }, []);
  return rows;
}

function TickerRow({ row }) {
  const up = row.chg >= 0;
  return (
    <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
      <span className="text-sm font-medium tracking-wide text-slate-200">{row.sym}</span>
      <div className="flex items-center gap-3">
        <span className="font-mono text-sm text-slate-300">
          {row.price.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </span>
        <span
          className={`flex items-center gap-1 text-xs font-semibold ${
            up ? "text-emerald-400" : "text-rose-400"
          }`}
        >
          {up ? <TrendingUp size={13} /> : <TrendingDown size={13} />}
          {up ? "+" : ""}
          {row.chg}%
        </span>
      </div>
    </div>
  );
}

function BrandPanel() {
  const rows = useLiveTicker();
  return (
    <div className="relative hidden w-[44%] flex-col justify-between overflow-hidden bg-[#0B1220] px-10 py-12 text-white lg:flex">
      {/* ambient candle-chart backdrop */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]"
        viewBox="0 0 400 800"
        preserveAspectRatio="none"
      >
        {Array.from({ length: 26 }).map((_, i) => {
          const x = 15 + i * 15;
          const h = 40 + Math.sin(i * 0.7) * 30 + (i % 3) * 20;
          const y = 380 - h / 2;
          return (
            <rect
              key={i}
              x={x}
              y={y}
              width="6"
              height={h}
              fill={i % 3 === 0 ? "#F43F5E" : "#10B981"}
              rx="1"
            />
          );
        })}
      </svg>

      <div className="relative z-10">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#387ED1] font-bold text-white">
            K
          </div>
          <span className="text-xl font-semibold tracking-tight">Kite<span className="text-[#387ED1]">Clone</span></span>
        </div>

        <h1 className="mt-16 max-w-sm text-[2.15rem] font-semibold leading-[1.15] tracking-tight text-white">
          Invest in everything.
          <span className="block text-slate-400">Track it in one place.</span>
        </h1>
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
          Stocks, mutual funds, and IPOs — one account, zero clutter. Built for
          people who read the tape before breakfast.
        </p>
      </div>

      <div className="relative z-10 space-y-2.5">
        <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.14em] text-slate-500">
          Live market snapshot
        </p>
        {rows.slice(0, 5).map((r) => (
          <TickerRow key={r.sym} row={r} />
        ))}
      </div>

      <div className="relative z-10 flex items-center gap-2 text-xs text-slate-500">
        <ShieldCheck size={14} className="text-emerald-400" />
        SEBI-style registered broker (demo) · 2FA on every login
      </div>
    </div>
  );
}

function TextField({ label, type = "text", value, onChange, placeholder, error, right }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[13px] font-medium text-slate-700">{label}</span>
      <div
        className={`flex items-center rounded-lg border bg-white px-3.5 transition ${
          error ? "border-rose-400 ring-1 ring-rose-100" : "border-slate-300 focus-within:border-[#387ED1] focus-within:ring-2 focus-within:ring-[#387ED1]/15"
        }`}
      >
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="h-11 w-full bg-transparent text-[15px] text-slate-900 placeholder:text-slate-400 focus:outline-none"
        />
        {right}
      </div>
      {error && <span className="mt-1 block text-xs font-medium text-rose-500">{error}</span>}
    </label>
  );
}

function PrimaryButton({ children, ...props }) {
  return (
    <button
      {...props}
      className="flex h-11 w-full items-center justify-center gap-1.5 rounded-lg bg-[#387ED1] text-[15px] font-semibold text-white shadow-sm transition hover:bg-[#2f6cb3] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
    >
      {children}
    </button>
  );
}

function LoginForm({ onSwitch }) {
  const [userId, setUserId] = useState("");
  const [pin, setPin] = useState("");
  const [showPin, setShowPin] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const next = {};
    if (!userId.trim()) next.userId = "Enter your User ID";
    if (!pin.trim()) next.pin = "Enter your PIN / password";
    setErrors(next);
    if (Object.keys(next).length) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log("login submit", { userId, pin });
    }, 900);
  };

  return (
    <form onSubmit={submit} className="space-y-4">
      <TextField
        label="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="AB1234"
        error={errors.userId}
      />
      <TextField
        label="Password / PIN"
        type={showPin ? "text" : "password"}
        value={pin}
        onChange={(e) => setPin(e.target.value)}
        placeholder="••••••••"
        error={errors.pin}
        right={
          <button
            type="button"
            onClick={() => setShowPin((s) => !s)}
            className="ml-2 text-slate-400 hover:text-slate-600"
            aria-label={showPin ? "Hide password" : "Show password"}
          >
            {showPin ? <EyeOff size={17} /> : <Eye size={17} />}
          </button>
        }
      />
      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => onSwitch("forgot")}
          className="text-[13px] font-medium text-[#387ED1] hover:underline"
        >
          Forgot password?
        </button>
      </div>
      <PrimaryButton type="submit" disabled={loading}>
        {loading ? "Signing in…" : "Login"}
        {!loading && <ArrowRight size={16} />}
      </PrimaryButton>
      <p className="text-center text-[13px] text-slate-500">
        New here?{" "}
        <button type="button" onClick={() => onSwitch("signup")} className="font-semibold text-[#387ED1] hover:underline">
          Create an account
        </button>
      </p>
    </form>
  );
}

function SignupForm({ onSwitch }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", pan: "", password: "" });
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = "Enter your full name";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email";
    if (!/^\d{10}$/.test(form.phone)) next.phone = "10-digit mobile number";
    if (!/^[A-Z]{5}\d{4}[A-Z]$/.test(form.pan.toUpperCase())) next.pan = "Format: ABCDE1234F";
    if (form.password.length < 8) next.password = "At least 8 characters";
    setErrors(next);
    if (Object.keys(next).length) return;
    setDone(true);
    console.log("signup submit", form);
  };

  if (done) {
    return (
      <div className="flex flex-col items-center py-6 text-center">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50">
          <Check className="text-emerald-500" size={24} />
        </div>
        <h3 className="text-lg font-semibold text-slate-900">Application received</h3>
        <p className="mt-1.5 max-w-xs text-sm text-slate-500">
          We've sent a verification link to <span className="font-medium text-slate-700">{form.email}</span>. Confirm it to continue KYC.
        </p>
        <button
          onClick={() => onSwitch("login")}
          className="mt-6 text-[13px] font-semibold text-[#387ED1] hover:underline"
        >
          Back to login
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <TextField label="Full name" value={form.name} onChange={set("name")} placeholder="As per PAN" error={errors.name} />
      <TextField label="Email" type="email" value={form.email} onChange={set("email")} placeholder="you@example.com" error={errors.email} />
      <div className="grid grid-cols-2 gap-3">
        <TextField label="Mobile number" value={form.phone} onChange={set("phone")} placeholder="98765 43210" error={errors.phone} />
        <TextField label="PAN" value={form.pan} onChange={set("pan")} placeholder="ABCDE1234F" error={errors.pan} />
      </div>
      <TextField label="Set password" type="password" value={form.password} onChange={set("password")} placeholder="8+ characters" error={errors.password} />
      <PrimaryButton type="submit">
        Continue <ArrowRight size={16} />
      </PrimaryButton>
      <p className="text-center text-[13px] text-slate-500">
        Already have an account?{" "}
        <button type="button" onClick={() => onSwitch("login")} className="font-semibold text-[#387ED1] hover:underline">
          Log in
        </button>
      </p>
    </form>
  );
}

function ForgotPasswordForm({ onSwitch }) {
  const [step, setStep] = useState(1); // 1: request, 2: otp, 3: reset
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [pw, setPw] = useState("");
  const [error, setError] = useState("");

  const requestOtp = (e) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) return setError("Enter a valid email");
    setError("");
    setStep(2);
  };
  const verifyOtp = (e) => {
    e.preventDefault();
    if (otp.length !== 6) return setError("Enter the 6-digit code");
    setError("");
    setStep(3);
  };
  const resetPw = (e) => {
    e.preventDefault();
    if (pw.length < 8) return setError("At least 8 characters");
    setError("");
    console.log("password reset for", email);
    setStep(4);
  };

  if (step === 4) {
    return (
      <div className="flex flex-col items-center py-6 text-center">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50">
          <Check className="text-emerald-500" size={24} />
        </div>
        <h3 className="text-lg font-semibold text-slate-900">Password updated</h3>
        <p className="mt-1.5 text-sm text-slate-500">You can now log in with your new password.</p>
        <button onClick={() => onSwitch("login")} className="mt-6 text-[13px] font-semibold text-[#387ED1] hover:underline">
          Back to login
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-1.5">
        {[1, 2, 3].map((n) => (
          <div key={n} className={`h-1 flex-1 rounded-full ${n <= step ? "bg-[#387ED1]" : "bg-slate-200"}`} />
        ))}
      </div>

      {step === 1 && (
        <form onSubmit={requestOtp} className="space-y-4">
          <p className="text-sm text-slate-500">Enter the email linked to your account. We'll send a 6-digit code.</p>
          <TextField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" error={error} />
          <PrimaryButton type="submit">Send code</PrimaryButton>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={verifyOtp} className="space-y-4">
          <p className="text-sm text-slate-500">
            Enter the code sent to <span className="font-medium text-slate-700">{email}</span>.
          </p>
          <TextField label="6-digit code" value={otp} onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))} placeholder="000000" error={error} />
          <PrimaryButton type="submit">Verify code</PrimaryButton>
        </form>
      )}

      {step === 3 && (
        <form onSubmit={resetPw} className="space-y-4">
          <TextField label="New password" type="password" value={pw} onChange={(e) => setPw(e.target.value)} placeholder="8+ characters" error={error} />
          <PrimaryButton type="submit">Reset password</PrimaryButton>
        </form>
      )}

      <p className="text-center text-[13px] text-slate-500">
        Remembered it?{" "}
        <button type="button" onClick={() => onSwitch("login")} className="font-semibold text-[#387ED1] hover:underline">
          Back to login
        </button>
      </p>
    </div>
  );
}

const TITLES = {
  login: { h: "Welcome back", s: "Log in to access your dashboard, positions, and orders." },
  signup: { h: "Open a free account", s: "Takes about 5 minutes. Keep your PAN and mobile handy." },
  forgot: { h: "Reset password", s: "We'll get you back in within a couple of minutes." },
};

export default function AuthPage() {
  const [view, setView] = useState("login");
  const { h, s } = TITLES[view];

  return (
    <div className="flex min-h-screen w-full bg-slate-50">
      <BrandPanel />

      <div className="flex flex-1 items-center justify-center px-6 py-12">
        <div className="w-full max-w-[380px]">
          <div className="mb-8 flex items-center gap-2.5 lg:hidden">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#387ED1] text-sm font-bold text-white">K</div>
            <span className="text-lg font-semibold text-slate-900">KiteClone</span>
          </div>

          <div className="mb-7">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{h}</h2>
            <p className="mt-1.5 text-sm text-slate-500">{s}</p>
          </div>

          {view !== "forgot" && (
            <div className="mb-6 flex rounded-lg bg-slate-100 p-1">
              {["login", "signup"].map((v) => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  className={`flex-1 rounded-md py-2 text-[13px] font-semibold capitalize transition ${
                    view === v ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"
                  }`}
                >
                  {v === "login" ? "Log in" : "Sign up"}
                </button>
              ))}
            </div>
          )}

          {view === "login" && <LoginForm onSwitch={setView} />}
          {view === "signup" && <SignupForm onSwitch={setView} />}
          {view === "forgot" && <ForgotPasswordForm onSwitch={setView} />}

          <p className="mt-8 text-center text-[11px] leading-relaxed text-slate-400">
            By continuing you agree to the Terms and acknowledge the Privacy Policy.
            This is a demo UI and not affiliated with any real brokerage.
          </p>
        </div>
      </div>
    </div>
  );
}
