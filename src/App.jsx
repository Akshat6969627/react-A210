import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import A from './components/A'
import {ErrorBoundary} from 'react-error-boundary'
import B from './components/B'

function Erf({error}){
return <>
<p>something is wrong : {error.message}</p>
</>
}

function App() {
 

  return (
    <>

    
      {/* <ErrorBoundary FallbackComponent={({error,resetErrorBoundary})=> {
        return (
          <>
          <h1>something went wrong .{error.message}</h1>
          <button onClick={()=> resetErrorBoundary()}>reset</button>
          </>
        )
      }}>
        <A/>
        
        </ErrorBoundary> */}

        <B/>

        
    </>
  )
}

export default App
