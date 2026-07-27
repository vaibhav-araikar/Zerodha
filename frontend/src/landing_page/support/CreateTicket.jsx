import React, { useState, useRef } from "react";
import {
  CirclePlus,
  CircleUser,
  TrendingUp,
  IndianRupee,
  Palette,
  Coins,
  ChevronDown,
} from "lucide-react";

import "./CreateTicket.css";

/* ===================================
   Data for the accordion sections
   (edit/add sections here — no JSX
   duplication needed)
=================================== */

const SECTIONS = [
  {
    id: "account-opening",
    icon: CirclePlus,
    title: "Account Opening",
    links: [
      "Resident individual",
      "Minor",
      "Non Resident Indian (NRI)",
      "Company, Partnership, HUF and LLP",
      "Glossary",
    ],
  },
  {
    id: "zerodha-account",
    icon: CircleUser,
    title: "Your Zerodha Account",
    links: ["Manage profile", "Nominee details", "Bank & demat details"],
  },
  {
    id: "kite",
    icon: TrendingUp,
    title: "Kite",
    links: ["Orders and trades", "Charts and watchlist", "Kite mobile app"],
  },
  {
    id: "funds",
    icon: IndianRupee,
    title: "Funds",
    links: ["Add funds", "Withdraw funds", "Fund statement"],
  },
  {
    id: "console",
    icon: Palette,
    title: "Console",
    links: ["Portfolio reports", "Tax P&L", "Fund statement"],
  },
  {
    id: "coin",
    icon: Coins,
    title: "Coin",
    links: ["Mutual funds", "SIP", "Statements"],
  },
];

/* ===================================
   Single Accordion Item
=================================== */

function AccordionItem({ section, isOpen, onToggle, isFirst }) {
  const bodyRef = useRef(null);
  const Icon = section.icon;

  return (
    <div className={`ticket-card ${isFirst ? "" : "mt-4"}`}>
      <div
        className="ticket-header"
        role="button"
        tabIndex={0}
        onClick={onToggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onToggle();
          }
        }}
        aria-expanded={isOpen}
      >
        <div className="ticket-left">
          <div className="icon-box">
            <Icon size={20} strokeWidth={1.8} />
          </div>

          <h4>{section.title}</h4>
        </div>

        <ChevronDown
          className={`arrow ${isOpen ? "arrow-open" : ""}`}
          size={20}
        />
      </div>

      <div
        className="ticket-body-wrapper"
        style={{
          maxHeight: isOpen ? (bodyRef.current?.scrollHeight ?? 1000) : 0,
        }}
      >
        <div className="ticket-body" ref={bodyRef}>
          <ul>
            {section.links.map((link) => (
              <li key={link}>
                <a href="/">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ===================================
   Main Component
=================================== */

export default function CreateTicket() {
  // Start with the first section open, like the reference design.
  const [openId, setOpenId] = useState(SECTIONS[0].id);

  const toggleSection = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="container create-ticket-container">
      <div className="row">
        {/* ================= LEFT SECTION ================= */}

        <div className="col-lg-8">
          {SECTIONS.map((section, index) => (
            <AccordionItem
              key={section.id}
              section={section}
              isOpen={openId === section.id}
              isFirst={index === 0}
              onToggle={() => toggleSection(section.id)}
            />
          ))}
        </div>

        {/* ================= RIGHT SECTION ================= */}

        <div className="col-lg-4">
          <div className="notice-box">
            <ul>
              <li>
                <a href="/">Surveillance measure on scrips - July 2026</a>
              </li>

              <li>
                <a href="/">Latest Intraday leverages and Square-off timings</a>
              </li>
            </ul>
          </div>

          <div className="quick-links-box">
            <h4>Quick links</h4>

            <ol>
              <li>
                <a href="/">Track account opening</a>
              </li>

              <li>
                <a href="/">Track segment activation</a>
              </li>

              <li>
                <a href="/">Intraday margins</a>
              </li>

              <li>
                <a href="/">Kite user manual</a>
              </li>

              <li>
                <a href="/">Learn how to create a ticket</a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
