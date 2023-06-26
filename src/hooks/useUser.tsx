import { supabase } from '../utils/supebase'
import type { User } from '../types/types'
import { useEffect, useState } from 'react'

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
            supabase.auth.onAuthStateChange((_event) => {
                if (_event === 'SIGNED_OUT') {
                    setUser(null)
                }
            })
        }
        console.log('getuser')
        getuser()
    }, [])
    return { user }
}
