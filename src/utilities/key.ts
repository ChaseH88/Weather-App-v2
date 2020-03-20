/**
 * Generate a random string
 * @returns {String} Returns a random key to use with mapped components
 */
export const key = (): string => (
    `_${Math.random().toString(36).substr(2, 9)}`
)
    