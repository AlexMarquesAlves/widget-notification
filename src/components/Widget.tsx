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
          <button className="text-violet-500 font-bold text-xs hover:text-violet-400">
            MARCAR TODAS COMO VISTAS
          </button>
        </div>
      </div>
      {children}
    </>
  )
}
