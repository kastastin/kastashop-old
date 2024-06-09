export function removeOverflowHiddenFromBody() {
  const body = document.querySelector('body') as HTMLBodyElement
  body.classList.remove('overflow-hidden')
}

export function addOverflowHiddenToBody() {
  const body = document.querySelector('body') as HTMLBodyElement
  body.classList.add('overflow-hidden')
}

export function getWindowwidth() {
  const { innerWidth: windowWidth } =
    typeof window !== 'undefined' ? window : { innerWidth: 0 }

  return windowWidth
}
