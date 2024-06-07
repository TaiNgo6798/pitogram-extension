import { useCallback, useEffect, useState } from "react"

type ThisUserNameType = string | null
const Popup = () => {
  const [thisUserName, setThisUserName] = useState<ThisUserNameType>('initial')
  const [count, setCount] = useState<number>(0)

  const getCurrentTab = useCallback(async () => {
    return chrome.tabs.query({ active: true, lastFocusedWindow: true })
  }, [chrome.tabs])

  useEffect(() => {
    getCurrentTab().then((res: any) => {
      const parts = res[0].url.split('/') || []
      if (parts[2].includes('instagram.com')) {
        setThisUserName(parts[3])
      } else {
        setThisUserName(null)
      }
    })
  }, [getCurrentTab])

  setInterval(async () => {
    chrome.storage.local.get('count').then(val => {
      setCount(val.count)
    })
  }, 1000)

  const renderUserName = () => {
    switch (thisUserName) {
      case 'initial':
        return <p>Loading...</p>
      case null:
      case '':
        return <p className="font-bold">Please open an Instagram profile</p>
      default:
        return <div className="flex gap-2">
          <p>User:</p>
          <p className="font-bold">{thisUserName}</p>
        </div>
    }
  }

  return (
    <div className="w-fit h-fit min-w-[400px] min-h-[300px] p-4">
      {renderUserName()}
      <p>Count: {count}</p>
      <button className="btn btn-primary">Scan</button>
    </div>
  )
}

export default Popup