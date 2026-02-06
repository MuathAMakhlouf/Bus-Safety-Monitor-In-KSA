// ==========================================
// KSA Bus Safety Monitor - Logic Script
// Developed by: Muath
// Project: Real-time Driver Behavior Monitoring System
// Platform: SimHub / Assetto Corsa
// ==========================================

// ------------------------------------------------
// 1. Reset Function (Button Mapping)
// ------------------------------------------------
// Maps to steering wheel button to reset score for new sessions
var resetBtn = $prop('InputStatus.JoystickPlugin.G920_Driving_Force_Racing_Wheel_for_Xbox_One_B02'); 

if (resetBtn == 1) {
    root["driver_score"] = 100; // Reset Score
    return "100%\nREADY 🟢✅";   // Instant Feedback
}

// ------------------------------------------------
// 2. Scoring Engine (The Core Logic)
// ------------------------------------------------

// Initialize Score Variable from Memory
var score = root["driver_score"];
if (score == null) { 
    score = 100; 
    root["driver_score"] = 100; 
}

// Check if Game is Running & Bus is Moving
if ($prop('DataCorePlugin.GameRunning') == 1 && $prop('SpeedKmh') > 10 && $prop('DataCorePlugin.GamePaused') == 0) {

    // A) Speed Limit Violation
    // KSA Highway Bus Limit is usually 100km/h, strict limit here is 80km/h for safety
    if ($prop('SpeedKmh') > 80) {
        score -= 0.5; // Penalty per tick
    }

    // B) Aggressive Driving (G-Force)
    // Measures Passenger Comfort (ISO 2631 Standards)
    var gForceLong = Math.abs($prop('AccelerationSurge')); // Braking/Acceleration
    var gForceLat = Math.abs($prop('AccelerationSway'));   // Cornering

    if (gForceLong > 0.8 || gForceLat > 0.8) {
        score -= 0.01; // Penalty for shaking passengers
    }

    // C) Panic Braking (ABS Activation)
    // If ABS triggers, it means the driver lost traction due to harsh braking
    if ($prop('ABSActive') == 1) {
        score -= 0.5; // Major Penalty
    }

    // D) Aggressive Acceleration (Traction Control)
    // If TC triggers, it means wheel spin (Jerky movement for standing passengers)
    if ($prop('TCActive') == 1) {
        score -= 0.2; // Moderate Penalty
    }
}

// ------------------------------------------------
// 3. Boundary Checks
// ------------------------------------------------
// Ensure score stays within 0% - 100% range
if (score < 0) score = 0;
if (score > 100) score = 100;

// Save updated score to memory
root["driver_score"] = score;

// ------------------------------------------------
// 4. Dashboard Output Generation
// ------------------------------------------------
var finalScore = Math.floor(score);
var statusText = "";

// Status Classification
if (finalScore == 100) { 
    statusText = "READY 🟢✅";
} 
else if (finalScore >= 90) { 
    statusText = "EXCELLENT 🟢";
}
else if (finalScore >= 60) { 
    statusText = "TRAINING 🟡⚠️";
}
else { 
    statusText = "FAIL 🔴❌";
}

// Final Return String to Dashboard
return finalScore + "%\n" + statusText;