---
date: '1'
title: 'Tiny ML on RISC-V'
cover: './FPGA.jpg'
# github: 'https://github.com/bchiang7/spotify-profile'
# external: 'https://spotify-profile.herokuapp.com/'
tech:
  - Intel Quartus Prime
  - Nios-V
  - Tiny ML
  - FPGA
---

My final-year [research project](https://part4project.foe.auckland.ac.nz/home/project/detail/5573) focuses on designing a hardware accelerator to improve the performance and efficiency of [TinyML](https://hanlab.mit.edu/projects/tinyml) applications running on softcore processors deployed on FPGAs. The project targets resource-constrained AIoT use cases where low-latency inference and energy efficiency are critical.

An Intel Arria 10 FPGA is used as the development platform, with Nios V selected as the softcore processor due to its robust toolchain support and readily available compilers. Hardware development is carried out in Intel Quartus Prime, with Platform Designer used for system-level hardware integration. TinyML benchmarks are implemented and evaluated using the Ashling RiscFree IDE to assess the accelerator’s impact on execution time and computational efficiency.
