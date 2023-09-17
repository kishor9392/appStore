import './index.css'

const AppItem = props => {
  const {appsList} = props

  const {appName, imageUrl} = appsList

  return (
    <li className="list2">
      <img src={imageUrl} className="img2" alt={appName} />
      <p className="h2">{appName}</p>
    </li>
  )
}

export default AppItem
