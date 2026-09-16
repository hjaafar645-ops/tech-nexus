/*===== Data =====*/

export const localProducts = [
    {
        id: "electronics-1",
        title: "Apple-MacBook-Pro",
        price: 1.399,
        rating: 9.4,
        images: [
            "/Images/Electronics/Apple-MacBook.jpg",
            "/Images/Electronics/Apple-MacBook(2).png"
        ],
        category: "electronics",
        description: `• CPU: Apple M3 Pro chip with 12-Core CPU running up to 4.05 GHz speed.
         • RAM: 18GB Ultra-fast unified memory (RAM) with 150 GB/s bandwidth.
         • Storage: 512GB high-speed secure NVMe SSD with 7.4 GB/s read speeds.
         • Display: 14.2-inch Liquid Retina XDR screen with 120Hz ProMotion technology. `
    },

    {
        id: "electronics-2",
        title: "Dell-XPS 15",
        price: 1.369,
        rating: 8.4,
        images: [
            "/Images/Electronics/Dell-XPS15.jpg",
            "/Images/Electronics/Dell-XPS-15(2).jpg"
        ],
        category: "electronics",
        description: `• CPU: 13th Gen Intel Core i9-13900H processor with 14-Cores running up to 5.40 GHz. 
        • GPU: NVIDIA GeForce RTX 4070 Laptop GPU with 8GB GDDR6 dedicated VRAM. 
        • RAM & Storage: 32GB DDR5 dual-channel memory with 1TB PCIe Gen4 NVMe M.2 SSD.
        • Display: 15.6-inch OLED InfinityEdge Touch screen with 3.5K (3456 x 2160) resolution. `
    },

    {
        id: "electronics-3",
        title: "Asus-ROG-Zephyrus G16",
        price: 4.432,
        rating: 9.2,
        images: [
            "/Images/Electronics/Asus.webp",
            "/Images/Electronics/Asus(2).jpg",
            "/Images/Electronics/Asus(3).png",
            "/Images/Electronics/Asus(4).png"
        ],
        category: "electronics",
        description: `• CPU: Intel Core Ultra 9 185H processor with 16-Cores & AI acceleration running up to 5.10 GHz.
        • GPU: NVIDIA GeForce RTX 4090 Laptop GPU with 16GB GDDR6 dedicated VRAM. 
        • RAM & Storage: 32GB LPDDR5X dual-channel memory with 2TB PCIe Gen4 NVMe M.2 SSD.
        • Display: 16-inch ROG Nebula OLED screen with 2.5K resolution and 240Hz refresh rate. `
    },

    {
        id: "electronics-4",
        title: "Lenovo-Legion-Slim 7",
        price: 1.516,
        rating: 9.4,
        images: [
            "/Images/Electronics/Lenovo-Legion-Slim7.jpg",
            "/Images/Electronics/Lenovo-Legion-Slim7(2).jpg"
        ],
        category: "electronics",
        description: `• CPU: AMD Ryzen 9 7940HS processor with 8-Cores & 16-Threads running up to 5.20 GHz.
        • GPU: NVIDIA GeForce RTX 4070 Laptop GPU with 8GB GDDR6 dedicated VRAM.
        • RAM & Storage: 32GB DDR5 dual-channel memory with 1TB PCIe Gen4 NVMe M.2 SSD.
        • Display: 16-inch Lenovo PureSight WQXGA (2560 x 1600) screen with 240Hz refresh rate. `
    },

    {
        id: "electronics-5",
        title: "HP-OMEN 16",
        price: 1.799,
        rating: 7.4,
        images: [
            "/Images/Electronics/HP-OMEN.png",
            "/Images/Electronics/HP_OMEN(2).png"
        ],
        category: "electronics",
        description: `• CPU: 13th Gen Intel Core i7-13700HX processor with 16-Cores running up to 5.00 GHz.
        • GPU: NVIDIA GeForce RTX 4070 Laptop GPU with 8GB GDDR6 dedicated VRAM.
        • RAM & Storage: 16GB DDR5 dual-channel memory with 1TB PCIe Gen4 NVMe M.2 SSD.
        • Display: 16.1-inch QHD (2560 x 1440) IPS anti-glare screen with 165Hz refresh rate. `
    },

    {
        id: "electronics-6",
        title: "Google-Pixel-9-pro",
        price: 1.099,
        rating: 9.1,
        images: [
            "/Images/Electronics/Google-pixel-9pro.jpg",
            "/Images/Electronics/Google-Pixel-9-Pro(2).jpg"
        ],
        category: "electronics",
        description: `• Chipset & AI: Google Tensor G4 chip with Titan M2 security coprocessor and advanced Gemini Nano AI build.
        • RAM & Storage: 16GB LPDDR5X high-speed memory with 256GB secure UFS 4.0 internal storage.
        • Camera System: Triple rear setup with 50MP main, 48MP telephoto (5x zoom), and 42MP selfie camera with 4K recording.
        • Display & Battery: 6.3-inch Super Actua LTPO OLED screen with 120Hz refresh rate and 4700 mAh battery supporting 27W fast charging. `
    },

    {
        id: "electronics-7",
        title: "samsung-galaxy-s25",
        price: 524,
        rating: 9.4,
        images: [
            "/Images/Electronics/Samsung-galaxy-S25.jpg"
        ],
        category: "electronics",
        description: `• Chipset & AI: Qualcomm Snapdragon 8 Elite (3nm) with advanced Galaxy AI engine and octa-core processing architecture.
        • RAM & Storage: 12GB LPDDR5X high-speed memory with 256GB secure UFS 4.0 internal storage ecosystem.
        • Camera System: Triple rear matrix with 50MP main camera, 10MP telephoto (3x zoom), and 12MP ultra-wide lens with 8K recording.
        • Display & Battery: 6.2-inch Dynamic AMOLED 2X screen with 120Hz adaptive refresh rate and 4000 mAh battery with 25W fast charge. `
    },

    {
        id: "electronics-8",
        title: "oneplus-12",
        price: 427,
        rating: 9.6,
        images: [
            "/Images/Electronics/OnePlus-12.jpg",
            "/Images/Electronics/OnePlus-12(2).jpg"
        ],
        category: "electronics",
        description: `• Chipset & Cooling: Qualcomm Snapdragon 8 Gen 3 (4nm) processor with Dual Cryo-velocity VC cooling architecture for peak performance.
        • RAM & Storage: 16GB LPDDR5X high-speed memory with 512GB secure UFS 4.0 internal storage ecosystem.
        • Hasselblad Cameras: 50MP Sony LYT-808 main camera, 64MP periscope telephoto (3x optical zoom), and 48MP ultra-wide lens with 8K recording.
        • Display & Battery: 6.82-inch 2K ProXDR OLED screen with 120Hz LTPO technology and 5400 mAh battery supporting 100W ultra-fast charging. `
    },

    {
        id: "electronics-9",
        title: "iphone-17-pro-max",
        price: 1.199,
        rating: 9.1,
        images: [
            "/Images/Electronics/iphone-17-pro-max2.png",
            "/Images/Electronics/iphon-17-pro-max.png"
        ],
        category: "electronics",
        description: `• Chipset & AI: Apple A19 Pro chip (2nm architecture) with next-generation Neural Engine for advanced Apple Intelligence tasks.
        • RAM & Storage: 12GB high-speed unified memory (RAM) with 256GB secure NVMe internal flash storage ecosystem.
        • Pro Camera Array: Triple 48MP matrix (Main, Ultra-Wide, and Telephoto) with mechanical variable aperture and 4K cinematic spatial audio layout.
        • Display & Power: 6.9-inch Super Retina XDR OLED screen with 120Hz ProMotion, smaller Dynamic Island, and 4900 mAh enhanced battery cell.🇸🇦 `
    },

    {
        id: "electronics-10",
        title: "asus-zenfone-12-ultra",
        price: 721,
        rating: 9.4,
        images: [
            "/Images/Electronics/ASUS-Zenfone-12-Ultra.jpg"
        ],
        category: "electronics",
        description: `• Chipset & Power: Qualcomm Snapdragon 8 Elite (3nm) processor with AI-accelerated architecture for supreme gaming and multitasking stability.
        • RAM & Storage: 16GB LPDDR5X high-speed memory with 512GB secure UFS 4.0 internal flash storage.
        • Gimbal Cameras: 50MP Sony main camera with 6-Axis Hybrid Gimbal Stabilizer 3.0, 32MP telephoto (3x zoom), and 13MP ultra-wide lens.
        • Display & Battery: 6.78-inch Samsung Flexible AMOLED screen with 144Hz refresh rate and 5500 mAh massive battery supporting 65W fast charge. `
    },

    {
        id: "electronics-11",
        title: "Asus-rog-swift-oled",
        price: 1.149,
        rating: 10,
        images: [
            "/Images/Electronics/Asus-gamers.jpg"
        ],
        category: "electronics",
        description: `• Panel & Resolution: 31.5-inch Next-Gen QD-OLED panel with 4K UHD (3840 x 2160) resolution for pristine depth and crispness.
        • Refresh & Response: Blazing-fast 240Hz refresh rate combined with near-instantaneous 0.03ms (GtG) pixel response time for zero motion blur.
        • Cooling & Durability: Custom internal heatsink architecture wrapped in a premium graphene film layer to strictly mitigate burn-in risks without noisy fans.
        • Contrast & Brightness: 1,500,000:1 ultra-extreme contrast ratio with VESA DisplayHDR True Black 400 certification and 99% DCI-P3 pro color gamut. `
    },

    {
        id: "electronics-12",
        title: "AOC-gaming",
        price: 1.299,
        rating: 8.6,
        images: [
            "/Images/Electronics/AOC-gaming.webp",
            "/Images/Electronics/AOC-gaming(2).jpg"
        ],
        category: "electronics",
        description: `• Panel & Resolution: 27-inch Fast IPS / QHD panel with 2K (2560 x 1440) resolution for optimal pixel density and wider viewing angles.
        • Refresh & Response: Competitive 240Hz ultra-smooth refresh rate with a near-instant 1ms (GtG) response time to eliminate screen ghosting.
        • Sync Technology: Certified AMD FreeSync Premium and NVIDIA G-SYNC Compatible to completely prevent tearing during high-FPS gameplay.
        • Color & Brightness: VESA DisplayHDR 400 certified with 120% sRGB wide color gamut, delivering vibrant, shadow-accurate contrast. `
    },

    {
        id: "electronics-13",
        title: "LG-Ultra-gear",
        price: 800,
        rating: 9.2,
        images: [
            "/Images/Electronics/Lg-oled.jpg",
            "/Images/Electronics/Lg-oled(2).jpg",
            "/Images/Electronics/Lg-oled(3).jpg"
        ],
        category: "electronics",
        description: `• Panel & Resolution: 27-inch Ultra-Fast OLED/IPS panel with QHD (2560 x 1440) resolution for extreme pixel precision and infinite depth.
        • Refresh & Response: Blazing-fast 240Hz refresh rate combined with an astronomical 0.03ms (GtG) response time for zero motion blur.
        • Sync Architecture: Fully certified NVIDIA G-SYNC Compatible and AMD FreeSync Premium Pro to obliterate screen tearing.
        • Color Matrix: 98.5% DCI-P3 cinematic color gamut with HDR10 support, delivering ultra-vibrant contrast and anti-glare gaming visuals. `
    },

    {
        id: "electronics-14",
        title: "samsung-odessey g7",
        price: 700,
        rating: 8.4,
        images: [
            "/Images/Electronics/Samsung-odessey.jpg"
        ],
        category: "electronics",
        description: `• Panel & Curvature: 27-inch Quad HD (2560 x 1440) QLED panel with an aggressive 1000R curvature matching the human eye for ultimate immersion.
        • Refresh & Response: Supreme 240Hz rapid refresh rate combined with a blistering 1ms (GtG) response time to completely eliminate gaming lag.
        • Sync Architecture: Certified NVIDIA G-SYNC Compatible and AMD FreeSync Premium Pro to deliver seamless, tear-free frame synchronization.
        • HDR & Color Contrast: VESA DisplayHDR 600 certified with Quantum Dot technology, offering 125% sRGB color gamut and deep, realistic contrast. `
    },

    {
        id: "electronics-15",
        title: "Bose-QC-Ultra",
        price: 349.95,
        rating: 9.1,
        images: [
            "/Images/Electronics/Bose-QC-Ultra-Gen2-(Black).jpg",
            "/Images/Electronics/Bose-QC-Ultra-Gen2-(Black)(2).jpg",
            "/Images/Electronics/Bose-QC-Ultra-Gen2-(3).webp"
        ],
        category: "electronics",
        description: `• Audio & Immersion: Breakthrough Bose Immersive Audio ecosystem with Spatial Audio soundstage and CustomTune acoustic calibration.
        • Noise Cancellation: World-class Custom Noise Cancellation with three smart presets: Quiet Mode, Aware Mode, and Immersion Mode.
        • Microphones & Calls: Advanced 12-microphone matrix with active beamforming filters to completely isolate your voice from background noise.
        • Battery & Wireless: Up to 24 hours of total wireless playback (18 hours with Immersive Audio) featuring fast charge and Bluetooth 5.3 stability. `
    },

    {
        id: "electronics-16",
        title: "Sony WH-1000XM5",
        price: 229,
        rating: 9.1,
        images: [
            "/Images/Electronics/Sony-WH1000XM5.jpg",
            "/Images/Electronics/Sony-WH1000XM5(2).webp",
            "/Images/Electronics/Sony-WH1000XM5(3).png",
        ],
        category: "electronics",
        description: `• Noise Cancellation: Industry-leading Active Noise Cancellation powered by Dual Processors (V1 & QN1) and an 8-microphone auto-optimizing matrix.
        • Acoustics & High-Res: Custom 30mm precision drivers with LDAC codec support, delivering certified High-Resolution Audio and real-time DSEE Extreme upscaling.
        • Microphones & Calls: Advanced 4-microphone beamforming array with AI-powered wind and background noise reduction for crystal-clear voice transmission.
        • Battery & Charging: Up to 30 hours of continuous playback with ANC enabled (40 hours ANC off) with USB-PD ultra-fast charge (3 minutes for 3 hours). `
    },

    {
        id: "electronics-17",
        title: "Sennheiser-Momentum",
        price: 329,
        rating: 9.6,
        images: [
            "/Images/Electronics/Sennheiser-Momentum.jpg",
            "/Images/Electronics/Sennheiser-Momentum(2).jpg"
        ],
        category: "electronics",
        description: `• Acoustics & Precision: Audiophile-inspired 42mm transducer system delivering Sennheiser's signature sound with extreme dynamic clarity.
        • Adaptive ANC: Next-generation Adaptive Noise Cancellation that automatically adjusts to ambient sound levels, plus an adjustable Transparency Mode.
        • Battery Monster: Unmatched and monumental 60-hour battery life on a single charge with Bluetooth 5.2 and ANC fully activated.
        • Codecs & Smart Control: Premium audio streaming with aptX Adaptive, AAC, and SBC support, customized via the Smart Control app equalizer. `
    },

    {
        id: "electronics-18",
        title: "Apple-AirPods-Pro",
        price: 129,
        rating: 9.2,
        images: [
            "/Images/Electronics/Apple-AirPods-Pro.jpg"
        ],
        category: "electronics",
        description: `• Chipset & Audio: Advanced Apple H2 headphone chip delivering compute-grade Adaptive Audio, personalized Spatial Audio, and dynamic head tracking.
        • Noise Cancellation: Up to 2x more Active Noise Cancellation (ANC) compared to previous generations, featuring high-fidelity Adaptive Transparency.
        • Control & Sensors: Expanded capacitive touch control swipe bar on the stem for seamless volume, call management, and audio source switching.
        • Battery & Case: Up to 30 hours of total listening time with the MagSafe Charging Case (USB-C) equipped with U1 chip for precise Find My tracking. `
    },

    {
        id: "electronics-19",
        title: "ِApple-AirPods-Max2",
        price: 499,
        rating: 9.2,
        images: [
            "/Images/Electronics/Apple-AirPods-Max-2.jpg"
        ],
        category: "electronics",
        description: `• Acoustics & Precision: Custom-designed dynamic driver architecture driven by dual Apple H1 chips to deliver high-fidelity audio with ultra-low distortion.
        • Noise Cancellation: Premium Active Noise Cancellation (ANC) that continuously counters external sound, paired with high-fidelity Transparency Mode.
        • Spatial Immersion: Personalized Spatial Audio with dynamic head tracking to create a theater-like acoustic stage customized for your ears.
        • Design & Power: Breathable knit mesh canopy and aluminum cups with a modern USB-C charging port, delivering up to 20 hours of high-res playback with ANC on. `
    },

    {
        id: "electronics-20",
        title: "Nvidia-GeForce-RTX-5070",
        price: 620,
        rating: 9.4,
        images: [
            "/Images/Electronics/nVidia-GeForce-RTX-5070.jpg",
            "/Images/Electronics/nVidia-GeForce-RTX-5070(2).webp"
        ],
        category: "electronics",
        description: `• Architecture & Cores: Next-gen NVIDIA Blackwell architecture built on TSMC 4N process, packing advanced CUDA and Ray Tracing cores.
        • VRAM & Bandwidth: 12GB high-speed GDDR7 video memory operating on a 192-bit bus with ultra-high bandwidth.
        • AI & Neural Processing: 4th Generation Tensor Cores supporting full DLSS 4 Multi-Frame Generation and AI neural rendering.
        • Power & Display Tech: 250W TDP rating with PCIe 5.0 interface and full DisplayPort 2.1 support for extreme 4K high-refresh gaming. `
    },

    {
        id: "electronics-21",
        title: "playstation-5-pro",
        price: 789.99,
        rating: 9.4,
        images: [
            "/Images/Electronics/playstation-5-.jpg",
            "/Images/Electronics/PlayStation-5(2).jpg"
        ],
        category: "electronics",
        description: `• GPU Power: Upgraded GPU with 67% more Compute Units and 45% faster rendering for ultimate graphical fidelity.
        • Advanced Ray Tracing: Dynamic ray tracing capabilities providing up to 2x-3x the casting speeds of the standard console.
        • AI Upscaling (PSSR): PlayStation Spectral Super Resolution machine learning engine for razor-sharp pixel sharpness.
        • Storage & Wireless: Massive 2TB ultra-high-speed custom NVMe SSD coupled with next-generation Wi-Fi 7 connectivity. `
    },

    {
        id: "electronics-22",
        title: "xbox-series 2 1tb",
        price: 589.99,
        rating: 8.2,
        images: [
            "/Images/Electronics/Xbox-series10.jpg",
            "/Images/Electronics/Xbox-series10(3).jpg",
        ],
        category: "electronics",
        description: `• CPU & Architecture: Custom AMD Zen 2 processor with 8-Cores running up to 3.8 GHz based on RDNA 2 graphical architecture.
        • GPU Power: 12 Teraflops of pure graphical processing power engineered to deliver true 4K gaming targets up to 120 FPS.
        • Memory & Storage: 16GB GDDR6 high-speed memory combined with 1TB custom NVMe SSD powered by Xbox Velocity Architecture.
        • Smart Features: Full hardware-accelerated Ray Tracing with Quick Resume technology to switch instantly between multiple games. `
    },

    {
        id: "electronics-23",
        title: "Samsung-990-Pro-4TB",
        price: 399.99,
        rating: 9.4,
        images: [
            "/Images/Electronics/samsung-990pro-.jpg",
            "/Images/Electronics/samsung-990pro-(2).jpg"
        ],
        category: "electronics",
        description: `• Interface & Tech: PCIe Gen 4.0 x4, NVMe 2.0 interface engineered with Samsung's custom in-house controller for peak stability.
        • Speed Architecture: Blazing sequential read speeds up to 7,450 MB/s and write speeds up to 6,900 MB/s to eliminate loading screens.
        • Capacity & Cache: Massive 4TB storage pool equipped with a huge 4GB LPDDR4 dedicated SDRAM cache for seamless high workloads.
        • Thermal Controls: Advanced nickel-coated controller and smart thermal guard architecture to strictly prevent overheating and throttling. `
    },

    {
        id: "electronics-24",
        title: "Logitech-g-pro gaming",
        price: 109,
        rating: 9.6,
        images: [
            "/Images/Electronics/Logitech-G-PRO.jpg",
            "/Images/Electronics/Logitech-G-PRO(2).jpg"
        ],
        category: "electronics",
        description: `• Switch Architecture: Pro-grade GX Mechanical Switches (Clicky/Tactile/Linear) engineered for tournament-level performance, speed, and durability.
        • Design Layout: Ultra-portable Tenkeyless (TKL) compact design that completely frees up desk space for low-sens mouse movements.
        • RGB & Memory: Advanced LIGHTSYNC RGB per-key illumination with on-board profile memory to save your tactical lighting layouts.
        • Connectivity & Cable: Detachable micro-USB cable featuring a secure three-prong design for easy, rock-solid stable connections. `
    },

    {
        id: "electronics-25",
        title: "Razer-deathadder v3",
        price: 164.99,
        rating: 9.8,
        images: [
            "/Images/Electronics/Razer-DeathAdder-V3-Pro-HyperPolling-Wireless.webp",
            "/Images/Electronics/Razer-DeathAdder-V3-Pro-HyperPolling-Wireless(2).jpg"
        ],
        category: "electronics",
        description: `• Sensor Technology: Razer Focus Pro 30K Optical Sensor with 99.8% resolution accuracy and smart tracking across glass surfaces.
        • Weight & Ergonomics: Ultra-lightweight structural design (only 59g) optimized with an iconic ergonomic shape for professional esports handling.
        • Switches & Polling: Razer Optical Mouse Switches Gen-3 rated for 90 million clicks with true 8,000Hz polling rate speed for near-zero lag.
        • Connectivity & Speed: Razer HyperSpeed Wireless layout providing a rock-solid, lightning-fast connection that outperforms standard wireless tech. `
    },

    {
        id: "electronics-26",
        title: "Logitech-brio-c1000e",
        price: 138.88,
        rating: 9.1,
        images: [
            "/Images/Electronics/Logitech-BRIO-C1000e-ULTRA-HD-4K-PRO.jpg"
        ],
        category: "electronics",
        description: `• Resolution & FPS: Ultra HD 4K video streaming at 30 FPS, or high-speed 1080p Full HD at 60 FPS for pristine image crispness.
        • Light Optimization: RightLight 3 technology with HDR (High Dynamic Range) to automatically adjust contrast in dark or direct sunlight environments.
        • Field of View & Zoom: Adjustable diagonal field of view (65°, 78°, or 90°) paired with a 5x digital zoom to capture tactical desktop spaces.
        • Security & Audio: Certified infrared sensor setup supporting secure Windows Hello facial recognition and dual omni-directional noise-canceling mics. `
    },

    {
        id: "electronics-27",
        title: "Apple-watch-series 10",
        price: 449,
        rating: 10,
        images: [
            "/Images/Electronics/Apple-watch.jpeg",
            "/Images/Electronics/Apple-watch(2).jpg",
            "/Images/Electronics/Apple-watch(3).jpg"
        ],
        category: "electronics",
        description: `• Design & Display: Thinnest-ever aluminum/titanium case housing a wide-angle OLED Always-On Retina display that is up to 40% brighter when viewed at an angle.
        • Chipset & Power: Power-efficient Apple S10 SiP chip with 4-core Neural Engine for instant double-tap gestures, on-device Siri, and smooth watchOS handling.
        • Health & Sensors: Advanced biometric monitoring array tracking heart rate, ECG, skin temperature, and sleep apnea notifications.
        • Charging & Depth: Ultra-fast charging infrastructure (0-80% in about 30 minutes) with a depth gauge, water temperature sensor, and 50m swimproof engineering. `
    },

    {
        id: "game-1",
        title: "Resident-Evil-Requiem",
        price: 44.95,
        rating: 9.8,
        images: [
            "/Images/Gaming/Resident-Evil.jpg",
            "/Images/Gaming/Resident-Evil(2).jpg",
            "/Images/Gaming/Resident-Evil(3).jpg",
            "/Images/Gaming/Resident-Evil(4).webp",
            "/Images/Gaming/Resident-Evil(5).jpg"
        ],
        category: "gaming",
        description: `• Genre: Survival Horror & Psychological thriller with intense cinematic action.
        • Game Modes: Immersive single-player campaign with adaptive tactical item management.
        • Engine & Graphics: Next-gen RE Engine optimized for ultra-realistic 4K dynamic ray tracing at 60 FPS.
        • Platforms: Native support with zero load screens on PlayStation 5 Pro, Xbox Series X, and PC. `
    },

    {
        id: "game-2",
        title: "Doom : the-dark-ages",
        price: 50.99,
        rating: 9.1,
        images: [
            "/Images/Gaming/Doom-the-dark-ages.jpg",
            "/Images/Gaming/Doom-the-dark-ages(2).jpg",
            "/Images/Gaming/Doom-the-dark-ages(3).jpg"
        ],
        category: "gaming",
        description: `• Genre: Medieval Dark Fantasy Strategy & Tactical Survival warfare.
        • Game Modes: Single-player epic campaign and cooperative online medieval sieges.
        • Engine & Graphics: High-performance custom engine delivering gritty 4K medieval atmospheric particle lighting.
        • Platforms: Native support across PlayStation 5 Pro, Xbox Series X, and PC gaming rigs. `
    },

    {
        id: "game-3",
        title: "Monster-hunter-wilds",
        price: 11.99,
        rating: 8.6,
        images: [
            "/Images/Gaming/Monster-hunter-wilds2.jpg",
            "/Images/Gaming/Monster-Hunter-Wilds.jpg",
            "/Images/Gaming/Monster-Hunter-Wilds3.jpg",
            "/Images/Gaming/Monster-Hunter-Wilds4.jpg",
            "/Images/Gaming/Monster-Hunter-Wilds5.jpg",
            "/Images/Gaming/Monster-Hunter-Wilds6.jpg"
        ],
        category: "gaming",
        description: `• Genre: Tactical Action RPG & Ecosystem Survival with massive scale monsters.
        • Game Modes: Dynamic single-player story seamlessly shifting to 4-player online co-op with crossplay enabled.
        • Engine & Graphics: Advanced RE Engine packing breathtaking 4K panoramic ecosystem physics and global illumination.
        • Platforms: Native next-gen building optimized for PlayStation 5 Pro, Xbox Series X, and PC. `
    },

    {
        id: "game-4",
        title: "Expedition-33-Deluxe",
        price: 49.99,
        rating: 9.6,
        images: [
            "/Images/Gaming/Clair-Obscur-Expedition-33-Deluxe.webp",
            "/Images/Gaming/Clair-Obscur-Expedition-33-Deluxe(2).jpg"
        ],
        category: "gaming",
        description: `• Genre: Tactical Turn-Based RPG & Dark Fantasy adventure with real-time reaction mechanics.
        • Deluxe Content: Inside-the-vault digital artbook, full official soundtrack, and exclusive premium character outfits.
        • Engine & Graphics: Unreal Engine 5 with breathtaking 4K high-fidelity art style, dynamic particle lighting, and cinematic layouts.
        • Platforms: Built natively with ultra-fast loading for PlayStation 5 Pro, Xbox Series X, and PC. `
    },

    {
        id: "game-5",
        title: "Call of duty : Black-ops 7",
        price: 25.99,
        rating: 9.4,
        images: [
            "/Images/Gaming/black-ops-7(2).jpg",
            "/Images/Gaming/black-ops-7(3).jpg",
            "/Images/Gaming/black-ops-7(4).jpg",
            "/Images/Gaming/black-ops-7.jpg",
        ],
        category: "gaming",
        description: `• Genre: First-Person Tactical Shooter & Next-Gen Military Warfare simulation.
        • Game Modes: Cinematic single-player campaign, tactical multi-tiered multiplayer, and vast cooperative round-based Zombies ecosystem.
        • Engine & Graphics: Advanced IW Engine optimized for ultra-realistic 4K dynamic global illumination with full Ray Tracing at 120 FPS.
        • Platforms: Native next-gen architectural build with high-bandwidth streaming for PlayStation 5 Pro, Xbox Series X, and PC. `
    },


    {
        id: "game-6",
        title: "Assassin’s-Creed",
        price: 69.99,
        rating: 8.4,
        images: [
            "/Images/Gaming/Assassin’s-Creed-Shadows.jpg"
        ],
        category: "gaming",
        description: `• Genre: Open-World Action RPG & Tactical Stealth adventure with realistic dynamic world seasons.
        • Game Modes: Single-player epic campaign featuring dual playable protagonists with distinct combat styles.
        • Engine & Graphics: Advanced Ubisoft Anvil pipeline optimized for ultra-realistic 4K dynamic global illumination at 60 FPS.
        • Platforms: Native next-gen building optimized with ultra-fast loading for PlayStation 5 Pro, Xbox Series X, and PC. `
    },

    {
        id: "game-7",
        title: "Crimson-Desert",
        price: 43.99,
        rating: 8.6,
        images: [
            "/Images/Gaming/Crimson-Desert.jpg",
            "/Images/Gaming/Crimson-Desert(2).webp"
        ],
        category: "gaming",
        description: `• Genre: Open-World Action-RPG & Medieval Fantasy epic with ultra-fluid hack-and-slash combat mechanics.
        • Game Modes: Deep, character-driven single-player cinematic campaign focusing on survival, mercenary war, and exploration.
        • Engine & Graphics: Proprietary next-gen BlackSpace Engine delivering photorealistic 4K environments with dynamic weather and soft physics.
        • Platforms: Fully optimized for next-generation hardware architecture on PlayStation 5 Pro, Xbox Series X, and high-end PC gaming rigs. `
    },

    {
        id: "game-8",
        title: "Dune : Awakening",
        price: 31.99,
        rating: 8.2,
        images: [
            "/Images/Gaming/Dune-Awakening.jpg",
            "/Images/Gaming/Dune-Awakening(2).jpg"
        ],
        category: "gaming",
        description: `• Genre: Open-World Action-RPG & Medieval Fantasy epic with ultra-fluid hack-and-slash combat mechanics.
        • Game Modes: Deep, character-driven single-player cinematic campaign focusing on survival, mercenary war, and exploration.
        • Engine & Graphics: Proprietary next-gen BlackSpace Engine delivering photorealistic 4K environments with dynamic weather and soft physics.
        • Platforms: Fully optimized for next-generation hardware architecture on PlayStation 5 Pro, Xbox Series X, and high-end PC gaming rigs. `
    },

    {
        id: "game-9",
        title: "DEATH-STRANDING 2",
        price: 38.00,
        rating: 9.6,
        images: [
            "/Images/Gaming/Death-stranding.jpg",
            "/Images/Gaming/Death-stranding(2).jpg",
            "/Images/Gaming/Death-stranding(3).jpg"
        ],
        category: "gaming",
        description: `• Genre: Open-World Survival MMO & Tactical Crafting sci-fi adventure in a massive shifting desert ecosystem.
        • Game Modes: Persistent multiplayer sandbox universe focusing on spice harvesting, political factions, and vehicular combat.
        • Engine & Graphics: Unreal Engine 5 with stunning photorealistic 4K cinematic world building, dynamic sand physics, and Lumen global illumination.
        • Platforms: Native next-gen architectural design optimized for PlayStation 5 Pro, Xbox Series X, and PC gaming rigs. `
    },

    {
        id: "game-10",
        title: "Mortal-Shell 2",
        price: 44.99,
        rating: 7.8,
        images: [
            "/Images/Gaming/Mortal-Shell-II.jpg",
            "/Images/Gaming/Mortal-Shell-II(2).jpg",
            "/Images/Gaming/Mortal-Shell-II(3).webp"
        ],
        category: "gaming",
        description: `• Genre: Dark Fantasy Action-RPG & Hardcore Souls-like tactical combat.
        • Game Modes: Intense single-player campaign focusing on strategic hardening mechanics and possessing fallen warriors.
        • Engine & Graphics: Advanced Unreal Engine pipeline delivering gritty 4K atmospheric dynamic lightning and deep volumetric shadows at 60 FPS.
        • Platforms: Fully optimized with ultra-fast loading for PlayStation 5 Pro, Xbox Series X, and PC gaming rigs. `
    },

    {
        id: "game-11",
        title: "Hades 2",
        price: 24.99,
        rating: 9.7,
        images: [
            "/Images/Gaming/Hades-II.jpg"
        ],
        category: "gaming",
        description: `• Genre: Rogue-like Dungeon Crawler & Fast-paced Action-RPG infused with witchcraft and Greek mythology. 
        • Game Modes: Single-player rogue-like progression loop featuring adaptive combat skills and permanent upgrade trees.
        • Engine & Graphics: Hand-drawn 2D/3D signature art style optimized for razor-sharp 4K scaling, dynamic lighting, and flawless 120 FPS performance.
        • Platforms: Native optimization for PC gaming rigs (Steam/Epic), with full upcoming deployment on PlayStation 5 Pro and Xbox Series X. `
    },

    {
        id: "game-12",
        title: "Stellar-Blade",
        price: 44.48,
        rating: 9.8,
        images: [
            "/Images/Gaming/Stellar-Blade.jpg",
            "/Images/Gaming/Stellar-Blade(2).jpg",
            "/Images/Gaming/Stellar-Blade(3).jpg"
        ],
        category: "gaming",
        description: `• Genre: Fast-paced Sci-Fi Action-Adventure & Hack-and-Slash RPG with heavy tactical parry and dodge mechanics.
        • Game Modes: Deep cinematic single-player story campaign focusing on elite combat, combos, and futuristic world exploration.
        • Engine & Graphics: High-end Unreal Engine architecture delivering stunning 4K resolution options, dynamic lighting, and silky-smooth 60 FPS gameplay.
        • Platforms: Built natively with ultra-fast custom NVMe optimization for PlayStation 5, PlayStation 5 Pro, and PC gaming platforms. `
    },

    {
        id: "game-13",
        title: "Subnautica 2",
        price: 29.62,
        rating: 9.3,
        images: [
            "/Images/Gaming/Subnautica-2.png",
            "/Images/Gaming/Subnautica-2(2).jpg",
            "/Images/Gaming/Subnautica-2(3).jpg"
        ],
        category: "gaming",
        description: `• Genre: Underwater Open-World Survival & Sci-Fi sandbox exploration in a brand-new alien planet ocean.
        • Game Modes: Immersive single-player campaign and for the first time, a fully integrated 4-player online co-op multiplayer.
        • Engine & Graphics: Unreal Engine 5 delivering photorealistic 4K alien marine ecosystems, deep volumetric water lighting, and Lumen technology.
        • Platforms: Built natively with high-speed performance optimization for PC (Steam/Epic), PlayStation 5 Pro, and Xbox Series X. `
    },

    {
        id: "game-14",
        title: "Slay-the-Spire 2",
        price: 22.99,
        rating: 8.1,
        images: [
            "/Images/Gaming/Slay-the-Spire-2.png",
            "/Images/Gaming/Slay-the-Spire-2(2).jpeg",
            "/Images/Gaming/Slay-the-Spire-2(3).jpg"
        ],
        category: "gaming",
        description: `• Genre: Roguelike Deckbuilder & Tactical Strategy Card adventure with entirely new mechanics.
        • Game Modes: Single-player progressive roguelike run loops featuring completely reworked hero decks and global relics.
        • Engine & Graphics: Advanced Godot Engine architecture optimized for crisp, high-framerate 4K scaling and fluid dynamic performance.
        • Platforms: Native launch optimization for PC (Steam), with incoming deployment pipelines for PlayStation 5 Pro, Xbox Series X, and Mobile. `
    },

    {
        id: "game-15",
        title: "Nioh 3",
        price: 29.99,
        rating: 9.6,
        images: [
            "/Images/Gaming/Nioh-3.webp",
            "/Images/Gaming/Nioh-3(2).jpg",
            "/Images/Gaming/Nioh-3(3).jpg"
        ],
        category: "gaming",
        description: `• Genre: Dark Fantasy Action-RPG & Hardcore Tactical Masocore (Souls-like) combat.
        • Game Modes: Immersive single-player campaign and online co-op multiplayer up to 3 players with Yokai shift mechanics.
        • Engine & Graphics: High-performance custom engine delivering crisp 4K resolution dynamic lightning and seamless 120 FPS target performance.
        • Platforms: Fully optimized with near-instant loading for PlayStation 5 Pro, Xbox Series X, and PC gaming rigs. `
    },

    {
        id: "game-16",
        title: "Sinking-City 2",
        price: 39.99,
        rating: 8.4,
        images: [
            "/Images/Gaming/Sinking-City-2.jpg",
            "/Images/Gaming/Sinking-City-2(2).jpg",
            "/Images/Gaming/Sinking-City-2(3).jpg"
        ],
        category: "gaming",
        description: `• Genre: Lovecraftian Survival Horror & Psychological Detective investigation.
        • Game Modes: Immersive single-player campaign focusing on exploration, puzzle-solving, and cosmic dread.
        • Engine & Graphics: Unreal Engine 5 delivering stunning photorealistic 4K gothic cityscapes, dynamic water physics, and Lumen global illumination.
        • Platforms: Native architectural design optimized for PC (Steam/Epic), PlayStation 5 Pro, and Xbox Series X. `
    },

    {
        id: "game-17",
        title: "Kingdom-Come-Deliverance",
        price: 24.99,
        rating: 9.4,
        images: [
            "/Images/Gaming/Kingdom-Come-Deliverance.jpg",
            "/Images/Gaming/Kingdom-Come-Deliverance(2).jpg"
        ],
        category: "gaming",
        description: `• Genre: Story-Driven Open-World Action RPG & Historical Realism medieval simulator.
        • Game Modes: Deep single-player epic campaign featuring non-linear quest progression and tactical first-person sword combat.
        • Engine & Graphics: Heavily modified CryEngine delivering highly detailed 4K sprawling medieval landscapes, castle sieges, and realistic dynamic day/night cycles.
        • Platforms: Fully optimized with enhanced settings for PlayStation 5 Pro, Xbox Series X, and high-end PC gaming rigs. `
    },

    {
        id: "game-18",
        title: "Split-fiction",
        price: 30.00,
        rating: 9.9,
        images: [
            "/Images/Gaming/Split-fiction.jpeg"
        ],
        category: "gaming",
        description: `• Genre: Co-Op Platformer & Puzzle-Adventure with split-screen mechanical innovation.
        • Game Modes: Strictly designed for 2-player local and online co-op with Friend’s Pass support.
        • Engine & Graphics: Custom Unreal Engine build delivering vibrant stylized 4K cooperative environments at 60 FPS.
        • Platforms: Fully optimized natively for PlayStation 5, Xbox Series X/S, and PC. `
    },

    {
        id: "game-19",
        title: "Beast-of-Reincarnation",
        price: 57.99,
        rating: 8.1,
        images: [
            "/Images/Gaming/Beast-of-Reincarnation.jpg"
        ],
        category: "gaming",
        description: `• Genre: Innovation Action-RPG & Post-Apocalyptic biopunk adventure featuring unique companion mechanics.
        • Game Modes: Deep single-player story campaign focusing on the journey of Emma and her tactical dog companion Koo.
        • Combat Design: High-performance combat hybrid fusion seamlessly blending real-time sword action and tactical turn-based commands.
        • Platforms: Fully optimized native build for PlayStation 5, Xbox Series X/S, and PC (Steam) gaming rigs. `
    },

    {
        id: "game-20",
        title: "Hollow-Knight : Silksong",
        price: 15.99,
        rating: 9.8,
        images: [
            "/Images/Gaming/Hollow-Knight-Silksong.jpg"
        ],
        category: "gaming",
        description: `• Genre: High-speed Metroidvania, Action-Adventure & Dark Fantasy platformer.
        • Game Content: Dynamic single-player campaign featuring 200+ unique foes, 40+ bosses, and Silk Soul challenge mode.
        • Engine & Physics: Beautifully hand-crafted 2D vector art style optimized for flawless 4K high-framerate scaling at 120+ FPS.
        • Platforms: Fully optimized native build for Nintendo Switch, Nintendo Switch 2, PlayStation 5, Xbox Series X, and PC. `
    },
]