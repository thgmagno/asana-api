/* eslint-disable @typescript-eslint/no-explicit-any */
interface Follower {
  gid: string
  name: string
  resource_type: string
}

interface Project {
  gid: string
  name: string
  resource_type: string
}

interface Section {
  gid: string
  name: string
  resource_type: string
}

interface Parent {
  gid: string
  name: string
  resource_type: string
  resource_subtype: string
}

interface Workspace {
  gid: string
  name: string
  resource_type: string
}

interface Membership {
  project: Project
  section: Section
}

export interface Task {
  gid: string
  actual_time_minutes: number | null
  assignee: string | null
  assignee_status: string
  completed: boolean
  completed_at: string | null
  created_at: string
  due_at: string | null
  due_on: string | null
  followers: Follower[]
  hearted: boolean
  hearts: any[]
  liked: boolean
  likes: any[]
  memberships: Membership[]
  modified_at: string
  name: string
  notes: string
  num_hearts: number
  num_likes: number
  parent: Parent | null
  permalink_url: string
  projects: Project[]
  resource_type: string
  start_at: string | null
  start_on: string | null
  subtasks: Task[]
  tags: any[]
  resource_subtype: string
  workspace: Workspace
}
