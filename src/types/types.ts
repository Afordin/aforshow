export interface Participant {
    name: string
    type: string
    title: string
    img: string
    descrition: string
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
