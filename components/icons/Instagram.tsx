import { cn } from '@/lib/utils'

function Instagram({ className }: { className?: string }) {
    return (
        <div>
            <img className={cn("size-full object-contain sm:rounded-xl", className)} src="https://img.magnific.com/free-vector/instagram-vector-social-media-icon-7-june-2021-bangkok-thailand_53876-136728.jpg" width={24} height={24} alt="instagram" />
        </div>
    )
}

export default Instagram
