import type { User } from '../types/types'
import { useEffect, useState } from 'react'
import { supabase } from '../utils/supebase'

const urlRedirect = import.meta.env.PUBLIC_URL_REDIRECT
export const useUser = () => {
    const [user, setUser] = useState<User | null>(null)
    useEffect(() => {
        async function getuser() {
            const { data } = await supabase.auth.getUser()
            console.log(data)
            if (!data?.user) {
                setUser(null)
                return
            }
            const user_metadata = data?.user?.user_metadata
            if (user_metadata == null) {
                setUser(null)
                return
            }
            setUser({
                name: user_metadata.name,
                email: user_metadata.email,
                avatar: user_metadata.avatar_url,
                userName: user_metadata.user_name,
            })
        }
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event) => {
            if (_event === 'SIGNED_OUT') {
                setUser(null)
            }
        })

        getuser()
        return () => {
            // Desuscribirse del listener al desmontar el componente
            subscription.unsubscribe()
        }
    }, [])
    async function signIn(): Promise<void> {
        try {
            const { data, error } = await supabase.auth.signInWithOAuth({
                provider: 'github',
                options: {
                    redirectTo: urlRedirect,
                },
            })
            if (error) throw new Error('Error al autenticarte con github')
        } catch (error) {
            alert(error)
        }
    }
    return { user, signIn, Logued: user != null }
}
