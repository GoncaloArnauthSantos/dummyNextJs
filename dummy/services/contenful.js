import {createClient} from "contentful";

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getContentfulEntriesBySlug = async ({ contentType = '', slug = '' }) => {
    const { items } = await client.getEntries({
        content_type: contentType,
        'fields.slug': slug
    })

    return items;
};
