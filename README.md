# Bus-Safety-Monitor-In-KSA
A real-time system to monitor bus driver behavior for long-distance trips in Saudi Arabia. It focuses on passenger comfort and safety from Point A to Point B.

# KSA Bus Safety Monitor 🚍🇸🇦

This project is a prototype designed to improve the quality of public transport in Saudi Arabia. Whether it's a Hajj journey or a long trip from Riyadh to Dammam, passenger safety comes first.

## ❓ The Problem
Traveling by bus between cities in Saudi Arabia can take hours. If the driver drives aggressively (hard braking, sudden lane changes), it becomes a nightmare for passengers, especially families and the elderly who might be sleeping or standing.

Current systems track **"Where"** the bus is, but they don't track **"How"** it is being driven.

## 💡 The Solution (The Idea)
I created a code that tracks the bus in real-time. It reads the bus telemetry data in real-time to ensure the ride is smooth and safe from Point A to Point B.

**Key Features:**
1.  **Comfort Monitoring:** Detects sudden or harsh braking that wakes up sleeping passengers or causes falls.
2.  **Speed Checks:** Monitors speed limits on highways (e.g., 100 km/h for buses).
3.  **Driver Scoring:** Gives a live score (0-100%) based on driving smoothness.

## 🚌 Use Cases
This system is designed for:
* **Inter-City Travel:** Long trips (e.g., Jeddah to Riyadh).
* **Hajj & Umrah:** Transporting pilgrims safely between Holy Sites.
* **Daily Commute:** Ensuring safety in school and university buses.

## The Simulation For This Idea
The algorithm runs inside **SimHub** connected to a simulator (Assetto Corsa):

* 🟢 **Green Status (READY):** Smooth driving, steady speed.
* 🟡 **Yellow Status (WARNING):** Minor harsh braking or slight speeding.
* 🔴 **Red Status (BAD):** Dangerous driving, risking passenger safety.

## 🛠️ Tech Used...
* JavaScript (The Logic inside The SimHub)
* SimHub (Telemetry Reader)
* Assetto Corsa (Simulation Environment)

---
*Developed by Muath - Computer Engineering Student*
