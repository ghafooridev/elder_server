# 🧠 Elder Wearable Dataset Documentation

**Filename:** `elder_wearable_data.json`  
**Records:** 50  
**Description:**  
A simulated dataset of biometric and activity data collected from elderly individuals wearing modern health-tracking devices.  
It includes physiological, behavioral, environmental, and anomaly detection parameters used for AI health monitoring and security analytics.

---

## 🩺 Physiological Data

| Column           | Type  | Unit          | Example | Description                                                   |
| ---------------- | ----- | ------------- | ------- | ------------------------------------------------------------- |
| **heart_rate**   | float | bpm           | 72.4    | Heart rate in beats per minute.                               |
| **blood_oxygen** | float | %             | 97.5    | Blood oxygen saturation (SpO₂). Normal range: 95–100%.        |
| **body_temp**    | float | °C            | 36.8    | Body temperature measured by skin sensor.                     |
| **resp_rate**    | float | breaths/min   | 16.0    | Respiratory rate per minute.                                  |
| **hrv**          | float | ms            | 42.3    | Heart Rate Variability (variation between heartbeats).        |
| **stress_level** | float | score (0–100) | 33.2    | Stress indicator derived from HRV and heart rate variability. |

---

## 🏃 Behavioral & Motion Data

| Column                                | Type   | Unit    | Example             | Description                                                         |
| ------------------------------------- | ------ | ------- | ------------------- | ------------------------------------------------------------------- |
| **step_count**                        | int    | steps   | 120                 | Number of steps recorded in a 5-minute window.                      |
| **activity**                          | string | —       | Walking             | Detected activity type (Resting, Walking, Cycling, Sleeping, etc.). |
| **activity_duration**                 | int    | minutes | 45                  | Duration of the ongoing activity segment.                           |
| **accel_x**, **accel_y**, **accel_z** | float  | m/s²    | 0.15 / -0.23 / 0.94 | Accelerometer readings on 3 axes.                                   |
| **gyro_x**, **gyro_y**, **gyro_z**    | float  | °/s     | 15.0 / -34.2 / 5.8  | Gyroscope angular velocity readings.                                |
| **motion_intensity**                  | float  | m/s²    | 1.04                | Magnitude of total movement, calculated from accelerometer data.    |
| **sleep_pattern**                     | string | —       | Deep Sleep          | Sleep state inferred from heart rate and motion.                    |
| **sleep_score**                       | float  | 0–100   | 88.5                | Sleep quality rating based on sleep depth and duration.             |

---

## 🔐 Security & Anomaly Detection

| Column                   | Type  | Unit   | Example | Description                                                   |
| ------------------------ | ----- | ------ | ------- | ------------------------------------------------------------- |
| **anomaly_score**        | float | 0–1    | 0.04    | Model-based deviation score (0 = normal, 1 = high anomaly).   |
| **signal_noise_level**   | float | 0–1    | 0.15    | Signal fluctuation or noise index.                            |
| **data_integrity_score** | float | 0–100  | 98.7    | Reliability confidence of the data based on signal quality.   |
| **is_tampered**          | int   | binary | 0       | Indicates data tampering (0 = genuine, 1 = simulated tamper). |

---

## 🌦️ Environmental & Device Context

| Column                             | Type     | Unit     | Example             | Description                            |
| ---------------------------------- | -------- | -------- | ------------------- | -------------------------------------- |
| **timestamp**                      | datetime | ISO 8601 | 2024-04-01T00:00:00 | Time of the recorded measurement.      |
| **device_id**                      | string   | —        | elder_dev_3245      | Unique ID of the wearable device.      |
| **battery_level**                  | float    | %        | 82.4                | Remaining battery level of the device. |
| **ambient_temp**                   | float    | °C       | 24.3                | Ambient environmental temperature.     |
| **humidity**                       | float    | %        | 54.2                | Ambient humidity percentage.           |
| **location_lat**, **location_lon** | float    | degrees  | 48.13522 / 11.58245 | GPS location of the user.              |
| **altitude**                       | float    | meters   | 515.4               | Elevation above sea level.             |

---

## ⚙️ Derived Metrics (Calculated Fields)

| Column                   | Description                                               |
| ------------------------ | --------------------------------------------------------- |
| **motion_intensity**     | `sqrt(accel_x² + accel_y² + accel_z²)`                    |
| **sleep_pattern**        | Derived using `activity` and `heart_rate` thresholds.     |
| **anomaly_score**        | Computed from deviation of physiological and motion data. |
| **data_integrity_score** | `100 - (anomaly_score * 100)`                             |

---

## 📘 Notes

- Data generated in **5-minute intervals** simulating 50 real-time readings.
- 10% of rows are **tampered samples** for AI training.
- Suitable for health anomaly detection, daily monitoring, and research.

---

## 🧭 Recommended Extensions

- Add `ecg_summary` for cardiac waveform features.
- Include `hydration_level`, `calorie_burn`, and `mood_state`.
- Track `medication_adherence` and `fall_detection` events.

---

**Author:** Generated by AI-based simulation  
**Version:** 1.0  
**Date:** 2024-04-01
