import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // 状态页的标题
  title: "Ignorant's Status Page",
  // 状态页头部的链接
  links: [
    { link: 'https://ignorant.top/', label: 'Blog', highlight: true },
    { link: 'https://filecodebox.ignorant.top/#/', label: 'filecodebox' },
    { link: 'https://easyimage.ignorant.top/', label: 'easyimage' },
  ],
  // 对监控项进行分组显示
  group: {
    '🌐 Ignorant的网站': ['ignorant_blog', 'ignorant_filecodebox', 'ignorant_easyimage'],
  },
  maintenances: {
    upcomingColor: 'gray',
  },
}

const workerConfig: WorkerConfig = {
  kvWriteCooldownMinutes: 3,
  // 在这里定义您所有的监控项
  monitors: [
    // 1. 博客监控项
    {
      id: 'ignorant_blog',
      name: 'Ignorant的博客',
      method: 'GET',
      target: 'https://ignorant.top',
      tooltip: '博客主页',
      statusPageLink: 'https://ignorant.top',
      hideLatencyChart: false,
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    // 2. FileCodeBox 监控项
    {
      id: 'ignorant_filecodebox',
      name: 'FileCodeBox',
      method: 'GET',
      target: 'https://filecodebox.ignorant.top/#/',
      tooltip: '文件快递柜',
      statusPageLink: 'https://filecodebox.ignorant.top/#/',
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    // 3. EasyImage 监控项
    {
      id: 'ignorant_easyimage',
      name: 'EasyImage',
      method: 'GET',
      target: 'https://easyimage.ignorant.top/',
      tooltip: '简单图床',
      statusPageLink: 'https://easyimage.ignorant.top/',
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    }
  ],
  
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {},
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {},
  },
}

// 留空即可，不需要维护横幅
const maintenances: MaintenanceConfig[] = []

export { maintenances, pageConfig, workerConfig }