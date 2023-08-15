export const getBoxPosition = (
  e: MouseEvent,
  boxWidth: number,
  boxHeight: number,
  prePos?: { x?: number; y?: number },
) => {
  let popupXPosition = prePos && prePos.x ? prePos.x : 0,
    popupYPosition = prePos && prePos.y ? prePos.y : 0

  if (!prePos || !prePos.x) {
    if (e.clientX + boxWidth > window.innerWidth) {
      popupXPosition = e.pageX - boxWidth
    } else {
      popupXPosition = e.pageX
    }
  }

  if (!prePos || !prePos.y) {
    if (e.clientY + boxHeight > window.innerHeight) {
      popupYPosition = e.pageY - boxHeight
    } else {
      popupYPosition = e.pageY
    }
  }
  return { x: popupXPosition, y: popupYPosition }
}
