import { createFileRoute } from '@tanstack/react-router'
import { GreenBox } from '~/components/GreenBox'
import { RedBox } from '~/components/RedBox'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="p-2">
      <RedBox />
      <GreenBox />
      <h3>Welcome Home!!!</h3>
    </div>
  )
}
