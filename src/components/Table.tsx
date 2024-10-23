import { Task } from '@/lib/types'
import Link from 'next/link'

export function Table({ tasks }: { tasks: Task[] | null }) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">Lista de Tarefas</h1>
      <table className="min-w-full border border-zinc-800 bg-white">
        <thead>
          <tr className="bg-zinc-700">
            <th className="border-b px-4 py-2">Nome</th>
            <th className="border-b px-4 py-2">Status</th>
            <th className="border-b px-4 py-2">Data de Criação</th>
            <th className="border-b px-4 py-2">Workspace</th>
            <th className="border-b px-4 py-2">Link</th>
          </tr>
        </thead>
        <tbody className="bg-zinc-900/90">
          {tasks && tasks.length > 0 ? (
            tasks.map((task) => (
              <tr key={task.gid} className="hover:bg-zinc-900">
                <td className="border-b px-4 py-2">{task.name}</td>
                <td className="border-b px-4 py-2">{task.assignee_status}</td>
                <td className="border-b px-4 py-2">
                  {new Date(task.created_at).toLocaleDateString()}
                </td>
                <td className="border-b px-4 py-2">{task.workspace.name}</td>
                <td className="border-b px-4 py-2">
                  <Link
                    href={task.permalink_url}
                    target="_blank"
                    rel="noopener noreferrer"
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
