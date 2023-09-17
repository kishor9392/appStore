import './index.css'

const TabItem = props => {
  const {tabsList, isActive, updateCategory} = props

  const {displayText, tabId} = tabsList

  const v = isActive ? 'btn2' : ''

  const onTap = () => {
    updateCategory(tabId)
  }

  return (
    <li className="bg4">
      <button className={`btn ${v}`} type="button" onClick={onTap}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
