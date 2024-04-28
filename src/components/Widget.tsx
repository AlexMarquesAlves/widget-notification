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

          <div className="divide-y-2 divide-zinc-950">
            {/* notification block */}
            <div className="bg-zinc-900 px-8 py-4 flex items-start gap-6">
              <Rocket className="h-6 w-6 text-violet-500 mt-3" />
              <div className="flex-1 flex flex-col gap-2">
                <p className="text-sm leading-relaxed text-zinc-100">
                  Voce recebeu um convite para fazer parte da empresa
                  Rocketseat.
                </p>
                <div className="text-xxs text-zinc-400 flex items-center gap-x-1">
                  <span>Convite</span>
                  <span>Há 3 min</span>
                </div>
              </div>
            </div>
            {/* notification block */}
            <div className="bg-zinc-900 px-8 py-4 flex items-start gap-6">
              <Rocket className="h-6 w-6 text-violet-500 mt-3" />
              <div className="flex-1 flex flex-col gap-2">
                <p className="text-sm leading-relaxed text-zinc-100">
                  Voce recebeu um convite para fazer parte da empresa
                  Rocketseat.
                </p>
                <div className="text-xxs text-zinc-400 flex items-center gap-x-1">
                  <span>Convite</span>
                  <span>Há 3 min</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Ancient Section */}
      </div>
      {children}
    </>
  )
}
