/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'export', // การตั้งค่านี้สำคัญมากสำหรับ GitHub Pages
  basePath: '/web-don-rae', // ใส่ชื่อ repository ของคุณ
  assetPrefix: '/web-don-rae/', // ป้องกันปัญหาโหลดไฟล์ CSS/JS ไม่ขึ้น
  env: {
    NEXT_PUBLIC_BASE_PATH: '/web-don-rae',
    NEXT_PUBLIC_MESSENGER_URL: 'https://m.me/100064414792260',
  },
  images: {
    unoptimized: true, // Static export ไม่รองรับ image optimization แบบปกติของ Next.js
  },
}

module.exports = nextConfig