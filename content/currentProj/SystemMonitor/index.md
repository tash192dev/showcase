---
date: '3'
title: 'External System Monitor'
cover: './SystemMonitorSketch.png'
# github: 'https://github.com/bchiang7/spotify-profile'
# external: 'https://spotify-profile.herokuapp.com/'
tech:
  - ESP32
  - I2C
  - LCD display
  - Linux Kernel Mods
---

System status like temperatures and resource usage is a useful and interesting statistic to many. Sometimes displaying time series graphs of this data can take up significant screen real estate. This project aims to boost productivity by giving users back their screen real estate with a system monitor display using an ESP32 dev kit with an integrated screen

The display will present key system metrics including CPU usage, frequency, temperature, RAM usage, fan speeds, power consumption, and system uptime.

Integration with a Linux host is expected to involve custom kernel module development to access low-level performance data.

A custom 3D-printed enclosure is planned to house the hardware, designed with a retro aesthetic to complement desktop setups while maintaining a compact and functional form factor.
