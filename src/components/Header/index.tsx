import { devDependencies } from '../../../package.json';

export default function Header() {
  return (
    <div className='p-20px text-center'>
      <h1 className='font-bold text-2xl mb-2'>
        vite version: {devDependencies.vite}
        <button
          bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600"
          text="sm white"
          font="mono light"
          p="y-2 x-4"
          border="2 rounded blue-200"
        >
          Button
        </button>
        <div className='flex-c'>flex box</div>
        <div>欢迎来到我的网站~</div>
      </h1>
    </div>
  )
}
