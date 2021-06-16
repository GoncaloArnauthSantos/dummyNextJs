import Image from 'next/image'
import { useRouter } from 'next/router'


export default function User({ data }) {
    const router = useRouter()
    const { email, image, firstName, lastName, role, slug } = data;

    const handleClick = (userSlug) => {
        router.push(`/${userSlug}`)
    };

    return(
        <button onClick={() => handleClick(slug)}>
            <div className="card-image">
                { image ? <Image
                    src={'https:' + image.fields.file.url}
                    width={image.fields.file.details.image.width}
                    height={image.fields.file.details.image.height}
                />
                : null }
            </div>

            <div className="card-description">
                <div className="description-entry">
                    Name:{firstName} {lastName}
                </div>
                <div className="description-entry">
                    Email: {email}
                </div>
                <div className="description-entry">
                    Role: {role}
                </div>
            </div>
        </button>
    )
}
