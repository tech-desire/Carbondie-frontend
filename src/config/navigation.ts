import type { LucideIcon } from "lucide-react"
import {
  Cpu,
  Gauge,
  HardDrive,
  MemoryStick,
  Monitor,
  Package,
} from "lucide-react"

export interface NavItem {
  label: string
  href: string
  description?: string
  icon?: LucideIcon
  children?: NavItem[]
}

export const mainNavigation: NavItem[] = [
  {
    label: "Processors",
    href: "/processors",
    description: "Choose the processing platform for your next system.",
    icon: Cpu,
    children: [
      {
        label: "Intel",
        href: "/processors/intel",
        description: "Intel Core and Xeon processors.",
      },
      {
        label: "AMD",
        href: "/processors/amd",
        description: "Ryzen and Threadripper processors.",
      },
      {
        label: "All Processors",
        href: "/processors",
        description: "Browse the complete processor lineup.",
      },
    ],
  },

  {
    label: "Graphics",
    href: "/graphics",
    description: "High-performance graphics for gaming and creation.",
    icon: Monitor,
    children: [
      {
        label: "NVIDIA",
        href: "/graphics/nvidia",
        description: "GeForce RTX graphics cards.",
      },
      {
        label: "AMD Radeon",
        href: "/graphics/amd",
        description: "Radeon graphics for demanding workloads.",
      },
      {
        label: "All Graphics",
        href: "/graphics",
        description: "Explore all available graphics cards.",
      },
    ],
  },

  {
    label: "Memory",
    href: "/memory",
    description: "High-speed memory for modern systems.",
    icon: MemoryStick,
    children: [
      {
        label: "DDR5",
        href: "/memory/ddr5",
      },
      {
        label: "DDR4",
        href: "/memory/ddr4",
      },
      {
        label: "All Memory",
        href: "/memory",
      },
    ],
  },

  {
    label: "Storage",
    href: "/storage",
    description: "Fast and reliable storage solutions.",
    icon: HardDrive,
    children: [
      {
        label: "NVMe SSD",
        href: "/storage/nvme",
      },
      {
        label: "SATA SSD",
        href: "/storage/sata",
      },
      {
        label: "All Storage",
        href: "/storage",
      },
    ],
  },

  {
    label: "Builds",
    href: "/builds",
    description: "Purpose-built systems engineered around your workload.",
    icon: Package,
    children: [
      {
        label: "Gaming PCs",
        href: "/builds/gaming",
      },
      {
        label: "Workstations",
        href: "/builds/workstations",
      },
      {
        label: "Creator PCs",
        href: "/builds/creator",
      },
      {
        label: "All Builds",
        href: "/builds",
      },
    ],
  },

  {
    label: "Performance",
    href: "/performance",
    description: "Benchmarks, thermals and system performance.",
    icon: Gauge,
  },
]