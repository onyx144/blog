// components/Header.tsx
'use client'
import Image from 'next/image'
import Link from 'next/link'
import {  ChangeEvent, FormEvent } from 'react'
import Logo from '@/src/asset/logo.jpg'
import styles from './styles.module.scss'
export default function Header() {
 


  return (
    <header className="flex items-center justify-between p-4 bg-gray-200">
      {/* Аватар слева */}
      <div className={styles.avatar}>
        <Image src={Logo} className={styles.avatar} alt="Avatar" width={50} height={50} />
        <span className="ml-2 text-xl font-bold">Next.js App</span>
      </div>
      {/* Инпут поиска и переключатель языка в правом крае */}
      <div className="flex items-center">
        {/* Форма поиска */}
  
        {/* Переключатель языка */}
        <button className="px-2 py-1 border rounded">
          Switch language 
        </button>
      </div>
    </header>
  )
}
