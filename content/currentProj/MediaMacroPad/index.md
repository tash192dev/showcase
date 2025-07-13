---
date: '4'
title: 'Media Control Pad'
cover: './mediaPad.png'
# github: 'https://github.com/bchiang7/halcyon-site'
# external: 'https://halcyon-theme.netlify.com/'
tech:
  - KMK Firmware
  - Raspberry Pi Pico W
  - Bluetooth
---

Media controls often occupy valuable space on a keyboard's function row. This planned project explores moving them to a dedicated Bluetooth media controller, built around the Raspberry Pi Pico W.

The controller will feature playback buttons (play/pause, next/previous), a rotary encoder for volume with push-to-mute, screen brightness control, and three additional keys for customizable shortcuts. Encoder-based track scrubbing is also being explored.

The firmware will be built using KMK with Bluetooth HID support, aiming for seamless compatibility across Linux and Windows. This project serves as a way to revisit the full development pipeline, from PCB design and hardware prototyping to firmware development and cross-platform integration.
