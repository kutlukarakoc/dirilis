import { TabsTrigger } from '@/components/ui/tabs'

interface Trigger {
  value: string
  title: string
  disable: boolean
}

const Trigger = ({ value, title, disable }: Trigger) => {
  return (
    <TabsTrigger
      value={value}
      aria-disabled={disable}
      disabled={disable}
    >
      {title}
    </TabsTrigger>
  )
}

export default Trigger
