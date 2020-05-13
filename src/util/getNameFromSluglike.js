/**
 * Converts a sluglike string into a name string by removing
 * 
 * - the first character, if it is a '/' or '#'
 * - the last character, if it is a '/'
 * @param {string} sluglike the slug string
 * 
 * @returns {string} the name string
 * 
 * @throws if `sluglike` is not a string
 */
export default function getNameFromSluglike(sluglike) {
    // Weird edge cases
    if (sluglike == null || sluglike === '' || sluglike === '#')
        return ''
    if (typeof sluglike !== 'string')
        throw new Error('Sluglike must be a string.')

    // remove first char if it is '#' or '/'
    if(sluglike[0] === '#' || sluglike[0] === '/') {
        sluglike = sluglike.substr(1) 
    }

    if (sluglike === '')
        return ''

    if (sluglike[sluglike.length - 1] === '/') {
        sluglike = sluglike.substr(0, sluglike.length - 1)
    }

    return sluglike
}