import React from 'react'
import { validateWindowFn } from 'src/utils'
import styles from './styles.module.css'

const RangeColor = () => {
  const [value, setValue] = React.useState<number>(257)
  const setColorHue1 = (newColor: number) => validateWindowFn(() => document.documentElement.style.setProperty('--hue-1', String(newColor)))

  const onChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const numberValue = Number(event.target.value)
    setValue(numberValue)
    setColorHue1(numberValue)
  }

  return (
    <div className={styles.containerColorPicker}>
      <input value={value} onChange={onChangeValue} min={0} max={360} type='range' />
      <div className={styles.cardColor} />
    </div>
  )
}

export default RangeColor
