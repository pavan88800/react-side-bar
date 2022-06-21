import './App.css'
import SideBar from './components/SideBar'

function App () {
  return (
    <div className='App'>
      <>
        <SideBar
          width={300}
          backgroundColor={'black'}
          TextColor={'#fff'}
          HeaderTitle='Side Bar'
          HeaderLogo={true}
          HeaderTextSize={40}
          FooterTitle='Footer title'
        />
      </>
    </div>
  )
}

export default App
