import React from 'react'

export const metadata = {
  title: 'Phim Hay - Xem Phim Online Miễn Phí',
  description: 'Xem phim online miễn phí chất lượng cao, cập nhật phim mới nhanh chóng tại Phim Hay.',
}

export default function HomeLayout({children}: {children: React.ReactNode}) {
  return (
    <>{children}</>
  )
}
