export interface Participant {
    name: string
    type: string
    title: string
    img: string
    descrition: string
}
export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json }
    | Json[]

export interface Database {}
