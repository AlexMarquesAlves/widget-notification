import { Rocket } from 'lucide-react'
import { ReactNode } from 'react'

interface WidgetProps {
  children?: ReactNode
}

export function Widget({ children }: WidgetProps) {
  return (
    <>
      <div className="w-[448px] rounded overflow-hidden">
        {/* Header */}
        <div className="bg-zinc-800 py-4 px-6 flex items-center justify-between">
          <span className="font-bold">Notificações</span>
          <button className="text-violet-500 font-bold text-xs hover:text-violet-400">
            MARCAR TODAS COMO VISTAS
          </button>
        </div>

        {/* Recent Section */}
        <div className="">
          <div className="bg-zinc-950 px-5 py-2 text-sm text-zinc-400">
            Recentes
          </div>

          <div className="bg-zinc-900 px-8 py-4 flex items-start gap-6">
            <Rocket className="h-6 w-6 text-violet-500" />
          </div>
        </div>
        {/* Ancient Section */}
      </div>
      {children}
    </>
  )
}
