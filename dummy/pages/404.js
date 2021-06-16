import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function NotFound() {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 4000)
    }, [])

    return (
        <div>
            Upss did not found!!
        </div>
    )
}
