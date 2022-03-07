import { useState } from 'react'

import { HASH_ROUTE_MENU_ITEMS } from '../constants'

const usePageOffset = () => ({
  offset: 0
})

const useActiveTab = () => {
  const [activeTab, handleSetActive] = useState(HASH_ROUTE_MENU_ITEMS[0])

  const setActiveTab = (to: string) => {
    const tab = HASH_ROUTE_MENU_ITEMS.find((hashItem) => hashItem.hash === to)
    handleSetActive(tab)
  }
  return {
    activeTab,
    setActiveTab
  }
}

export { usePageOffset, useActiveTab }
