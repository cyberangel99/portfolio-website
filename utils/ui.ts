import { HASH_ROUTE_MENU_ITEMS } from '../constants'

const getSectionTab = (hash) => HASH_ROUTE_MENU_ITEMS.find((h) => h.hash === hash)

export default getSectionTab
