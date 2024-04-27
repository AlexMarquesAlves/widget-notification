import { ReactNode } from 'react'

interface WidgetProps {
  children?: ReactNode
}

export function Widget({ children }: WidgetProps) {
  return (
    <>
      <div className="w-[448px] rounded overflow-hidden">
        <div className="bg-zinc-800 py-4 px-6 flex items-center justify-between">
          <span className="font-bold">Notificações</span>
        </div>
      </div>
      {children}
    </>
  )
}
