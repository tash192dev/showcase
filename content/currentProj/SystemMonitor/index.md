---
date: '3'
title: 'External System Monitor'
cover: './SystemMonitorSketch.png'
# github: 'https://github.com/bchiang7/spotify-profile'
# external: 'https://spotify-profile.herokuapp.com/'
tech:
  - ESP32
  - I2C
  - Wifi / Bluetooth
  - FPGA
---

Planning to develop a system monitoring display using an ESP32 dev kit with an integrated screen, with the goal of gaining hands-on experience with the ESP32 platform and its peripheral interfaces. The display will present key system metrics including CPU usage, frequency, temperature, RAM usage, fan speeds, power consumption, and system uptime.

Integration with a Linux host is expected to involve custom kernel module development to access low-level performance data. Offloading system monitoring to the external display helps declutter the main screen and improves overall usability.

A custom 3D-printed enclosure is planned to house the hardware, designed with a retro aesthetic to complement desktop setups while maintaining a compact and functional form factor.
