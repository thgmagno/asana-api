import { Task } from '@/lib/types'
import Link from 'next/link'

export function Table({ tasks }: { tasks: Task[] | null }) {
  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Lista de Tarefas</h1>
      <table className="min-w-full border border-zinc-200 shadow-md">
        <thead>
          <tr className="bg-zinc-100">
            <th className="border-b px-4 py-2">Nome</th>
            <th className="border-b px-4 py-2">Status</th>
            <th className="border-b px-4 py-2">Data de Criação</th>
            <th className="border-b px-4 py-2">Workspace</th>
            <th className="border-b px-4 py-2">Ações</th>
          </tr>
        </thead>
        <tbody className="bg-zinc-50">
          {tasks && tasks.length > 0 ? (
            tasks.map((task) => (
              <tr key={task.gid} className="hover:bg-zinc-200/50">
                <td className="border-b px-4 py-2">{task.name}</td>
                <td className="border-b px-4 py-2">{task.assignee_status}</td>
                <td className="border-b px-4 py-2">
                  {new Date(task.created_at).toLocaleDateString()}
                </td>
                <td className="border-b px-4 py-2">{task.workspace.name}</td>
                <td className="border-b px-4 py-2">
                  <Link
                    href={`/task?id=${task.gid}`}
                    className="text-blue-500 hover:underline"
                  >
                    Abrir
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="col-span-5">Nenhum registro encontrado</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
