import React from 'react'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'
import style from './root.module.css'

function Root() {
  const router = useRouter()
  const [roots, setRoots] = useState([])



  useEffect(() => {
    const path = router.pathname
    const _roots = path.split('/')
    setRoots(_roots)
  }, [router])


  const setRootText = () => {
    console.log(roots)
    if (roots) {
      return (
        roots.map((root, i) => {
          if (root) {
            return <li key={i} className={style.pagePath_list_item}>{root}</li>
          }
        })
      )
    }
  }

  return (
    <div className={style.pagePath}>
      <ul className={style.pagePath_list}>
        {setRootText()}
      </ul>
    </div>
  )
}

export default Root