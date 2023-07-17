export interface Participant {
    name: string
    title: string
    img: string
    hora: string
    type: number
}

export interface User {
    name: string
    email: string
    avatar: string
    userName: string
}

export interface Ticket {
    num_ticket: string
    name: string
    avatar_url: string
    username_github: string
}
export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json }
    | Json[]

export interface Faq {
    question: string
    answer: string
}

export interface MenuLink {
    name: string
    anchor: string
}

export interface Database {}

export interface TimeLocal {
    day: number
    month: number
    monthName: string
    time: string
    fulltime: string
}

export interface ScheduleItem {
    name: string
    date: string
    url: string | null
    type: 'presentation' | 'interval'
    speaker?: string
}
