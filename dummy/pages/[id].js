import {getFriendsById} from "../services/externalApi";
import {getContentfulEntriesBySlug} from "../services/contenful";
import styles from '../styles/CardDetail.module.css'

export const getStaticPaths = async () => {
    const [homeData] = await getContentfulEntriesBySlug({ contentType: 'homePage', slug: 'home' });
    const paths = homeData.fields.userList.map(({fields})  => {
        return {
            params: { id: fields.slug }
        }
    });

    return {
        paths,
        fallback: true,
    }
}

export const getStaticProps = async ({params}) => {
    const { id: selectedId } = params;
    const user = await getFriendsById(selectedId);
    const [selectedUser] = await getContentfulEntriesBySlug({ contentType: 'author', slug: selectedId });

    if (!selectedUser) {
        return {
            redirect: {
                destination: '/404',
                permanent: false,
            }
        }
    }

    const { fields: { firstName = '', lastName = ''} } = selectedUser;
    const selectedUserName = `${firstName} ${lastName}`;

    return {
        props: { user, selectedUserName },
        revalidate: 10,
    }
}

export default function CartDetail({user, selectedUserName}) {

    if (!user || !selectedUserName) {
        return <div className={styles.loader}></div>
    }

    const { address } = user;
    const { city, street, zipcode } = address;

    return(
        <div>
            <title className={styles.title}>User Details From {selectedUserName} </title>
            <div className={styles.content}>
                <div className={styles.description}>
                    <div className={styles.descriptionEntry}>
                        City: {city}
                    </div>
                    <div className={styles.descriptionEntry}>
                        Street: {street}
                    </div>
                    <div className={styles.descriptionEntry}>
                        ZipCode: {zipcode}
                    </div>
                </div>
            </div>
        </div>
    )
}
